// src/components/CustomerTable.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';

const CustomerTable: React.FC = () => {
    const customers = useSelector((state: RootState) => state.customer.customers);

    return (
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
            <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Phone</th>
            </tr>
            </thead>
            <tbody>
            {customers.map((customer) => (
                <tr key={customer.id}>
                    <td className="border px-4 py-2">{customer.name}</td>
                    <td className="border px-4 py-2">{customer.email}</td>
                    <td className="border px-4 py-2">{customer.address}</td>
                    <td className="border px-4 py-2">{customer.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default CustomerTable;
