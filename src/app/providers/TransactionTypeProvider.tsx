import { createContext, useContext, useState, ReactNode } from 'react';

type TransactionType = 'EXPENSE' | 'INCOME';

interface TransactionTypeContextProps {
  transactionType: TransactionType;
  setTransactionType: (type: TransactionType) => void;
}

const TransactionTypeContext = createContext<TransactionTypeContextProps | undefined>(undefined);

export const TransactionTypeProvider = ({ children }: { children: ReactNode }) => {
  const [transactionType, setTransactionType] = useState<TransactionType>('EXPENSE');

  return (
    <TransactionTypeContext.Provider value={{ transactionType, setTransactionType }}>
      {children}
    </TransactionTypeContext.Provider>
  );
};

export const useTransactionType = () => {
  const context = useContext(TransactionTypeContext);
  if (!context) {
    throw new Error('useTransactionType must be used within TransactionTypeProvider');
  }
  return context;
};
