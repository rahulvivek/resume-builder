import uuid from 'react-uuid'

export const RESUME_ACTION = {
    ADD: "ADD",
    UPDATE: "UPDATE",
}

export const addResumeAction = (payload) => dispatch => {
    const localStorageResume = localStorage.getItem("resumes")
    payload.id = uuid()
    payload.created = new Date()
    payload.modified = new Date()
    if(localStorageResume) {
        const resumes = JSON.parse(localStorageResume)
        resumes.push(payload)
        localStorage.setItem("resumes", JSON.stringify(resumes))
    } else {
        const resumes = [payload]
        localStorage.setItem("resumes", JSON.stringify(resumes))
    }
    dispatch({type: RESUME_ACTION.ADD, payload: payload})
}

export const updateResumeAction = (id, payload) => dispatch => {
    const localStorageResume = localStorage.getItem("resumes")
    payload.modified = new Date()
    if(localStorageResume) {
        const resumes = JSON.parse(localStorageResume)
        const filteredResumes = resumes.filter(resume =>  resume.id !== id)
        filteredResumes.push(payload)
        
        localStorage.setItem("resumes", JSON.stringify(filteredResumes))
    }
    dispatch({type: RESUME_ACTION.UPDATE, payload: payload})
   
}

