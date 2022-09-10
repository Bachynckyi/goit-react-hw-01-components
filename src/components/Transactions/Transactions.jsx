import PropTypes from 'prop-types';
import css from "./Transactions.module.css";


const Transactions = ({transactions}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                    <th>CURRENCY</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transactions => {
                    return (
                        <tr key={transactions.id}>
                            <td>{transactions.type}</td>
                            <td>{transactions.amount}</td>
                            <td>{transactions.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

Transactions.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
} 


export default Transactions;