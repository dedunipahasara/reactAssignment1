// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
    onSelect: (tab: string) => void;
    activeTab: string;
}

const Navbar: React.FC<NavbarProps> = ({ onSelect, activeTab }) => {
    const tabs = ['dashboard', 'add', 'update', 'delete'];

    return (
        <nav className="bg-gray-800 text-black p-4 flex space-x-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`px-4 py-2 ${
                        activeTab === tab ? 'bg-blue-600' : 'hover:bg-gray-600'
                    }`}
                    onClick={() => onSelect(tab)}
                >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} Customer
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
