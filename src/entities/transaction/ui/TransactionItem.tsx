import TrashIcon from '../../../shared/icons/TrashIcon';
import { TransactioInterface } from '../../../shared/types/transaction/transactionTypes';
import { deleteTransaction } from '../../../shared/api/transaction/transaction';

export const TransactionItem = ({ amount, date, category, title, id }: TransactioInterface) => {
  return (
    <li className="border border-gray-300 p-3 rounded-[5px] flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <div className="bg-gray-400 w-[40px] h-[40px] rounded-[20px]"></div>
        <p className="flex flex-col items-start gap-[5px]">
          <span className="text-xl font-sans">Title: {title || 'пусто'}</span>
          <span className="text-xl font-sans">Category: {category || 'пусто'}</span>
          <span className="text-gray-500">Date: {date}</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xl">Balance: {amount} $</span>
        <button onClick={() => deleteTransaction(id)}>
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};
