import React from 'react';

import {
    Switch,
    Route,
  } from "react-router-dom";

import AddResume from '../containers/AddResume';
import EditResume from '../containers/EditResume';
import ListResumes from '../containers/ListResume';
import ResumeDetail from '../containers/ResumeDetail';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/:id/edit" component={EditResume} />
            <Route exact path="/:id/detail" component={ResumeDetail} />
            <Route exact path="/add" component={AddResume} />
            <Route exact path="/" component={ListResumes} />
        </Switch>
    )
}

export default Routes