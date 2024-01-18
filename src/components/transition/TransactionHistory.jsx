import css from './TransactionHistory.module.css';
import { Transitionpart } from './Transitionpart';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionhistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Transitionpart key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};
