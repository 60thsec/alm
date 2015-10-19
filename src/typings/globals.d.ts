/// <reference path="../../node_modules/ntypescript/bin/ntypescript.d.ts"/>

interface EditorPosition {
    line: number;
    ch: number;
}

interface CodeEdit {
    from: EditorPosition;
    to: EditorPosition;
    newText: string;
    /**
     * When we are editing stuff from the front end we want all code edits except ours (user typing code)
     */
    sourceId? : string;
}

/** Our extensions to the Error object */
interface Error {
    /** Really useful to have for debugging */
    details?: any;
}


interface CodeError {
    filePath: string;
    from: EditorPosition;
    to: EditorPosition;
    message: string;
    preview: string;
}

interface ErrorsByFilePath {
    [filePath: string]: CodeError[]
}

/** Config as read from tsb.json */
interface ProjectJson {
    name: string;
    /**
     * Full path to tsconfig.json (including file name)
     */
    tsconfig: string;
}
