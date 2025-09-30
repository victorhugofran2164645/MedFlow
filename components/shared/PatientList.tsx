import React from 'react';
import { Patient as PatientType } from '../../types';
import { ICONS } from '../../constants';

const mockPatients: PatientType[] = [
    { id: 'p001', name: 'John Doe', room: '301A', allergies: ['Penicillin'] },
    { id: 'p002', name: 'Jane Smith', room: '302B', allergies: [] },
    { id: 'p003', name: 'Robert Johnson', room: '304A', allergies: ['Aspirin', 'Sulfa'] },
    { id: 'p004', name: 'Emily White', room: '305C', allergies: [] },
    { id: 'p005', name: 'Michael Brown', room: '306A', allergies: ['Peanuts'] },
];

const PatientListItem: React.FC<{ patient: PatientType }> = ({ patient }) => (
    <li className="rounded-lg shadow-sm">
        <button
            onClick={() => alert(`A ver detalhes do paciente ${patient.name}.`)}
            className="w-full text-left p-3 bg-white dark:bg-gray-800/50 rounded-lg flex justify-between items-center transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
        >
            <div>
                <p className="font-bold">{patient.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quarto {patient.room}</p>
                {patient.allergies.length > 0 && 
                    <p className="text-xs text-red-500 mt-1">
                        <span className="font-semibold">Alergias:</span> {patient.allergies.join(', ')}
                    </p>
                }
            </div>
            <div className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
        </button>
    </li>
);

const PatientList: React.FC = () => {
    return (
        <div className="p-4 space-y-4">
             <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Pacientes</h1>
                <button 
                    onClick={() => alert('A abrir formulário para admitir novo paciente.')}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">
                    <span>{ICONS.plus}</span>
                    <span>Admitir Paciente</span>
                </button>
            </div>
             <div className="sticky top-0 bg-gray-50 dark:bg-black py-2">
                <input type="text" placeholder="Procurar por nome do paciente ou quarto..." className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800"/>
            </div>
            <ul className="space-y-3">
                {mockPatients.map(p => <PatientListItem key={p.id} patient={p} />)}
            </ul>
        </div>
    );
};

export default PatientList;