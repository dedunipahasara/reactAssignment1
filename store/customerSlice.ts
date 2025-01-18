import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
}

interface CustomerState {
    customers: Customer[];
}

const initialState: CustomerState = {
    customers: [],
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer(state, action: PayloadAction<Customer>) {
            state.customers.push(action.payload);
        },
        deleteCustomer(state, action: PayloadAction<string>) {
            state.customers = state.customers.filter(
                (customer) => customer.email !== action.payload
            );
        },
        updateCustomer(state, action: PayloadAction<Customer>) {
            const index = state.customers.findIndex(
                (customer) => customer.email === action.payload.email
            );
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        },
    },
});

export const { addCustomer, deleteCustomer, updateCustomer } =
    customerSlice.actions;

export default customerSlice.reducer;
