// src/components/DeleteCustomer.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store.ts';
import { deleteCustomer } from '../store/customerSlice';

const DeleteCustomer: React.FC = () => {
    const customers = useSelector((state: RootState) => state.customer.customers);
    const dispatch = useDispatch();

    const [selectedEmail, setSelectedEmail] = useState('');

    const handleDeleteCustomer = () => {
        dispatch(deleteCustomer(selectedEmail));
        setSelectedEmail('');
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Delete Customer</h2>
            <select
                value={selectedEmail}
                onChange={(e) => setSelectedEmail(e.target.value)}
                className="block w-full mb-4 p-2 border rounded"
            >
                <option value="">Select Email</option>
                {customers.map((customer) => (
                    <option key={customer.email} value={customer.email}>
                        {customer.email}
                    </option>
                ))}
            </select>
            {selectedEmail && (
                <button
                    onClick={handleDeleteCustomer}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Delete Customer
                </button>
            )}
        </div>
    );
};

export default DeleteCustomer;
