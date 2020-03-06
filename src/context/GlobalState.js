import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -50 },
        { id: 2, text: 'Beers', amount: -30},
        { id: 3, text: 'Food', amount: -200},
        { id: 4, text: 'Salary', amount: 500}
    ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}