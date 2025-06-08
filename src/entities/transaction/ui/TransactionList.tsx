import { useState, useEffect } from 'react';
import { ITransaction } from '../../../shared/types/transactionTypes';
import { TransactionItem } from './TransactionItem';
import { useTransactionType } from '../../../app/providers/TransactionTypeProvider';
import { getTransactionList } from '../../../shared/api/transaction/transaction';
import TransactionListSkeleton from '../../../shared/ui/skeletons/TransactionListSkeleton';

interface TransactionListProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function TransactionList({ openModal, setOpenModal }: TransactionListProps) {
  const [transactionList, setTransactionList] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { transactionType } = useTransactionType();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getTransactionList();
        setTransactionList(data);
      } catch (err) {
        console.error('Ошибка получения транзакций', err);
        setError('Не удалось загрузить транзакции.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(transactionList);

  const filteredData = transactionList.filter((item) => item.type === transactionType);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <span className="text-xl font-medium">
          Последние {transactionType === 'EXPENSE' ? 'расходы' : 'доходы'}
        </span>
        <button
          className="px-[18px] py-[10px] bg-green-600 text-white text-xl rounded-full"
          onClick={() => setOpenModal(!openModal)}>
          +
        </button>
      </div>

      {isLoading ? (
        <TransactionListSkeleton />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : filteredData.length === 0 ? (
        <div className="text-gray-500">Список транзакций пуст</div>
      ) : (
        <ul className="flex flex-col gap-[10px]">
          {filteredData.map((elem) => (
            <TransactionItem
              key={elem.id}
              id={elem.id}
              title={elem.title}
              date={elem.date}
              amount={elem.amount}
              type={elem.type}
              category={elem.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
