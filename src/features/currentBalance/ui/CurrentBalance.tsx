interface CurrentBalanceProps {
  balance: number;
}

function CurrentBalance({ balance }: CurrentBalanceProps) {
  console.log('сработал CurrentBalance');

  return (
    <div className="p-[25px] border border-gray-300 rounded-[5px] bg-green-50">
      <h2 className="text-xl">Текущий баланс</h2>
      <span className={`text-4xl font-semibold ${balance < 0 ? 'text-red-600' : 'text-black'}`}>
        {balance || '0'} $
      </span>
    </div>
  );
}

export default CurrentBalance;
