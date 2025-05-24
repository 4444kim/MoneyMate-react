import api from '../axios';
import { TransactioInterfaceGet } from '../../types/transactionTypes';
import { TransactionInterfaceCreate } from '../../types/transactionTypes';

export const createTransaction = async (data: TransactionInterfaceCreate) => {
  const response = await api.post('/api/transactions', data);
  return response.data;
};

export const getTransactionList = async (): Promise<TransactioInterfaceGet[]> => {
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
