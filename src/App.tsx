// src/App.tsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <Provider store={store}>
            <div className="h-screen flex flex-col">
                <Navbar onSelect={setActiveTab} activeTab={activeTab} />
                <div className="flex-1 p-6 bg-gray-100">
                    {activeTab === 'dashboard' && <Dashboard />}
                    {activeTab === 'add' && <AddCustomer />}
                    {activeTab === 'update' && <UpdateCustomer />}
                    {activeTab === 'delete' && <DeleteCustomer />}
                </div>
            </div>
        </Provider>
    );
};

export default App;
