import React, { useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactTags from 'react-tag-autocomplete'

import { Col, Row, Card, Table, Button } from "react-bootstrap";

import { updateResumeAction } from "./../redux/actions/resume.actions";
import ResumeBasicForm from "../components/resumeBasicForm";
import EducationalDetailForm from "../components/EducationalDetailForm";
import ExperienceDetailForm from "../components/ExperienceDetailForm";

const EditResume = () => {
  const { id } = useParams();

  const { resumes } = useSelector((state) => state.resumes);
  const currentResume = resumes.find((resume) => resume.id === id);

  const [resumeBasicFormData, setResumeBasicFormData] = useState(currentResume);

  const dispatch = useDispatch();
  const history = useHistory()

  const reactTags = useRef()

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

  const [educationalDetails, setEducationalDetails] = useState(currentResume.educationalDetails);
  const [educationalDetailForm, setEducationalDetailForm] = useState(
    educationalFormData
  );

  const [experienceDetails, setExperienceDetails] = useState(currentResume.experienceDetails);
  const [experienceDetailForm, setExperienceDetailForm] = useState(
    experienceFormData
  );

  const [skills, setSkills] = useState(currentResume.skills)

  const skillOptions = [
      {id: 1, name: "Python"},
      {id: 2, name: "JavaScript"},
      {id: 3, name: "TypeScript"},
      {id: 4, name: "Angular"},
      {id: 5, name: "React"},
      {id: 6, name: "NodeJS"},
      {id: 7, name: "MongoDB"},
  ]


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
  }

  const handleEducationalFormSubmit = (e) => {
    e.preventDefault();
    setEducationalDetails([...educationalDetails, educationalDetailForm]);
    setEducationalDetailForm(educationalFormData);
  };

  const handleExperienceFormSubmit = (e) => {
    e.preventDefault();
    setExperienceDetails([...experienceDetails, experienceDetailForm]);
    setEducationalDetailForm(experienceFormData);
  };

  const handleSaveResume = () => {
      const payload = {
          ...resumeBasicFormData,
          educationalDetails: educationalDetails,
          experienceDetails: experienceDetails,
          skills: skills
      }

      dispatch(updateResumeAction(id, payload));
      history.push("/")
  }

  const onDelete = (i) => {
    setSkills(skills.filter((skill, index) => index !== i))
  }

  const onAddition = (skill) => {
      setSkills([skill, ...skills])
  }

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
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Card>
        <Card.Body style={{minHeight: "300px"}}>
        <Card.Title>Skills</Card.Title>
        <ReactTags
            ref={reactTags}
            tags={skills}
            suggestions={skillOptions}
            onDelete={onDelete}
            onAddition={onAddition} />
        </Card.Body>
      </Card>
      <Row>
        <Col>&nbsp;</Col>
      </Row>
      <Card>
        <Card.Body>
          <Button onClick={handleSaveResume}>Save Resume</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditResume;
