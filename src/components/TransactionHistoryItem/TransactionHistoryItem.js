import PropTypes from 'prop-types';
import { TransactionHistoryItemTd, TransactionHistoryItemTr } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
	return (	
		<TransactionHistoryItemTr>
			<TransactionHistoryItemTd>{type}</TransactionHistoryItemTd>
			<TransactionHistoryItemTd>{amount}</TransactionHistoryItemTd>
			<TransactionHistoryItemTd>{currency}</TransactionHistoryItemTd>
		</TransactionHistoryItemTr>
	);
};

TransactionHistoryItem.propTypes = {
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
};