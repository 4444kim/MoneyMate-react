import TrashIcon from '../../../shared/icons/TrashIcon';

interface TransactionProps {
  id: number;
  title: string;
  type: 'EXPENSE' | 'INCOME';
  amount: number;
  date: string;
  category: string;
}

export const TransactionItem = ({ amount, date, category }: TransactionProps) => {
  return (
    <li className="border border-gray-300 p-3 rounded-[5px] flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <div className="bg-gray-400 w-[40px] h-[40px] rounded-[20px]"></div>
        <p className="flex flex-col items-start gap-[5px]">
          <span className="text-xl font-sans">{category}</span>
          <span className="text-gray-500">{date}</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xl">{amount} $</span>
        <button>
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};
