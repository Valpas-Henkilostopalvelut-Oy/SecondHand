/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Store } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StoreUpdateForm(props) {
  const {
    id: idProp,
    store: storeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    usernameID: "",
    type: "",
    name: "",
    description: "",
    clicked: "",
    logo: "",
  };
  const [usernameID, setUsernameID] = React.useState(initialValues.usernameID);
  const [type, setType] = React.useState(initialValues.type);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [clicked, setClicked] = React.useState(initialValues.clicked);
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = storeRecord
      ? { ...initialValues, ...storeRecord }
      : initialValues;
    setUsernameID(cleanValues.usernameID);
    setType(cleanValues.type);
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setClicked(cleanValues.clicked);
    setLogo(cleanValues.logo);
    setErrors({});
  };
  const [storeRecord, setStoreRecord] = React.useState(storeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Store, idProp)
        : storeModelProp;
      setStoreRecord(record);
    };
    queryData();
  }, [idProp, storeModelProp]);
  React.useEffect(resetStateValues, [storeRecord]);
  const validations = {
    usernameID: [{ type: "Required" }],
    type: [],
    name: [],
    description: [],
    clicked: [],
    logo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          usernameID,
          type,
          name,
          description,
          clicked,
          logo,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Store.copyOf(storeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StoreUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username id"
        isRequired={true}
        isReadOnly={false}
        value={usernameID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              usernameID: value,
              type,
              name,
              description,
              clicked,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.usernameID ?? value;
          }
          if (errors.usernameID?.hasError) {
            runValidationTasks("usernameID", value);
          }
          setUsernameID(value);
        }}
        onBlur={() => runValidationTasks("usernameID", usernameID)}
        errorMessage={errors.usernameID?.errorMessage}
        hasError={errors.usernameID?.hasError}
        {...getOverrideProps(overrides, "usernameID")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              usernameID,
              type: value,
              name,
              description,
              clicked,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              usernameID,
              type,
              name: value,
              description,
              clicked,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              usernameID,
              type,
              name,
              description: value,
              clicked,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Clicked"
        isRequired={false}
        isReadOnly={false}
        value={clicked}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              usernameID,
              type,
              name,
              description,
              clicked: value,
              logo,
            };
            const result = onChange(modelFields);
            value = result?.clicked ?? value;
          }
          if (errors.clicked?.hasError) {
            runValidationTasks("clicked", value);
          }
          setClicked(value);
        }}
        onBlur={() => runValidationTasks("clicked", clicked)}
        errorMessage={errors.clicked?.errorMessage}
        hasError={errors.clicked?.hasError}
        {...getOverrideProps(overrides, "clicked")}
      ></TextField>
      <TextField
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              usernameID,
              type,
              name,
              description,
              clicked,
              logo: value,
            };
            const result = onChange(modelFields);
            value = result?.logo ?? value;
          }
          if (errors.logo?.hasError) {
            runValidationTasks("logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("logo", logo)}
        errorMessage={errors.logo?.errorMessage}
        hasError={errors.logo?.hasError}
        {...getOverrideProps(overrides, "logo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || storeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || storeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
