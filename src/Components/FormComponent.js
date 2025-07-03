import React from "react";
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { AutoComplete } from "@progress/kendo-react-dropdowns";
import { sports } from "../shared-dd-data";
import { DatePicker } from "@progress/kendo-react-dateinputs";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div className="k-form-field-wrap">
      <Input {...others} labelClassName={"k-form-label"} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const DepartmentDropdown = (fieldRenderProps) => {
  const start = performance.now();
  const { validationMessage, visited, value, onChange, name, ...others } =
    fieldRenderProps;
  React.useEffect(() => {
    const end = performance.now(); // ⏱️ End time
    console.log(`⏱️ SportsDropdown render time: ${(end - start).toFixed(2)}ms`);
  }, []);

  return (
    <div className="k-form-field-wrap">
      <AutoComplete
        data={sports}
        suggest={true}
        value={value}
        onChange={(e) => {
          onChange({ value: e.value }); // ✅ Sync form state
        }}
      />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const DateInputComponent = (fieldRenderProps) => {
  const start = performance.now();
  const { validationMessage, visited, value, onChange, name } =
    fieldRenderProps;

  React.useEffect(() => {
    const end = performance.now(); // ⏱️ End time
    console.log(`⏱️ DatePicker render time: ${(end - start).toFixed(2)}ms`);
  }, []);

  return (
    <div className="k-form-field-wrap">
      <DatePicker
        style={{ width: "300px" }}
        format="MM/dd/yyyy"
        value={value}
        onChange={(e) => onChange({ value: e.value })}
        name={name}
      />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

const CheckboxComponent = (fieldRenderProps) => {
  const start = performance.now();
  const { validationMessage, visited, value, onChange, label, name } =
    fieldRenderProps;
  React.useEffect(() => {
    const end = performance.now(); // ⏱️ End time
    console.log(`⏱️ Checkbox render time: ${(end - start).toFixed(2)}ms`);
  }, []);
  return (
    <div className="k-form-field-wrap" style={{ marginTop: "16px" }}>
      <Checkbox
        name={name}
        label={label}
        checked={value}
        onChange={(e) => onChange({ value: e.value })}
      />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

export default function FormComponent() {
  const handleSubmit = (dataItem) => {
    const start = performance.now();
    const formattedData = {
      ...dataItem,
      hireDate: dataItem.hireDate
        ? dataItem.hireDate.toLocaleDateString("en-GB") // "07/07/2025"
        : null,
    };

    const end = performance.now(); // ⏱️ End time
    console.log(`⏱️ Form submit time: ${(end - start).toFixed(2)}ms`);

    alert(JSON.stringify(formattedData, null, 2));
  };
  return (
    <div style={{ marginLeft: "100px" }}>
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <FormElement
            style={{
              maxWidth: 650,
            }}
          >
            <fieldset className={"k-form-fieldset"}>
              <legend className={"k-form-legend"}>
                Please fill in the fields:
              </legend>
              <FieldWrapper>
                <div className="k-form-field-wrap">
                  <Field
                    name={"firstName"}
                    component={Input}
                    labelClassName={"k-form-label"}
                    label={"First name"}
                  />
                </div>
              </FieldWrapper>

              <FieldWrapper>
                <div className="k-form-field-wrap">
                  <Field
                    name={"lastName"}
                    component={Input}
                    labelClassName={"k-form-label"}
                    label={"Last name"}
                  />
                </div>
              </FieldWrapper>

              <FieldWrapper>
                <Field
                  name={"email"}
                  type={"email"}
                  component={EmailInput}
                  label={"Email"}
                  validator={emailValidator}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name={"sports"}
                  component={DepartmentDropdown}
                  label={"sports"}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name={"hireDate"}
                  component={DateInputComponent}
                  label={"Hire Date"}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name={"isActive"}
                  component={CheckboxComponent}
                  label={"Is Active?"}
                />
              </FieldWrapper>
            </fieldset>
            <div className="k-form-buttons">
              <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
            </div>
          </FormElement>
        )}
      />
    </div>
  );
}
