import { useState } from 'react';

export const useTransactionForm = () => {
  const [transactionTypeModal, setTransactionTypeModal] = useState<'EXPENSE' | 'INCOME'>('EXPENSE');

  const expenseCategories = [
    { id: 1, value: 'home', label: 'Дом' },
    { id: 2, value: 'taxi', label: 'Такси' },
    { id: 3, value: 'other', label: 'Прочее' },
  ];

  const incomeCategories = [
    { id: 1, value: 'work', label: 'работа' },
    { id: 2, value: 'freelance', label: 'Фриланс' },
    { id: 3, value: 'other', label: 'Прочее' },
  ];

  const categories = transactionTypeModal === 'EXPENSE' ? expenseCategories : incomeCategories;

  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  return {
    transactionTypeModal,
    setTransactionTypeModal,
    categories,
    formattedDate,
  };
};
