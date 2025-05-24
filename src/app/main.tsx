import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { TransactionTypeProvider } from './providers/TransactionTypeProvider';
import { AuthProvider } from './providers/AuthProvider';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <TransactionTypeProvider>
      <App />
    </TransactionTypeProvider>
  </AuthProvider>,
);
