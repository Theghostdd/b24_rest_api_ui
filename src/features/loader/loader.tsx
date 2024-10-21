import React, { useEffect, useState } from 'react';
import './loader.css';

interface LoaderProps {
    isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setShowLoader(true);
        } else {
            const timer = setTimeout(() => setShowLoader(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <section className={`loader-container ${showLoader ? 'show' : ''}`}>
            <div className="loader"></div>
        </section>
    );
};

export default Loader;
