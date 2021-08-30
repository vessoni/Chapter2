import incomingImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary(): JSX.Element {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomingImg} alt="incomingImg" />
        </header>

        <strong>£1000</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outComeImg} alt="outComeImg" />
        </header>

        <strong> -£5000</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="totalImg" />
        </header>

        <strong>£500</strong>
      </div>
    </Container>
  );
}
