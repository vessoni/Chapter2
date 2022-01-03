import Modal from 'react-modal';
import { useState } from 'react';
import { Container, TransactionTypeContainer } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps): JSX.Element {
  const [type, setType] = useState();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>New Transaction</h2>

        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="income" /> <span>Income</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="outcome" />
            <span>Outcome</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
