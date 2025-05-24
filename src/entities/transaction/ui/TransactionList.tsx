import { useState, useEffect } from 'react';
import { TransactioInterfaceGet } from '../../../shared/types/transactionTypes';
import { TransactionItem } from './TransactionItem';
import { useTransactionType } from '../../../app/providers/TransactionTypeProvider';
import { getTransactionList } from '../../../shared/api/transaction/transaction';

interface TransactionListProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function TransactionList({ openModal, setOpenModal }: TransactionListProps) {
  const [transactionList, setTransactionList] = useState<TransactioInterfaceGet[]>([]);
  const { transactionType } = useTransactionType();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransactionList();
        setTransactionList(data);
      } catch (err) {
        console.error('Ошибка получения транзакций', err);
      }
    };
    fetchData();
  }, []);

  const filteredData = transactionList.filter((item) => item.type === transactionType);

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center justify-between">
        <span className="text-xl font-medium">Последние расходы</span>
        <button
          className="px-[18px] py-[10px] bg-green-600 text-white text-xl rounded-full"
          onClick={() => setOpenModal(!openModal)}>
          +
        </button>
      </div>

      <ul className="flex flex-col gap-[10px]">
        {filteredData.length === 0 ? (
          <li className="text-gray-500">Список транзакций пуст</li>
        ) : (
          filteredData.map((elem) => (
            <TransactionItem
              key={elem.id}
              id={elem.id}
              title={elem.title}
              date={elem.date}
              amount={elem.amount}
              type={elem.type}
              category={elem.category}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TransactionList;
