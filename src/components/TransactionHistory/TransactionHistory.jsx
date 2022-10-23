import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableRow,
  TableName,
  TableData,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TableRow>
          <TableName>Type</TableName>
          <TableName>Amount</TableName>
          <TableName>Currency</TableName>
        </TableRow>
      </TableHead>

      <tbody>
        {transactions.map(transaction => (
          <TableRow key={transaction.id}>
            <TableData>{transaction.type}</TableData>
            <TableData>{transaction.amount}</TableData>
            <TableData>{transaction.currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
