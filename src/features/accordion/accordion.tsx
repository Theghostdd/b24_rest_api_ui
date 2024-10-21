import React, { useState } from 'react';
import './accordion.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


interface Prop {
    title: string,
    content: any,
}

interface AccordionProps {
    data: Prop[];
}

const Accordion: React.FC<AccordionProps> = ({data}) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const handleClick = (index: number) => {
        setOpenIndexes(prevState =>
            prevState.includes(index)
                ? prevState.filter(i => i !== index)
                : [...prevState, index]
        );
    };

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <button
                        className={`accordion ${openIndexes.includes(index) ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {item.title}
                        <i className={`fa ${openIndexes.includes(index) ? 'fa-minus' : 'fa-plus'}`}></i>
                    </button>
                    <div className={`panel ${openIndexes.includes(index) ? 'show' : ''}`}>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;