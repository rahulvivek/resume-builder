import { RESUME_ACTION } from "../actions/resume.actions";

const initialState = {
    resumes: (localStorage.getItem('resumes') && JSON.parse(localStorage.getItem('resumes'))) || [],
}

export const resumeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case RESUME_ACTION.ADD:
            console.log("Resume added")
            return {
                ...state,
                resumes: [payload, ...state.resumes]
            }
        case RESUME_ACTION.UPDATE:
            return {
                ...state,
                resumes: state.resumes.map(resume => {
                    return resume.id === payload.id ? payload : resume
                })
            }
        default:
            return state
    }
}