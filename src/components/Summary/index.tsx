import React from 'react';
import incomingImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export function Summary(): JSX.Element {
  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }

  //   return acc;
  // }, 0);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    },
  );

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomingImg} alt="incomingImg" />
        </header>

        <strong>
          {new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outComeImg} alt="outComeImg" />
        </header>

        <strong>
          -
          {new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="totalImg" />
        </header>

        <strong>
          {new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
