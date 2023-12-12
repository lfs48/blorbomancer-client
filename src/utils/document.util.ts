import { ReactNode } from "react";
import { createPortal } from "react-dom";

export function getRoot() {
    return document.getElementById('root') || document.body;
}

export function createRootPortal(render:ReactNode) {
    return createPortal(render, getRoot());
}