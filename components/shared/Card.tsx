
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
    return (
        <div className={`bg-white dark:bg-gray-800/50 rounded-lg shadow-md p-4 ${className}`}>
            {title && <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">{title}</h2>}
            {children}
        </div>
    );
};

export default Card;
