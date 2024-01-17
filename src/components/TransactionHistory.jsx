import { Transitionpart } from './transition/Transitionpart';
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
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
