import { FormEvent, useState } from 'react';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../shared/ui/input/Input';
import Select from '../../../shared/ui/select/Select';
import { createTransaction } from '../../../shared/api/transaction/transaction';
import { useTransactionForm } from '../../../shared/hooks/useTransactionFormModal';

interface TransactionModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function TransactionModal({ setOpenModal }: TransactionModalProps) {
  const { transactionTypeModal, setTransactionTypeModal, categories, formattedDate } =
    useTransactionForm();

  const [transactionData, setTransactionData] = useState({
    title: '',
    type: transactionTypeModal,
    amount: '',
    date: '',
    category: '',
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const dataToSend = {
      ...transactionData,
      type: transactionTypeModal,
      date: formattedDate,
    };
    try {
      await createTransaction(dataToSend);
    } catch (error) {
      console.error('Ошибка при создании транзакции:', error);
    }
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8  min-w-md flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">Добавить транзакцию</span>
            <Button
              onClick={() => setOpenModal(false)}
              className="text-gray-500 text-xl p-0 border-0">
              X
            </Button>
          </div>
          <p className="w-md text-lg text-gray-500 leading-tight">
            Заполните детали вашей транзакции. Нажмите сохранить, когда закончите.
          </p>
          <div className="mt-5 flex justify-between gap-[15px]">
            <Button
              className={`px-19 py-4 text-lg font-medium border-2 hover:bg-gray-50 transition-all ${
                transactionTypeModal === 'EXPENSE' ? 'border-green-600' : 'border-gray-200'
              }`}
              type="button"
              onClick={() => setTransactionTypeModal('EXPENSE')}>
              Расход
            </Button>
            <Button
              className={`px-19 py-4 text-lg font-medium border-2 hover:bg-gray-50 transition-all ${
                transactionTypeModal === 'INCOME' ? 'border-green-600' : 'border-gray-200'
              }`}
              type="button"
              onClick={() => setTransactionTypeModal('INCOME')}>
              Доход
            </Button>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex flex-col items-start gap-3">
              <span className="text-lg font-medium">Название</span>
              <Input
                type="text"
                placeholder="Поход в горы"
                className="w-full py-3 text-lg"
                value={transactionData.title}
                onChange={(event) =>
                  setTransactionData({ ...transactionData, title: event.target.value })
                }
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="text-lg font-medium">Категория</span>
              <Select
                className="w-full text-lg"
                value={transactionData.category}
                onChange={(e) =>
                  setTransactionData({ ...transactionData, category: e.target.value })
                }>
                <option disabled value="">
                  Выберите категорию
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="text-lg font-medium">Сумма</span>
              <Input
                type="text"
                placeholder="0.00"
                className="w-full py-3 text-lg"
                value={transactionData.amount}
                onChange={(e) => setTransactionData({ ...transactionData, amount: e.target.value })}
              />
            </div>
          </div>
          <Button className="bg-black text-white text-lg mt-5" type="submit">
            Сохранить
          </Button>
        </div>
      </div>
    </form>
  );
}

export default TransactionModal;
