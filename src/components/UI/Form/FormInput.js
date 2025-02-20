import { Field } from "formik";
import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import InfoToolTip from "../InfoToolTip";

const FormInput = (props) => {
  const {
    as,
    md,
    controlId,
    label,
    name,
    disabled,
    type,
    inputGroupPrepend,
    inputGroupPostpend,
    tooltip,
  } = props;

  const displayLabel = tooltip ? (
    <>
      {label + " "}
      <InfoToolTip id={`${controlId}-tooltip`} info={tooltip} />
    </>
  ) : (
    label
  );

  return (
    <Field name={name}>
      {({ field, form }) => {
        const isValid = !form.errors[field.name];
        const isInvalid = form.touched[field.name] && !isValid;
        return (
          <Form.Group as={as} md={md} controlId={controlId} className="mb-md-2">
            <Form.Label>{displayLabel}</Form.Label>
            <InputGroup>
              {inputGroupPrepend}
              <Form.Control
                {...field}
                type={type}
                disabled={disabled}
                isInvalid={isInvalid}
                feedback={form.errors[field.name]}
              />
              {inputGroupPostpend}
              <Form.Control.Feedback type="invalid">
                {form.errors[field.name]}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        );
      }}
    </Field>
  );
};

FormInput.defaultProps = {
  type: "text",
  tooltip: null,
  inputGroupPrepend: null,
  inputGroupPostpend: null,
};

export default FormInput;
