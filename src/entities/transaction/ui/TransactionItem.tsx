import TrashIcon from '../../../shared/icons/TrashIcon';
import { ITransaction } from '../../../shared/types/transactionTypes';
import { deleteTransaction } from '../../../shared/api/transaction/transaction';
import HomeIcon from '../../../shared/icons/HomeIcon';
import RoadIcon from '../../../shared/icons/EntertaimentIcon';
import FreelanseIcon from '../../../shared/icons/FreelanceIcon';
import TransactionIcon from '../../../shared/icons/TransactionIcon';
import Button from '../../../shared/ui/button/Button';

export const TransactionItem = ({ amount, date, category, title, id }: ITransaction) => {
  console.log(id);

  return (
    <li className="border border-gray-300 p-3 rounded-[5px] flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <div className="bg-gray-200 w-[45px] h-[45px] rounded-[20px] flex items-center">
          {category === 'home' ? (
            <HomeIcon />
          ) : category === 'taxi' ? (
            <RoadIcon />
          ) : category === 'work' ? (
            <FreelanseIcon />
          ) : category === 'freelance' ? (
            <FreelanseIcon />
          ) : (
            <TransactionIcon />
          )}
        </div>
        <p className="flex flex-col items-start gap-[5px]">
          <span className="text-xl font-sans">{title || 'пусто'}</span>
          {/* <span className="text-xl font-sans">{category || 'пусто'}</span> */}
          <span className="text-gray-500">{date}</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xl">{amount} $</span>
        <button onClick={() => deleteTransaction(id!)}>
          <TrashIcon className="w-5 h-5" />
        </button>
        <Button>посмотреть</Button>
      </div>
    </li>
  );
};
