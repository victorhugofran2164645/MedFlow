import React from 'react';
import Card from '../shared/Card';

const StatCard: React.FC<{ title: string; value: string; color: string; onClick?: () => void }> = ({ title, value, color, onClick }) => {
    const cardContent = (
        <Card className={`text-white ${color} w-full h-full flex flex-col justify-between`}>
            <p className="text-sm opacity-80">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
        </Card>
    );

    if (onClick) {
        return (
            <button
                onClick={onClick}
                className="w-full text-left transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-black focus:ring-primary-500 rounded-lg"
                aria-label={`Ver detalhes de ${title}`}
            >
                {cardContent}
            </button>
        );
    }

    return cardContent;
};


interface AdminDashboardProps {
    setActiveTab: (tab: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ setActiveTab }) => {
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Painel do Administrador</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard 
                    title="Total de Medicamentos" 
                    value="1.240" 
                    color="bg-blue-500"
                    onClick={() => setActiveTab('stock')} 
                />
                <StatCard 
                    title="Alertas de Stock Baixo" 
                    value="15" 
                    color="bg-yellow-500"
                    onClick={() => alert('A navegar para stock com filtro de stock baixo.')} 
                />
                <StatCard 
                    title="A Expirar Brevemente" 
                    value="8" 
                    color="bg-orange-500"
                    onClick={() => alert('A navegar para stock com filtro de expiração.')} 
                />
                <StatCard 
                    title="Utilizadores Ativos" 
                    value="256" 
                    color="bg-green-500"
                    onClick={() => alert('A navegar para a gestão de utilizadores.')} 
                />
            </div>

            <Card title="Ações Rápidas">
                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => alert('Funcionalidade de gestão de utilizadores em desenvolvimento.')} className="p-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">Gerir Utilizadores</button>
                    <button onClick={() => alert('Funcionalidade de geração de relatórios em desenvolvimento.')} className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">Gerar Relatórios</button>
                    <button onClick={() => alert('Funcionalidade de configurações do sistema em desenvolvimento.')} className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">Configurações do Sistema</button>
                    <button onClick={() => setActiveTab('audit')} className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">Ver Pista de Auditoria Completa</button>
                </div>
            </Card>

            <Card title="Atividade Recente">
                <ul className="space-y-3">
                    <li className="text-sm"><span className="font-semibold text-primary-500">Dr. Carter</span> prescreveu <span className="font-semibold">Paracetamol</span> para John Doe.</li>
                    <li className="text-sm"><span className="font-semibold text-yellow-500">RN. Chen</span> administrou <span className="font-semibold">Ibuprofeno</span> para Jane Smith.</li>
                    <li className="text-sm"><span className="font-semibold text-green-500">RPh. Lee</span> dispensou 15 prescrições.</li>
                     <li className="text-sm"><span className="font-semibold text-red-500">Sistema:</span> Aviso de stock baixo para <span className="font-semibold">Aspirina</span>.</li>
                </ul>
            </Card>
        </div>
    );
};

export default AdminDashboard;