
import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import Header from '../components/shared/Header';
import BottomNav from '../components/shared/BottomNav';
import AdminDashboard from '../components/dashboards/AdminDashboard';
import DoctorDashboard from '../components/dashboards/DoctorDashboard';
import NurseDashboard from '../components/dashboards/NurseDashboard';
import PharmacistDashboard from '../components/dashboards/PharmacistDashboard';
import { UserRole } from '../types';
import MedicationStock from '../components/shared/MedicationStock';
import PatientList from '../components/shared/PatientList';
import AuditTrail from '../components/shared/AuditTrail';

const MainLayout: React.FC = () => {
    const { currentUser } = useAppContext();
    const [activeTab, setActiveTab] = useState('home');

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return renderDashboard();
            case 'stock':
                return <MedicationStock />;
            case 'patients':
                return <PatientList />;
            case 'audit':
                return <AuditTrail />;
            default:
                return renderDashboard();
        }
    };
    
    const renderDashboard = () => {
        if (!currentUser) return null;
        switch (currentUser.role) {
            case UserRole.Admin:
                return <AdminDashboard setActiveTab={setActiveTab} />;
            case UserRole.Doctor:
                return <DoctorDashboard />;
            case UserRole.Nurse:
                return <NurseDashboard />;
            case UserRole.Pharmacist:
                return <PharmacistDashboard />;
            default:
                return <div className="p-4 text-center">Bem-vindo(a), Visitante! O seu acesso é limitado.</div>;
        }
    };

    return (
        <div className="flex flex-col h-screen max-h-screen bg-gray-50 dark:bg-black">
          <div className="w-full max-w-4xl mx-auto flex flex-col h-full bg-white dark:bg-gray-900 shadow-2xl">
              <Header />
              <main className="flex-1 overflow-y-auto pb-20">
                  {renderContent()}
              </main>
              <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
    );
};

export default MainLayout;