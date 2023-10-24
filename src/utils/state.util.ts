import React, { ChangeEvent, SetStateAction, SyntheticEvent } from "react";

export function handleInput(event:React.ChangeEvent<HTMLInputElement>, field:string, state:any, setState:React.Dispatch<SetStateAction<any>>) {
    const newState = structuredClone(state);
    newState[field] = event.target.value;
    setState(newState);
}