import React, { useState } from 'react';
import { PaymentProvider, IPayment } from './hooks/usePayment';
import GlobalStyles from './theme/globalStyles';
import { Login, Home } from './pages';
import { PaymentModal } from './components';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState<IPayment | null>(null);

  function handleOpenAddPaymentModal(payment: IPayment | null) {
    setSelectedPayment(payment);
    setIsAddPaymentModalOpen(true);
  }
  function handleCloseAddPaymentModal() {
    setIsAddPaymentModalOpen(false);
  }
  return (
    <PaymentProvider>
      <GlobalStyles />
      {isLogin ? <Home handleOpenAddPaymentModal={handleOpenAddPaymentModal} /> : <Login setIsLogin={setIsLogin} />}
      <PaymentModal
        isOpen={isAddPaymentModalOpen}
        onRequestClose={handleCloseAddPaymentModal}
        selectedPayment={selectedPayment}
      />
    </PaymentProvider>
  );
}

export default App;
