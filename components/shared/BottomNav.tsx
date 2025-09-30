
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { UserRole } from '../../types';
import { ICONS } from '../../constants';

interface BottomNavProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const NavItem: React.FC<{ icon: React.ReactNode; label: string; name: string; active: boolean; onClick: () => void }> = ({ icon, label, name, active, onClick }) => (
    <button onClick={onClick} className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${active ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400 hover:text-primary-500'}`}>
        {icon}
        <span className="text-xs mt-1">{label}</span>
        {active && <div className="w-12 h-0.5 bg-primary-600 dark:bg-primary-400 mt-1 rounded-full"></div>}
    </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
    const { currentUser } = useAppContext();

    const navItems = [
        { name: 'home', label: 'Início', icon: ICONS.home, roles: [UserRole.Admin, UserRole.Doctor, UserRole.Nurse, UserRole.Pharmacist] },
        { name: 'stock', label: 'Stock', icon: ICONS.pills, roles: [UserRole.Admin, UserRole.Pharmacist] },
        { name: 'patients', label: 'Pacientes', icon: ICONS.users, roles: [UserRole.Admin, UserRole.Doctor, UserRole.Nurse] },
        { name: 'audit', label: 'Auditoria', icon: ICONS.history, roles: [UserRole.Admin] },
    ];
    
    const availableItems = navItems.filter(item => currentUser && item.roles.includes(currentUser.role));

    if (!currentUser || currentUser.role === UserRole.Visitor) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 max-w-4xl mx-auto bg-white dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-t-lg">
            <div className="flex justify-around">
                {availableItems.map(item => (
                    <NavItem
                        key={item.name}
                        name={item.name}
                        label={item.label}
                        icon={item.icon}
                        active={activeTab === item.name}
                        onClick={() => setActiveTab(item.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BottomNav;
