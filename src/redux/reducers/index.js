import {combineReducers} from 'redux';
import { resumeReducer } from './resume.reducer';


const reducers = combineReducers({
    resumes: resumeReducer,
});

export default reducers;