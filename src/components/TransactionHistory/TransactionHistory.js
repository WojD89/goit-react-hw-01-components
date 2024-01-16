import transactionsStyles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <section className={transactionsStyles.transaction}>
      <table className={transactionsStyles.transactionHistory}>
        <thead className={transactionsStyles.tableHead}>
          <tr>
            <th className={transactionsStyles.tableHeadItem}>Type</th>
            <th className={transactionsStyles.tableHeadItem}>Amount</th>
            <th className={transactionsStyles.tableHeadItem}>Currency</th>
          </tr>
        </thead>

        <tbody className={transactionsStyles.tableBody}>
          {items.map(item => (
            <tr key={item.id} className={transactionsStyles.tableBodyItem}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
