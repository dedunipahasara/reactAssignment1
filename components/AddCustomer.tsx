// src/components/AddCustomer.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../store/customerSlice';
import { nanoid } from 'nanoid';

const AddCustomer: React.FC = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddCustomer = () => {
        dispatch(addCustomer({ id: nanoid(), ...formData }));
        setFormData({ name: '', email: '', address: '', phone: '' });
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Add Customer</h2>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="block w-full mb-4 p-2 border rounded"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
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
                onClick={handleAddCustomer}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Customer
            </button>
        </div>
    );
};

export default AddCustomer;
