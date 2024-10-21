import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './playground.css'
import LoaderMin from "../loader/loader-min";

interface Props {
    request: (method: string, json: object) => Promise<void>;
    isB24Available: boolean;
}

const Playground: React.FC<Props> = ({ request, isB24Available }) => {
    const [method, setMethod] = useState<string>('');
    const [jsonContent, setJsonContent] = useState<object>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMethod(e.target.value);
    };

    const handleEditorChange = (value: string | undefined) => {
        try {
            setJsonContent(value ? JSON.parse(value) : {});
        } catch {
            setJsonContent({});
        }
    };

    const handleSubmit = async () => {
        await request(method, jsonContent);
    };

    return (
        <div className="playground-container">
            <label htmlFor="method">REST Method</label>
            <div className="playground-children-container inside">
                <input
                    type="text"
                    id="method"
                    placeholder="Enter rest method"
                    value={method}
                    onChange={handleInputChange}
                />
            </div>

            <label>REST Json</label>
            <div className="playground-children-container inside">
                <Editor
                    height="300px"
                    defaultLanguage="json"
                    defaultValue="{}"
                    loading={<LoaderMin/>}
                    options={{scrollBeyondLastLine: false}}
                    onChange={handleEditorChange}
                />
            </div>

            <div className="playground-children-container inside">
                <button
                    type="button"
                    id="submit-button"
                    onClick={handleSubmit}
                    disabled={!isB24Available}
                >
                    {isB24Available ? 'Send JSON' : 'B24 is not available'}
                </button>
            </div>
        </div>
    );
};

export default Playground;




