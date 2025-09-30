
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { ICONS } from '../../constants';

const Header: React.FC = () => {
    const { currentUser, logout, theme, toggleTheme } = useAppContext();

    if (!currentUser) return null;

    return (
        <header className="bg-white dark:bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between p-4">
                <div>
                    <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">MedFlow</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Bem-vindo(a), {currentUser.name}</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                        {theme === 'light' ? ICONS.moon : ICONS.sun}
                    </button>
                    <button onClick={logout} className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-100 dark:bg-red-900/50 dark:text-red-400 rounded-full hover:bg-red-200 dark:hover:bg-red-900 transition">
                        <span>{ICONS.logout}</span>
                        <span>Sair</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
