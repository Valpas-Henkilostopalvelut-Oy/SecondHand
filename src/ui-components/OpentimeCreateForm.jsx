/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Opentime } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OpentimeCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    day: "",
    start: "",
    end: "",
    isClosed: false,
    type: "",
    createdBy: "",
    storeID: "",
  };
  const [day, setDay] = React.useState(initialValues.day);
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [isClosed, setIsClosed] = React.useState(initialValues.isClosed);
  const [type, setType] = React.useState(initialValues.type);
  const [createdBy, setCreatedBy] = React.useState(initialValues.createdBy);
  const [storeID, setStoreID] = React.useState(initialValues.storeID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDay(initialValues.day);
    setStart(initialValues.start);
    setEnd(initialValues.end);
    setIsClosed(initialValues.isClosed);
    setType(initialValues.type);
    setCreatedBy(initialValues.createdBy);
    setStoreID(initialValues.storeID);
    setErrors({});
  };
  const validations = {
    day: [{ type: "Required" }],
    start: [],
    end: [],
    isClosed: [],
    type: [{ type: "Required" }],
    createdBy: [{ type: "Required" }],
    storeID: [{ type: "Required" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          day,
          start,
          end,
          isClosed,
          type,
          createdBy,
          storeID,
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
          await DataStore.save(new Opentime(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OpentimeCreateForm")}
      {...rest}
    >
      <TextField
        label="Day"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={day}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              day: value,
              start,
              end,
              isClosed,
              type,
              createdBy,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.day ?? value;
          }
          if (errors.day?.hasError) {
            runValidationTasks("day", value);
          }
          setDay(value);
        }}
        onBlur={() => runValidationTasks("day", day)}
        errorMessage={errors.day?.errorMessage}
        hasError={errors.day?.hasError}
        {...getOverrideProps(overrides, "day")}
      ></TextField>
      <TextField
        label="Start"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={start && convertToLocal(new Date(start))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              day,
              start: value,
              end,
              isClosed,
              type,
              createdBy,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.start ?? value;
          }
          if (errors.start?.hasError) {
            runValidationTasks("start", value);
          }
          setStart(value);
        }}
        onBlur={() => runValidationTasks("start", start)}
        errorMessage={errors.start?.errorMessage}
        hasError={errors.start?.hasError}
        {...getOverrideProps(overrides, "start")}
      ></TextField>
      <TextField
        label="End"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={end && convertToLocal(new Date(end))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              day,
              start,
              end: value,
              isClosed,
              type,
              createdBy,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.end ?? value;
          }
          if (errors.end?.hasError) {
            runValidationTasks("end", value);
          }
          setEnd(value);
        }}
        onBlur={() => runValidationTasks("end", end)}
        errorMessage={errors.end?.errorMessage}
        hasError={errors.end?.hasError}
        {...getOverrideProps(overrides, "end")}
      ></TextField>
      <SwitchField
        label="Is closed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isClosed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              day,
              start,
              end,
              isClosed: value,
              type,
              createdBy,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.isClosed ?? value;
          }
          if (errors.isClosed?.hasError) {
            runValidationTasks("isClosed", value);
          }
          setIsClosed(value);
        }}
        onBlur={() => runValidationTasks("isClosed", isClosed)}
        errorMessage={errors.isClosed?.errorMessage}
        hasError={errors.isClosed?.hasError}
        {...getOverrideProps(overrides, "isClosed")}
      ></SwitchField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day,
              start,
              end,
              isClosed,
              type: value,
              createdBy,
              storeID,
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
      >
        <option
          children="Default"
          value="default"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Custom"
          value="custom"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Holiday"
          value="holiday"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Short"
          value="short"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Created by"
        isRequired={true}
        isReadOnly={false}
        value={createdBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day,
              start,
              end,
              isClosed,
              type,
              createdBy: value,
              storeID,
            };
            const result = onChange(modelFields);
            value = result?.createdBy ?? value;
          }
          if (errors.createdBy?.hasError) {
            runValidationTasks("createdBy", value);
          }
          setCreatedBy(value);
        }}
        onBlur={() => runValidationTasks("createdBy", createdBy)}
        errorMessage={errors.createdBy?.errorMessage}
        hasError={errors.createdBy?.hasError}
        {...getOverrideProps(overrides, "createdBy")}
      ></TextField>
      <TextField
        label="Store id"
        isRequired={true}
        isReadOnly={false}
        value={storeID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day,
              start,
              end,
              isClosed,
              type,
              createdBy,
              storeID: value,
            };
            const result = onChange(modelFields);
            value = result?.storeID ?? value;
          }
          if (errors.storeID?.hasError) {
            runValidationTasks("storeID", value);
          }
          setStoreID(value);
        }}
        onBlur={() => runValidationTasks("storeID", storeID)}
        errorMessage={errors.storeID?.errorMessage}
        hasError={errors.storeID?.hasError}
        {...getOverrideProps(overrides, "storeID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
