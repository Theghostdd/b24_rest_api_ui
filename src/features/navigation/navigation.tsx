import React from 'react';
import './navigatin.css';
import { useNavigate } from 'react-router-dom';


interface MenuItem {
    tag: 'h6' | 'button';
    text: string;
    id?: string;
    url?: string;
    navigation?: string
}


const Navigation: React.FC = () => {
    const navigate = useNavigate();

    const menuItems: MenuItem[] = [
        { tag: 'h6', text: 'Menu' },
        { tag: 'button', text: 'Playground', navigation: '/playground' },
    ];

    const docsItems: MenuItem[] = [
        { tag: 'h6', text: 'Docs' },
        { tag: 'button', text: 'Docs', navigation: '/docs' },
        { tag: 'button', text: 'Docs npm', url: 'https://www.npmjs.com/package/jsonpath' },
        { tag: 'button', text: 'Jsonpath', url: 'https://github.com/json-path/JsonPath' },
    ];

    const handleButtonClick = (navigation?: string, url?: string) => {
        if (url) {
            window.open(url, '_blank');
        } else if (navigation) {
            navigate(navigation);
        }
    };
    const renderMenuItems = (items: MenuItem[]) => (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.tag === 'h6' ? (
                        <h6>{item.text}</h6>
                    ) : (
                        <button id={item.id} onClick={() => handleButtonClick(item.navigation, item.url)}>
                            {item.text}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="navigation-container">
            <div className="navigation-children-container">
                {renderMenuItems(menuItems)}
            </div>
            <div className="navigation-children-container">
                {renderMenuItems(docsItems)}
            </div>
        </div>
    );
};

export default Navigation;
