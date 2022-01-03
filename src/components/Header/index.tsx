import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({
  onOpenNewTransactionModal,
}: HeaderProps): JSX.Element {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="Cambridge Judge Business School logo." />
          <button type="button" onClick={onOpenNewTransactionModal}>
            New Transaction
          </button>
        </Content>
      </Container>
    </>
  );
}
