import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const EducationalDetailForm = ({ onChange, formData, handleSubmit }) => {
  const { institute, year, degree } = formData;

  return (
    <Form onSubmit={(e) => handleSubmit(e, formData)}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="text" name="institute" value={institute} placeholder="Institute" onChange={(e) => onChange(e, formData)} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control type="text" name="year" value={year} placeholder="Year" onChange={(e) => onChange(e, formData)}  />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control type="text" name="degree" value={degree} placeholder="Degree" onChange={(e) => onChange(e, formData)} />
        </Form.Group>
        <Form.Group as={Col}>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default EducationalDetailForm;
