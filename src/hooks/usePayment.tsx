import { createContext, useState, ReactNode, useContext } from 'react';

export interface IPayment {
  id: number;
  user: string;
  data: string;
  value: string;
  title: string;
  isPayment: boolean;
}

interface IPaymentProvider {
  children: ReactNode;
}

interface IPaymentContextType {
  payments: IPayment[];
  createPayment: (payment: IPayment) => void;
  updatePayment: (id: number, updatePayment: IPayment) => void;
  listPayment: () => IPayment[];
  deletePayment: (payment: number) => void;
}

const PaymentContext = createContext<IPaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: IPaymentProvider) {
  const [payments, setPayments] = useState<IPayment[]>([]);

  function createPayment(payment: IPayment) {
    setPayments(prevPayments => [...prevPayments, { ...payment }]);
  }

  function updatePayment(id: number, updatePayment: IPayment) {
    setPayments(prevPayments =>
      prevPayments.map(payment => (payment.id === id ? { ...payment, ...updatePayment } : payment)),
    );
  }

  function listPayment() {
    return payments;
  }

  function deletePayment(paymentId: number) {
    setPayments(payments.filter(payment => payment.id !== paymentId));
  }

  return (
    <PaymentContext.Provider value={{ payments, createPayment, updatePayment, listPayment, deletePayment }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const paymentContext = useContext(PaymentContext);
  return paymentContext;
}
