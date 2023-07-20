import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Evaluation, type LazyEvaluation } from "../../models";
import { DataStore, Storage } from "aws-amplify";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  EvaluationFormProps,
  EvaluationProps,
} from "../../types/evaluation";

const initialState: EvaluationProps = {
  isLoading: false,
  isError: false,
  error: null,
  data: [],
};

const getFixedEval = (evaluation: LazyEvaluation) => {
  const { ...rest } = evaluation;
  return rest;
};

export const fetchEvaluation = createAsyncThunk(
  "evaluation/fetchEvaluation",
  async () => {
    const evaluation = await DataStore.query(Evaluation);
    const filteredEvaluation = evaluation.map((evaluation) =>
      getFixedEval(evaluation)
    );
    return filteredEvaluation;
  }
);

const uploadImage = async (imgs: File[]) => {
  //upload images to Storage in folder "evaluation"
  const images = await Promise.all(
    imgs.map(async (image) => {
      const fileKey = `evaluation/${Date.now()}-${image.name}`;
      const { key } = await Storage.put(fileKey, image, {
        contentType: image.type,
        progressCallback(progress) {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
      return key;
    })
  );

  return images;
};

const deleteImage = async (imgs: (string | null)[]) => {
  //delete images from Storage
  await Promise.all(
    imgs.map(async (image) => {
      if (image) await Storage.remove(image);
    })
  );
};

export const addEvaluation = createAsyncThunk(
  "evaluation/addEvaluation",
  async (evaluation: EvaluationFormProps) => {
    const { name, email, phone, categoria, type, description, images } =
      evaluation;
    const imgs = await uploadImage(images);
    //generete evaluation number 8 numbers
    const evaluationNum = Math.floor(10000000 + Math.random() * 90000000);
    console.log(evaluationNum);
    const newEvaluation = await DataStore.save(
      new Evaluation({
        evaluationNum,
        name,
        email,
        phone,
        category: categoria,
        type,
        description,
        images: imgs,
      })
    );
    return getFixedEval(newEvaluation);
  }
);

export const confirmEvaluation = createAsyncThunk(
  "evaluation/confirmEvaluation",
  async ({ id, isAdmin }: { id: string; isAdmin: boolean }) => {
    const evaluation = await DataStore.query(Evaluation, id);
    if (!evaluation) throw new Error("Evaluation not found");
    if (evaluation.isConfirmed) throw new Error("Evaluation already confirmed");
    if (!isAdmin) throw new Error("You are not an admin");
    const confirmedEvaluation = await DataStore.save(
      Evaluation.copyOf(evaluation, (updated) => {
        updated.isConfirmed = true;
      })
    );
    return getFixedEval(confirmedEvaluation);
  }
);

export const deleteEvaluation = createAsyncThunk(
  "evaluation/deleteEvaluation",
  async ({ id, isAdmin }: { id: string; isAdmin: boolean }) => {
    const evaluation = await DataStore.query(Evaluation, id);
    if (!evaluation) throw new Error("Evaluation not found");
    if (!isAdmin) throw new Error("You are not an admin");
    await DataStore.delete(Evaluation, id);
    await deleteImage(evaluation.images);
    return id;
  }
);

const evaluationSlice = createSlice({
  name: "evaluation",
  initialState,
  reducers: {
    clearEvaluation: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvaluation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEvaluation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchEvaluation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(addEvaluation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      addEvaluation.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = [...state.data, action.payload];
      }
    );
    builder.addCase(addEvaluation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(confirmEvaluation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      confirmEvaluation.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = state.data.map((evaluation) =>
          evaluation.id === action.payload.id ? action.payload : evaluation
        );
      }
    );
    builder.addCase(confirmEvaluation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    builder.addCase(deleteEvaluation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      deleteEvaluation.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = state.data.filter(
          (evaluation) => evaluation.id !== action.payload
        );
      }
    );
    builder.addCase(deleteEvaluation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { clearEvaluation } = evaluationSlice.actions;
export default evaluationSlice.reducer;
