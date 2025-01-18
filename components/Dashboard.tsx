// src/components/Dashboard.tsx
import React from 'react';
import CustomerTable from './CustomerTable';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Customer Dashboard</h2>
            <CustomerTable />
        </div>
    );
};

export default Dashboard;
