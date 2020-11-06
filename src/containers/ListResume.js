import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


import { Table, Button } from "react-bootstrap";
import { getFormattedDateStr } from "../shared/utils";

const ListResumes = () => {
  const history = useHistory()
  const { resumes } = useSelector((state) => state.resumes);
  return (
    <div className="list-resume">
      <Button onClick={() => history.push("/add")}>Add New</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Created</th>
            <th>Last Edited</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume, index) => (
            <tr key={resume.id}>
              <td>{index + 1}</td>
              <td>{resume.title}</td>
              <td>{getFormattedDateStr(resume.created)}</td>
              <td>{getFormattedDateStr(resume.modified)}</td>
              <td>
                <Button variant="primary" onClick={() => history.push("/" + resume.id + "/detail")}>View</Button>{' '}
                <Button variant="info" onClick={() => history.push("/" + resume.id + "/edit")}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListResumes;
