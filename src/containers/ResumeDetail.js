import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Accordion, Card, Button, Table } from 'react-bootstrap'

const ResumeDetail = () => {
  const { id } = useParams();

  const { resumes } = useSelector((state) => state.resumes);

  const currentResume = resumes.find((resume) => resume.id === id);


  return (
    <div className="resume-detail">
      <h1>{currentResume.title}</h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Basic Details
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <h2>{currentResume.firstName + " " + currentResume.lastName}</h2>
                <h6><small>email: {currentResume.email}</small></h6>
                <h6><small>Phone: {currentResume.phone}</small></h6>
                <h6>
                <small>
                {currentResume.address}, <br/>
                {currentResume.city}, {currentResume.state}, {currentResume.zip}
                </small>
                </h6>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Education Details
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Table>
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>Year</th>
                  <th>Degree</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentResume.educationalDetails.map(({institute, year, degree}, index) => (
                    <tr key={index}>
                      <td>{institute}</td>
                      <td>{year}</td>
                      <td>{degree}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Experience Details
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Year</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentResume.experienceDetails.map(({company, year, designation}) => (
                    <tr>
                      <td>{company}</td>
                      <td>{year}</td>
                      <td>{designation}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Skills
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <ul className="skill-list">
              {
                currentResume.skills.map(skill => (
                  <li>{skill.name}</li>
                ))
              }
            </ul>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      
    </div>
  );
};

export default ResumeDetail;
