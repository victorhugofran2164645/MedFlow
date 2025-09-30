import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { User, UserRole } from '../types';

const MOCK_USERS: User[] = [
    { id: 'admin01', name: 'Dr. Evelyn Reed', role: UserRole.Admin },
    { id: 'doc01', name: 'Dr. James Carter', role: UserRole.Doctor },
    { id: 'nurse01', name: 'RN. Sarah Chen', role: UserRole.Nurse },
    { id: 'pharm01', name: 'RPh. Michael Lee', role: UserRole.Pharmacist },
    { id: 'visitor01', name: 'Guest User', role: UserRole.Visitor },
];

const RoleCard: React.FC<{ user: User; onSelect: (user: User) => void }> = ({ user, onSelect }) => (
    <button
        onClick={() => onSelect(user)}
        className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
        <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400">{user.role}</h3>
        <p className="text-gray-600 dark:text-gray-300">Entrar como {user.name}</p>
    </button>
);

const LoginForm: React.FC<{ user: User; onLogin: (user: User) => void; onBack: () => void }> = ({ user, onLogin, onBack }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setError('Login e senha não podem estar em branco.');
            return;
        }
        setError('');
        onLogin(user);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-inner animate-fade-in">
            <button onClick={onBack} className="text-sm text-primary-600 dark:text-primary-400 hover:underline mb-4">
                &larr; Voltar à seleção de funções
            </button>
            <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Entrar como {user.role}</h2>
                <p className="text-gray-500 dark:text-gray-400">{user.name}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Login</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        placeholder="Introduza o seu login"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="password"  className="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        placeholder="Introduza a sua senha"
                        autoComplete="current-password"
                    />
                </div>
                {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Entrar
                </button>
            </form>
        </div>
    );
};


const LoginScreen: React.FC = () => {
    const { login } = useAppContext();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleSelectUser = (user: User) => {
        setSelectedUser(user);
    };

    const handleBack = () => {
        setSelectedUser(null);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            <div className="w-full max-w-md mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400">MedFlow</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Sistema de Gestão de Medicação Hospitalar</p>
                </div>
                
                {selectedUser ? (
                    <LoginForm user={selectedUser} onLogin={login} onBack={handleBack} />
                ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-inner">
                        <h2 className="text-xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-200">Selecione Seu Perfil</h2>
                        <div className="space-y-4">
                            {MOCK_USERS.map((user) => (
                                <RoleCard key={user.id} user={user} onSelect={handleSelectUser} />
                            ))}
                        </div>
                    </div>
                )}
                 <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">
                    Esta é uma aplicação de demonstração. Use qualquer login/senha para entrar.
                </p>
            </div>
        </div>
    );
};

export default LoginScreen;