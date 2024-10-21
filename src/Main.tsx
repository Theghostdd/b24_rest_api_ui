import React, {useEffect, useState} from 'react';
import './App.css';
import Navigation from "./features/navigation/navigation";
import Playground from "./features/playground/playground";
import Result from "./features/result/result";
import fetchData from "./fetch/fetchData";
import jsonpath from 'jsonpath';
import Loader from './features/loader/loader';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import Docs from "./features/docs/docs";


interface MainProps {
    isB24Available: boolean;
}

const Main: React.FC<MainProps> = ({ isB24Available }) => {
    const [result, setResult] = useState<string>('{}');
    const [jsonPathResult, setJsonPathResult] = useState<string>('{}');
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        setResult('{}');
        setJsonPathResult('{}');
        const methodElement = document.getElementById('method');
        if (methodElement) {
            methodElement.classList.remove('errorField');
        }

    }, [location.pathname]);

    const handleRequest = async (method: string, json: object) => {
        const methodElement = document.getElementById('method');
        if (!method.trim()) {
            if (methodElement) {
                methodElement.classList.add('errorField');
            }
            return;
        } else {
            if (methodElement) {
                methodElement.classList.remove('errorField');
            }
        }
        setLoading(true);
        try {
            const response = await fetchData(method, json);
            setResult(JSON.stringify(response, null, 2));
            setJsonPathResult('{}');
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleSetJsonPath = (path: string) => {
        try {
            const jsonData = result ? JSON.parse(result) : {};
            const queryResult = jsonpath.query(jsonData, path);
            setJsonPathResult(JSON.stringify(queryResult, null, 2));
        } catch (e: any) {
            setJsonPathResult('[\n  {}\n]');
        }
    };

    return (
        <>
            {loading && <Loader isLoading={loading} />}
            <Navigation />
            <Routes>
                <Route path="/playground" element={
                    <>
                        <Playground request={handleRequest} isB24Available={isB24Available} />
                        <Result
                            json={result ? result : {}}
                            jsonPath="$"
                            setJsonPath={handleSetJsonPath}
                            resultContent={jsonPathResult}
                        />
                    </>
                } />
                <Route path="/docs" element={<Docs />} />
                <Route path="/" element={<Navigate to="/playground" />} />
            </Routes>
        </>
    );
};

export default Main




