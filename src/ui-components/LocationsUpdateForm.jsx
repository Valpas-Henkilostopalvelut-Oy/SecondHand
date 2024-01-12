/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Locations } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function LocationsUpdateForm(props) {
  const {
    id: idProp,
    locations: locationsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    adminName: "",
    country: "",
  };
  const [adminName, setAdminName] = React.useState(initialValues.adminName);
  const [country, setCountry] = React.useState(initialValues.country);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = locationsRecord
      ? { ...initialValues, ...locationsRecord }
      : initialValues;
    setAdminName(cleanValues.adminName);
    setCountry(cleanValues.country);
    setErrors({});
  };
  const [locationsRecord, setLocationsRecord] =
    React.useState(locationsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Locations, idProp)
        : locationsModelProp;
      setLocationsRecord(record);
    };
    queryData();
  }, [idProp, locationsModelProp]);
  React.useEffect(resetStateValues, [locationsRecord]);
  const validations = {
    adminName: [{ type: "Required" }],
    country: [{ type: "Required" }],
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
          adminName,
          country,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Locations.copyOf(locationsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "LocationsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Admin name"
        isRequired={true}
        isReadOnly={false}
        value={adminName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminName: value,
              country,
            };
            const result = onChange(modelFields);
            value = result?.adminName ?? value;
          }
          if (errors.adminName?.hasError) {
            runValidationTasks("adminName", value);
          }
          setAdminName(value);
        }}
        onBlur={() => runValidationTasks("adminName", adminName)}
        errorMessage={errors.adminName?.errorMessage}
        hasError={errors.adminName?.hasError}
        {...getOverrideProps(overrides, "adminName")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={true}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminName,
              country: value,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
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
          isDisabled={!(idProp || locationsModelProp)}
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
              !(idProp || locationsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
