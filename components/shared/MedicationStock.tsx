import React from 'react';
import { MedicationStock as MedicationStockType } from '../../types';
import Card from './Card';
import { ICONS } from '../../constants';

const mockMedicationStock: MedicationStockType[] = [
    { id: 'med01', name: 'Paracetamol', manufacturer: 'PharmaCo', dosage: '500mg', form: 'Tablet', stockId: 'stk001', lotNumber: 'A123', expiryDate: '2025-12-31', quantity: 500 },
    { id: 'med02', name: 'Ibuprofen', manufacturer: 'HealthInc', dosage: '200mg', form: 'Tablet', stockId: 'stk002', lotNumber: 'B456', expiryDate: '2024-06-30', quantity: 80 },
    { id: 'med03', name: 'Aspirin', manufacturer: 'MediLife', dosage: '100mg', form: 'Tablet', stockId: 'stk003', lotNumber: 'C789', expiryDate: '2023-11-30', quantity: 25 },
    { id: 'med04', name: 'Amoxicillin', manufacturer: 'PharmaCo', dosage: '250mg', form: 'Capsule', stockId: 'stk004', lotNumber: 'D012', expiryDate: '2025-02-28', quantity: 200 },
];

const getStatusColor = (quantity: number, expiryDate: string): string => {
    const isExpiringSoon = new Date(expiryDate) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const isExpired = new Date(expiryDate) < new Date();
    
    if (isExpired || quantity < 30) return 'border-red-500 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30';
    if (isExpiringSoon || quantity < 100) return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30';
    return 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50';
}

const MedicationStockItem: React.FC<{ item: MedicationStockType }> = ({ item }) => (
    <li>
        <button
            onClick={() => alert(`A ver detalhes do stock para ${item.name} (Lote: ${item.lotNumber}).`)}
            className={`w-full text-left p-3 rounded-lg border-l-4 transition-colors ${getStatusColor(item.quantity, item.expiryDate)}`}
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-bold text-lg">{item.name} <span className="font-normal text-sm text-gray-500 dark:text-gray-400">{item.dosage}</span></p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.manufacturer} | Lote: {item.lotNumber}</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-xl">{item.quantity}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Expira: {item.expiryDate}</p>
                </div>
            </div>
        </button>
    </li>
);

const MedicationStock: React.FC = () => {
    return (
        <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Stock de Medicação</h1>
                <button
                    onClick={() => alert('A abrir formulário para adicionar novo stock de medicação.')}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">
                    <span>{ICONS.plus}</span>
                    <span>Adicionar Stock</span>
                </button>
            </div>
             <div className="sticky top-0 bg-gray-50 dark:bg-black py-2">
                <input type="text" placeholder="Procurar medicação por nome ou lote..." className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800"/>
            </div>
            <ul className="space-y-3">
                {mockMedicationStock.map(item => <MedicationStockItem key={item.stockId} item={item} />)}
            </ul>
        </div>
    );
};

export default MedicationStock;