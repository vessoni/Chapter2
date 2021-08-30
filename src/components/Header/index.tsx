import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header(): JSX.Element {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="Cambridge Judge Business School logo." />
          <button type="button">New Transaction</button>
        </Content>
      </Container>
    </>
  );
}
