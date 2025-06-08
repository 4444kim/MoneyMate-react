export interface ITransaction {
  id?: number;
  title: string;
  type: 'EXPENSE' | 'INCOME';
  amount: number;
  date: string;
  category: string;
}
