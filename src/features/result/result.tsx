import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import LoaderMin from "../loader/loader-min";
import './result.css'

interface Props {
    json: any;
    jsonPath?: string;
    setJsonPath: (path: string) => void;
    resultContent?: string;
}

const Result: React.FC<Props> = ({ json, jsonPath = '$', setJsonPath, resultContent }) => {
    const [path, setPath] = useState<string>(jsonPath);

    useEffect(() => {
        setJsonPath(path);
    }, [path, setJsonPath]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPath = e.target.value;
        setPath(newPath);
    };

    return (
        <div className="result-container">
            <label htmlFor="jsonpath-input">Jsonpath</label>
            <div className="result-children-container inside">
                <input
                    type="text"
                    id="jsonpath-input"
                    value={path}
                    placeholder="Enter jsonpath"
                    onChange={handleInputChange}
                />
            </div>

            <label>Result</label>
            <div className="result-children-container inside" id="editor-result">
                <Editor
                    height="550px"
                    defaultLanguage="json"
                    theme="vs-dark"
                    value={resultContent}
                    loading={<LoaderMin/>}
                    options={{ readOnly: true, scrollBeyondLastLine: false,  }}
                />
            </div>
        </div>
    );
};

export default Result;
