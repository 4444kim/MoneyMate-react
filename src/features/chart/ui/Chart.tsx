import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useEffect, useState } from 'react';
import { getTransactionList } from '../../../shared/api/transaction/transaction';
import { TransactioInterfaceGet } from '../../../shared/types/transactionTypes';
import { useTransactionType } from '../../../app/providers/TransactionTypeProvider';

const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

interface ChartData {
  name: string;
  value: number;
}

const Chart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const { transactionType } = useTransactionType();

  useEffect(() => {
    const fetchAndGroup = async () => {
      const transactions: TransactioInterfaceGet[] = await getTransactionList();

      const grouped: ChartData[] = Array(7)
        .fill(null)
        .map((_, i) => ({
          name: days[i],
          value: 0,
        }));

      transactions.forEach((t) => {
        if (t.type !== transactionType) return;
        const dayIndex = new Date(t.date).getDay();
        grouped[dayIndex].value += Number(t.amount);
      });

      setData(grouped);
    };

    fetchAndGroup();
  }, [transactionType]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="value"
          fill={transactionType === 'EXPENSE' ? '#f87171' : '#4ade80'}
          name={transactionType === 'EXPENSE' ? 'Расходы' : 'Доходы'}
          activeBar={<Rectangle fill={transactionType === 'EXPENSE' ? '#fecaca' : '#bbf7d0'} />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
