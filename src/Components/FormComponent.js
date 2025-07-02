import React from "react";
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { DropDownList } from "@progress/kendo-react-dropdowns";

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
const departments = [
  { text: "Engineering", id: 1 },
  { text: "Marketing", id: 2 },
  { text: "HR", id: 3 },
  { text: "Finance", id: 4 },
];

const DepartmentDropdown = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;

  return (
    <div className="k-form-field-wrap">
      <DropDownList
        {...others}
        data={departments}
        textField="text"
        dataItemKey="id"
      />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};

export default function FormComponent() {
  const handleSubmit = (dataItem) => {
    debugger;
    alert(JSON.stringify(dataItem, null, 2));
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
                  name={"department"}
                  component={DepartmentDropdown}
                  label={"Department"}
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
