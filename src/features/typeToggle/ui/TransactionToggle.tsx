import { useTransactionType } from '../../../app/providers/TransactionTypeProvider';
import Button from '../../../shared/ui/button/Button';

function TransactionToggle() {
  const { transactionType, setTransactionType } = useTransactionType();
  console.log('сработал TransactionToggle');
  return (
    <div className="flex justify-between">
      <Button
        className={`w-[49%] py-[20px] text-xl ${
          transactionType === 'EXPENSE' ? 'bg-black text-white' : 'border border-gray-300'
        }`}
        onClick={() => setTransactionType('EXPENSE')}>
        Расход
      </Button>
      <Button
        className={`w-[49%] py-[20px] text-xl ${
          transactionType === 'INCOME' ? 'bg-black text-white' : 'border border-gray-300'
        }`}
        onClick={() => setTransactionType('INCOME')}>
        Доход
      </Button>
    </div>
  );
}

export default TransactionToggle;
