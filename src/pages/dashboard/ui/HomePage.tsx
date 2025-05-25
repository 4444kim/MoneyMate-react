import CurrentBalance from '../../../features/currentBalance/ui/CurrentBalance';
// import PeriodFilter from '../../../features/periodFilter/ui/PeriodFilter';
import TransactionList from '../../../entities/transaction/ui/TransactionList';
import TransactionToggle from '../../../features/typeToggle/ui/TransactionToggle';
import TransactionModal from '../../../features/modal/ui/transactionModal';
import { useState } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../../app/providers/AuthProvider';
import { useTransactionsBalance } from '../../../shared/hooks/useTransactionBalance';
import Chart from '../../../features/chart/ui/Chart';

function MainPage() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { balance } = useTransactionsBalance();

  const { isAuth } = useAuth();
  if (!isAuth) return <Navigate to="/login" replace />;

  return (
    <section className="mt-[30px] px-[50px] flex flex-col gap-[30px]">
      <CurrentBalance balance={balance} />
      {/* <PeriodFilter /> */}
      <TransactionToggle />
      <Chart />
      {openModal && <TransactionModal setOpenModal={setOpenModal} />}
      <TransactionList openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
}

export default MainPage;
