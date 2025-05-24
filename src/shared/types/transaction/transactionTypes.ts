export interface TransactioInterface {
  id: number;
  title: string;
  type: 'EXPENSE' | 'INCOME';
  amount: number;
  date: string;
  category: string;
}
