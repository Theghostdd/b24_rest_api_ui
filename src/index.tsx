import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const AppWrapper: React.FC = () => {
    const [isB24Available, setIsB24Available] = useState<boolean>(true);

    useEffect(() => {
        if (BX24 !== null) {
            BX24.fitWindow((data: any) => {
                let x = BX24.getScrollSize();
                BX24.resizeWindow(x.scrollWidth, x.scrollHeight);
            });
        } else {
            setIsB24Available(false);
        }
    }, []);

    return <App isB24Available={isB24Available} />;
};

root.render(
    <React.StrictMode>
        <AppWrapper />
    </React.StrictMode>
);
