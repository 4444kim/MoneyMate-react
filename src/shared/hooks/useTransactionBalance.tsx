import { useEffect, useState } from 'react';
import { getTransactionList } from '../../shared/api/transaction/transaction';
import { TransactioInterfaceGet } from '../types/transactionTypes';

export const useTransactionsBalance = () => {
  const [transactions, setTransactions] = useState<TransactioInterfaceGet[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactionList();
      setTransactions(data);

      const income = data
        .filter((t) => t.type === 'INCOME')
        .reduce((acc, t) => acc + Number(t.amount), 0);
      const expense = data
        .filter((t) => t.type === 'EXPENSE')
        .reduce((acc, t) => acc + Number(t.amount), 0);
      setBalance(income - expense);
    };

    fetchData();
  }, []);

  return { transactions, balance };
};
