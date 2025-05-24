import api from '../axios';
import { TransactioInterface } from '../../types/transaction/transactionTypes';

interface TransactionData {
  title: string;
  type: 'EXPENSE' | 'INCOME';
  amount: string;
  date: string;
  category: string;
}

export const createTransaction = async (data: TransactionData) => {
  const response = await api.post('/api/transactions', data);
  return response.data;
};

export const getTransactionList = async (): Promise<TransactioInterface[]> => {
  const response = await api.get('/api/transactions');
  return response.data;
};

export const deleteTransaction = async (id: number): Promise<void> => {
  try {
    await api.delete(`/api/transactions/${id}`);
  } catch (error) {
    console.error(`Ошибка при удалении транзакции с id ${id}:`, error);
    throw error;
  }
};
