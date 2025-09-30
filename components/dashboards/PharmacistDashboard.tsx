import React from 'react';
import Card from '../shared/Card';
import { ICONS } from '../../constants';
import { Prescription, PrescriptionStatus } from '../../types';

const mockPrescriptions: Prescription[] = [
    { id: 'presc001', patientId: 'p001', medicationId: 'med01', dosage: '500mg', instructions: 'Twice a day', prescribedById: 'doc01', prescribedAt: '2023-10-27T09:00:00Z', status: PrescriptionStatus.Pending },
    { id: 'presc002', patientId: 'p002', medicationId: 'med02', dosage: '200mg', instructions: 'Once a day with food', prescribedById: 'doc01', prescribedAt: '2023-10-27T09:15:00Z', status: PrescriptionStatus.Pending },
    { id: 'presc003', patientId: 'p003', medicationId: 'med03', dosage: '10mg', instructions: 'Once daily in the morning', prescribedById: 'doc02', prescribedAt: '2023-10-27T09:30:00Z', status: PrescriptionStatus.Pending },
];

const PrescriptionItem: React.FC<{ prescription: Prescription }> = ({ prescription }) => (
    <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md">
        <div>
            <p className="font-semibold">ID do Paciente: {prescription.patientId}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">ID da Medicação: {prescription.medicationId} - {prescription.dosage}</p>
        </div>
        <button 
            onClick={() => alert(`A dispensar ${prescription.medicationId} para o paciente ${prescription.patientId}.`)}
            className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition">
            <span>{ICONS.check}</span>
            <span>Dispensar</span>
        </button>
    </li>
);

const PharmacistDashboard: React.FC = () => {
    return (
        <div className="p-4 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Painel do Farmacêutico(a)</h1>
                 <button
                    onClick={() => alert('A abrir a câmara para escanear o código QR da prescrição...')} 
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">
                    <span>{ICONS.qrCode}</span>
                    <span>Escanear Prescrição</span>
                </button>
            </div>
            
            <Card title="Prescrições Pendentes para Dispensar">
                 <div className="mb-4">
                    <input type="text" placeholder="Procurar por ID do Paciente ou Medicação..." className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent"/>
                </div>
                <ul className="space-y-3">
                    {mockPrescriptions.map(p => <PrescriptionItem key={p.id} prescription={p} />)}
                </ul>
            </Card>

            <Card title="Estatísticas Rápidas">
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <p className="text-3xl font-bold text-green-500">128</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Dispensados Hoje</p>
                    </div>
                     <div>
                        <p className="text-3xl font-bold text-yellow-500">3</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Pendentes</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default PharmacistDashboard;