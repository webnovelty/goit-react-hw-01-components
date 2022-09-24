import styled from 'styled-components';

export const FriendItem = styled.li`
display: flex;
align-items: center;
padding: 10px 25px 11px 25px;

background: #fff;
box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;
export const FriendStatus = styled.span`
color: ${p => {
		return p.selected ? 'green' : 'red';
	}};
`;

export const FriendImg = styled.img`
margin-left: 5px`;
export const FriendName = styled.p`
font-weight: bold;
margin-left: 5px`;