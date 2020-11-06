import React from 'react';
import { Form, Col } from 'react-bootstrap'

const ResumeBasicForm = ({ handleSubmit, onChange, formData }) => {

    const {
        title,
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zip,
      } = formData;

    const stateOptions = ["kerala"];
    return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="title"
            name="title"
            onChange={(e) => onChange(e)}
            value={title}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={(e) => onChange(e)}
              value={firstName}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={(e) => onChange(e)}
              value={lastName}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              name="email"
              onChange={(e) => onChange(e)}
              value={email}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={(e) => onChange(e)}
              value={phone}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Address"
            name="address"
            onChange={(e) => onChange(e)}
            value={address}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              onChange={(e) => onChange(e)}
              value={city}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              name="state"
              onChange={(e) => onChange(e)}
              value={state}
            >
              <option>Choose...</option>
              {stateOptions.map((state) => (
                <option value={state} key={state}>
                  {state}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zip"
              onChange={(e) => onChange(e)}
              value={zip}
            />
          </Form.Group>
        </Form.Row>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
       </Form>
    )
}

export default ResumeBasicForm