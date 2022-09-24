import PropTypes from 'prop-types';
import { TransactionHistoryItem } from '../../components/TransactionHistoryItem/TransactionHistoryItem';
import {
	TransactionHistoryTable,
	TransactionHistoryThead,
	TransactionHistoryTr,
	TransactionHistoryTh,
	TransactionHistoryTbody
} from './TransactionHistory.styled.js';

export const TransactionHistory = ({ items }) => {
	return (
		<TransactionHistoryTable>
			<TransactionHistoryThead>
				<TransactionHistoryTr>
					<TransactionHistoryTh>Type</TransactionHistoryTh>
					<TransactionHistoryTh>Amount</TransactionHistoryTh>
					<TransactionHistoryTh>Currency</TransactionHistoryTh>
				</TransactionHistoryTr>
			</TransactionHistoryThead>
			<TransactionHistoryTbody>
				
			{
				items.map(({ id, type, amount, currency }) => (
					<TransactionHistoryItem
						key={id}
						type={type}
						amount={amount}
					currency={currency} />
				))
					}
				
			</TransactionHistoryTbody>
			</TransactionHistoryTable>
	);
};
TransactionHistory.propTypes = {
	items: PropTypes.array.isRequired,
};