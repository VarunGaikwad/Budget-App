import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "react-uuid";
import useLocalStorage from "../../hooks/useHook";

const BudgetContext = React.createContext()

export function useBuget() {
    return useContext(BudgetContext)
}

export const BudgetProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", []),
        [expenses, setExpenses] = useLocalStorage("expenses", []),
        getBudgetExpense = (budgetId) => {
            return expenses.filter(oItem => oItem.budgetId === budgetId)
        },
        addExpense = ({ sDescription, nAmount, budgtetId }) => {
            setExpenses(prevExpense => {
                return [...prevExpense, { id: uuidV4(), sDescription, nAmount, budgtetId }]
            })
        },
        addBudget = ({ sName, nMax }) => {
            setBudgets(prevBudget => {
                if (prevBudget.find(budget => budget.name === sName)) {
                    return prevBudget;
                }
                return [...prevBudget, { id: uuidV4(), sName, nMax }]
            })
        },
        deleteBudget = (id) => {
            setBudgets(prevBudget => {
                return prevBudget.filter(oItem => oItem.id !== id);
            });
        },
        deleteExpense = (id) => {
            setBudgets(prevExpense => {
                return prevExpense.filter(oItem => oItem.id !== id);
            })
        };

    return <BudgetContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpense,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>
        {children}
    </BudgetContext.Provider>;
}