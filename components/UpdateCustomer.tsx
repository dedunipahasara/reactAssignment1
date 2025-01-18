// src/components/UpdateCustomer.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store.ts';
import { updateCustomer } from '../store/customerSlice';

const UpdateCustomer: React.FC = () => {
    const customers = useSelector((state: RootState) => state.customer.customers);
    const dispatch = useDispatch();

    const [selectedEmail, setSelectedEmail] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const handleEmailSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const email = e.target.value;
        setSelectedEmail(email);
        const selectedCustomer = customers.find((customer) => customer.email === email);
        if (selectedCustomer) {
            setFormData(selectedCustomer);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateCustomer = () => {
        dispatch(updateCustomer(formData));
        setSelectedEmail('');
        setFormData({ name: '', email: '', address: '', phone: '' });
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Update Customer</h2>
            <select
                value={selectedEmail}
                onChange={handleEmailSelect}
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
                <>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="block w-full mb-4 p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                        className="block w-full mb-4 p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        className="block w-full mb-4 p-2 border rounded"
                    />
                    <button
                        onClick={handleUpdateCustomer}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Update Customer
                    </button>
                </>
            )}
        </div>
    );
};

export default UpdateCustomer;
