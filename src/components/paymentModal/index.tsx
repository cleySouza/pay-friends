import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { usePayment, IPayment } from '../../hooks/usePayment';
import { Input, Button } from '../';
import { ContentButton, ContentInput, Title } from './styled';

interface IAddPaymentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedPayment: IPayment | null;
}

export function PaymentModal({ isOpen, onRequestClose, selectedPayment }: IAddPaymentModalProps) {
  const [id, setId] = useState(0);
  const [user, setUser] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const context = usePayment();

  useEffect(() => {
    if (selectedPayment) {
      setUser(selectedPayment.user);
      setData(selectedPayment.data);
      setValue(selectedPayment.value);
      setTitle(selectedPayment.title);
    } else {
      setUser('');
      setData('');
      setValue('');
      setTitle('');
    }
  }, [selectedPayment, isOpen]);

  function handleSavePayment() {
    const newId = Number(id) + 1;
    const payment = { id: newId, user, data, value, title, isPayment: false };

    if (selectedPayment) {
      context?.updatePayment(selectedPayment.id, { ...payment, id: selectedPayment.id });
    } else {
      context?.createPayment(payment);
      setUser('');
      setData('');
      setValue('');
      setTitle('');
      setId(newId);
    }
    onRequestClose();
  }

  function handleDeletePayment() {
    if (selectedPayment) {
      context?.deletePayment(selectedPayment.id);
      onRequestClose();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Title>{selectedPayment ? 'Atualizar' : 'Adicionar'} Pagamento</Title>
      <ContentInput>
        <Input isError={false} placeholder="user" value={user} onChange={event => setUser(event.target.value)} />
        <Input isError={false} placeholder="Data" value={data} onChange={event => setData(event.target.value)} />
        <Input isError={false} placeholder="value" value={value} onChange={event => setValue(event.target.value)} />
        <Input isError={false} placeholder="title" value={title} onChange={event => setTitle(event.target.value)} />
      </ContentInput>
      <ContentButton>
        <Button style={{ color: '#ffffff', background: '#4079C0' }} onClick={handleSavePayment}>
          Salvar
        </Button>
        {selectedPayment && (
          <Button style={{ color: '#4E4E4E', background: '#EDEDED' }} onClick={handleDeletePayment}>
            Excluir
          </Button>
        )}
      </ContentButton>
    </Modal>
  );
}
