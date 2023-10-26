import React, { SetStateAction} from "react";

export function handleInput(event:React.ChangeEvent<HTMLInputElement>, field:string, state:any, setState:React.Dispatch<SetStateAction<any>>) {
    const newState = structuredClone(state);
    newState[field] = event.target.value;
    setState(newState);
}

export function handleErrors(errorResponse:any, errorState:any, setErrorState:React.Dispatch<SetStateAction<any>>) {
    const newState = structuredClone(errorState);
    const otherErrors = [] as string[];
    let errors = {};
    if ('data' in errorResponse && 'errors' in errorResponse.data) {
        errors = errorResponse.data.errors;
    } else if ('errors' in errorResponse) {
        errors = errorResponse.errors;
    } 

    Object.keys(errors).forEach( (key) => {
        if (key in errorState) {
            newState[key] = errors[key];
        } else {
            otherErrors.push(errors[key])
        }
    });

    setErrorState(newState);
    
    if ('error' in errorResponse) {
        otherErrors.push(errorResponse.error);
    }

    return otherErrors;
}