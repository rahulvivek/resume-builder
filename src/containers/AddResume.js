import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ReactTags from "react-tag-autocomplete";
import { Button, Col, Row, Card, Table } from "react-bootstrap";

import { addResumeAction } from "./../redux/actions/resume.actions";
import ResumeBasicForm from "../components/resumeBasicForm";
import EducationalDetailForm from "../components/EducationalDetailForm";
import ExperienceDetailForm from "../components/ExperienceDetailForm";

const AddResume = () => {
  const reactTags = useRef();
  const history = useHistory()

  const [resumeBasicFormData, setResumeBasicFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const educationalFormData = {
    institute: "",
    year: "",
    degree: "",
  };

  const experienceFormData = {
    company: "",
    year: "",
    designation: "",
  };

  const [educationalDetails, setEducationalDetails] = useState([]);
  const [educationalDetailForm, setEducationalDetailForm] = useState(
    educationalFormData
  );

  const [experienceDetails, setExperienceDetails] = useState([]);
  const [experienceDetailForm, setExperienceDetailForm] = useState(
    experienceFormData
  );

  const [skills, setSkills] = useState([]);

  const skillOptions = [
    { id: 1, name: "Python" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "TypeScript" },
    { id: 4, name: "Angular" },
    { id: 5, name: "React" },
    { id: 6, name: "NodeJS" },
    { id: 7, name: "MongoDB" },
  ];

  const dispatch = useDispatch();

  const onBasicFormDataChange = (e) =>
    setResumeBasicFormData({
      ...resumeBasicFormData,
      [e.target.name]: e.target.value,
    });

  const onEducationalFormDataChange = (e) =>
    setEducationalDetailForm({
      ...educationalDetailForm,
      [e.target.name]: e.target.value,
    });

  const onExperienceFormDataChange = (e) => {
    setExperienceDetailForm({
      ...experienceDetailForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducationalFormSubmit = (e) => {
    e.preventDefault();
    setEducationalDetails([...educationalDetails, educationalDetailForm]);
    setEducationalDetailForm(educationalFormData);
  };

  const handleExperienceFormSubmit = (e) => {
    e.preventDefault();
    setExperienceDetails([...experienceDetails, experienceDetailForm]);
    setExperienceDetailForm(experienceFormData);
  };

  const handleSaveResume = () => {
    if(resumeBasicFormData.firstName.trim() !== "" &&
       resumeBasicFormData.email.trim() !== "" &&
       educationalDetails.length > 0 &&
       experienceDetails.length > 0) {
        const payload = {
          ...resumeBasicFormData,
          educationalDetails: educationalDetails,
          experienceDetails: experienceDetails,
          skills: skills
        };
    
        dispatch(addResumeAction(payload));
        history.push("/")
       } else {
         console.log("Show error")
       }
    
  };

  const onDelete = (i) => {
    setSkills(skills.filter((skill, index) => index !== i));
  };

  const onAddition = (skill) => {
    setSkills([skill, ...skills]);
  };

  return (
    <div className="edit-resume">
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Card>
        <Card.Body>
          <Card.Title>Basic Details</Card.Title>
          <ResumeBasicForm
            onChange={onBasicFormDataChange}
            formData={resumeBasicFormData}
          ></ResumeBasicForm>
        </Card.Body>
      </Card>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Card>
        <Card.Body>
          <Card.Title>Educational Details</Card.Title>
          <Table>
            <thead>
              <tr>
                <th>Institute</th>
                <th>Year</th>
                <th>Degree</th>
              </tr>
            </thead>
            <tbody>
              {educationalDetails.map((eductionDetail, index) => (
                <tr key={index}>
                  <td>{eductionDetail.institute}</td>
                  <td>{eductionDetail.year}</td>
                  <td>{eductionDetail.degree}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <EducationalDetailForm
            onChange={onEducationalFormDataChange}
            formData={educationalDetailForm}
            handleSubmit={handleEducationalFormSubmit}
          ></EducationalDetailForm>
        </Card.Body>
      </Card>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Card>
        <Card.Body>
          <Card.Title>Experience Details</Card.Title>
          <Table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Year</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {experienceDetails.map((eductionDetail, index) => (
                <tr key={index}>
                  <td>{eductionDetail.company}</td>
                  <td>{eductionDetail.year}</td>
                  <td>{eductionDetail.designation}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <ExperienceDetailForm
            onChange={onExperienceFormDataChange}
            formData={experienceDetailForm}
            handleSubmit={handleExperienceFormSubmit}
          ></ExperienceDetailForm>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={{ minHeight: "300px" }}>
          <Card.Title>Skills</Card.Title>
          <ReactTags
            ref={reactTags}
            tags={skills}
            suggestions={skillOptions}
            onDelete={onDelete}
            onAddition={onAddition}
          />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Button onClick={handleSaveResume}>Save Resume</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddResume;
