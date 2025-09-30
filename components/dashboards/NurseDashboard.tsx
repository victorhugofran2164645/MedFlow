import React from 'react';
import Card from '../shared/Card';
import { ICONS } from '../../constants';

interface Task {
    id: string;
    patientName: string;
    room: string;
    medication: string;
    time: string;
    overdue?: boolean;
}

const mockTasks: Task[] = [
    { id: 't001', patientName: 'John Doe', room: '301A', medication: 'Paracetamol 500mg', time: '08:00', overdue: true },
    { id: 't002', patientName: 'Jane Smith', room: '302B', medication: 'Ibuprofen 200mg', time: '09:00' },
    { id: 't003', patientName: 'Robert Johnson', room: '304A', medication: 'Lisinopril 10mg', time: '09:00' },
    { id: 't004', patientName: 'Emily White', room: '305C', medication: 'Metformin 500mg', time: '10:00' },
];

const TaskItem: React.FC<{ task: Task }> = ({ task }) => (
    <li>
        <button
            onClick={() => alert(`A ver detalhes da tarefa para ${task.patientName}: administrar ${task.medication}.`)}
            className={`w-full text-left flex justify-between items-center p-3 rounded-md transition-colors ${task.overdue ? 'bg-red-100 dark:bg-red-900/50 hover:bg-red-200 dark:hover:bg-red-900 border-l-4 border-red-500' : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
        >
            <div>
                <p className="font-semibold">{task.patientName} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Quarto {task.room})</span></p>
                <p className="text-gray-700 dark:text-gray-300">{task.medication}</p>
            </div>
            <div className="text-right">
                <p className={`font-bold ${task.overdue ? 'text-red-500' : 'text-primary-600 dark:text-primary-400'}`}>{task.time}</p>
                {task.overdue && <p className="text-xs text-red-500">Atrasado</p>}
            </div>
        </button>
    </li>
);

const NurseDashboard: React.FC = () => {
    return (
        <div className="p-4 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Tarefas do(a) Enfermeiro(a)</h1>
                <button 
                    onClick={() => alert('A abrir a câmara para escanear o código QR do medicamento...')}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                    <span>{ICONS.qrCode}</span>
                    <span>Escanear e Administrar</span>
                </button>
            </div>
            
            <Card title="Próximas Administrações">
                <ul className="space-y-3">
                    {mockTasks.map(t => <TaskItem key={t.id} task={t} />)}
                </ul>
            </Card>
        </div>
    );
};

export default NurseDashboard;