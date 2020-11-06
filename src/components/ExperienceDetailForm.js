import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const ExperienceDetailForm = ({ onChange, formData, handleSubmit }) => {
  const { company, year, designation } = formData;

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="text" name="company" value={company} placeholder="Company" onChange={(e) => onChange(e)} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control type="text" name="year" value={year} placeholder="Year" onChange={(e) => onChange(e)}  />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control type="text" name="designation" value={designation} placeholder="Designation" onChange={(e) => onChange(e)} />
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

export default ExperienceDetailForm;
