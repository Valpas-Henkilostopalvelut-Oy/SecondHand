/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Store } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function StoreUpdateForm(props) {
  const {
    id: idProp,
    store,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isConfirmed: false,
    name: "",
    description: "",
    services: [],
    clicked: "",
    embedmap: "",
  };
  const [isConfirmed, setIsConfirmed] = React.useState(
    initialValues.isConfirmed
  );
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [services, setServices] = React.useState(initialValues.services);
  const [clicked, setClicked] = React.useState(initialValues.clicked);
  const [embedmap, setEmbedmap] = React.useState(initialValues.embedmap);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = storeRecord
      ? { ...initialValues, ...storeRecord }
      : initialValues;
    setIsConfirmed(cleanValues.isConfirmed);
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setServices(cleanValues.services ?? []);
    setCurrentServicesValue("");
    setClicked(cleanValues.clicked);
    setEmbedmap(cleanValues.embedmap);
    setErrors({});
  };
  const [storeRecord, setStoreRecord] = React.useState(store);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Store, idProp) : store;
      setStoreRecord(record);
    };
    queryData();
  }, [idProp, store]);
  React.useEffect(resetStateValues, [storeRecord]);
  const [currentServicesValue, setCurrentServicesValue] = React.useState("");
  const servicesRef = React.createRef();
  const validations = {
    isConfirmed: [],
    name: [],
    description: [],
    services: [],
    clicked: [],
    embedmap: [{ type: "URL" }],
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
          isConfirmed,
          name,
          description,
          services,
          clicked,
          embedmap,
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
      <SwitchField
        label="Is confirmed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isConfirmed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              isConfirmed: value,
              name,
              description,
              services,
              clicked,
              embedmap,
            };
            const result = onChange(modelFields);
            value = result?.isConfirmed ?? value;
          }
          if (errors.isConfirmed?.hasError) {
            runValidationTasks("isConfirmed", value);
          }
          setIsConfirmed(value);
        }}
        onBlur={() => runValidationTasks("isConfirmed", isConfirmed)}
        errorMessage={errors.isConfirmed?.errorMessage}
        hasError={errors.isConfirmed?.hasError}
        {...getOverrideProps(overrides, "isConfirmed")}
      ></SwitchField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isConfirmed,
              name: value,
              description,
              services,
              clicked,
              embedmap,
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
              isConfirmed,
              name,
              description: value,
              services,
              clicked,
              embedmap,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              isConfirmed,
              name,
              description,
              services: values,
              clicked,
              embedmap,
            };
            const result = onChange(modelFields);
            values = result?.services ?? values;
          }
          setServices(values);
          setCurrentServicesValue("");
        }}
        currentFieldValue={currentServicesValue}
        label={"Services"}
        items={services}
        hasError={errors?.services?.hasError}
        errorMessage={errors?.services?.errorMessage}
        setFieldValue={setCurrentServicesValue}
        inputFieldRef={servicesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Services"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentServicesValue}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (errors.services?.hasError) {
              runValidationTasks("services", value);
            }
            setCurrentServicesValue(value);
          }}
          onBlur={() => runValidationTasks("services", currentServicesValue)}
          errorMessage={errors.services?.errorMessage}
          hasError={errors.services?.hasError}
          ref={servicesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "services")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Clicked"
        isRequired={false}
        isReadOnly={false}
        value={clicked}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isConfirmed,
              name,
              description,
              services,
              clicked: value,
              embedmap,
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
        label="Embedmap"
        isRequired={false}
        isReadOnly={false}
        value={embedmap}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isConfirmed,
              name,
              description,
              services,
              clicked,
              embedmap: value,
            };
            const result = onChange(modelFields);
            value = result?.embedmap ?? value;
          }
          if (errors.embedmap?.hasError) {
            runValidationTasks("embedmap", value);
          }
          setEmbedmap(value);
        }}
        onBlur={() => runValidationTasks("embedmap", embedmap)}
        errorMessage={errors.embedmap?.errorMessage}
        hasError={errors.embedmap?.hasError}
        {...getOverrideProps(overrides, "embedmap")}
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
          isDisabled={!(idProp || store)}
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
              !(idProp || store) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
