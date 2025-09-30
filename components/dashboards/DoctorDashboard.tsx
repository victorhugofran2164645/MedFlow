import React from 'react';
import { ICONS } from '../../constants';
import { Patient } from '../../types';
import Card from '../shared/Card';

const mockPatients: Patient[] = [
    { id: 'p001', name: 'John Doe', room: '301A', allergies: ['Penicillin'] },
    { id: 'p002', name: 'Jane Smith', room: '302B', allergies: [] },
    { id: 'p003', name: 'Robert Johnson', room: '304A', allergies: ['Aspirin', 'Sulfa'] },
];

const PatientItem: React.FC<{ patient: Patient }> = ({ patient }) => (
    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
        <div>
            <p className="font-semibold">{patient.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Quarto: {patient.room}</p>
            {patient.allergies.length > 0 && 
                <p className="text-xs text-red-500">Alergias: {patient.allergies.join(', ')}</p>
            }
        </div>
        <button
            onClick={() => alert(`A iniciar nova prescrição para ${patient.name}.`)} 
            className="p-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition"
            aria-label={`Prescrever para ${patient.name}`}
        >
            {ICONS.plus}
        </button>
    </li>
);

const DoctorDashboard: React.FC = () => {
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Painel do Médico</h1>
            
            <Card title="Os Meus Pacientes">
                <div className="mb-4">
                    <input type="text" placeholder="Procurar pacientes..." className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent"/>
                </div>
                <ul className="space-y-2">
                    {mockPatients.map(p => <PatientItem key={p.id} patient={p} />)}
                </ul>
            </Card>

            <Card title="Alertas Pendentes">
                 <div className="flex items-center p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-md">
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">Os resultados laboratoriais de <span className="font-semibold">Jane Smith</span> estão prontos para revisão.</p>
                </div>
            </Card>
        </div>
    );
};

export default DoctorDashboard;