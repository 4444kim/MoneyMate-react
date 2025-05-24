export interface TransactioInterfaceGet {
  id: number;
  title: string;
  type: 'EXPENSE' | 'INCOME';
  amount: number;
  date: string;
  category: string;
}

export interface TransactionInterfaceCreate {
  title: string;
  type: 'EXPENSE' | 'INCOME';
  amount: string;
  date: string;
  category: string;
}
