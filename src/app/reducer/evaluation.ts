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
      });
      return key;
    })
  );

  return images;
};

export const addEvaluation = createAsyncThunk(
  "evaluation/addEvaluation",
  async (evaluation: EvaluationFormProps) => {
    const { name, email, phone, categoria, type, description, images } =
      evaluation;
    const imgs = await uploadImage(images);
    const newEvaluation = await DataStore.save(
      new Evaluation({
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
  },
});

export const { clearEvaluation } = evaluationSlice.actions;
export default evaluationSlice.reducer;
