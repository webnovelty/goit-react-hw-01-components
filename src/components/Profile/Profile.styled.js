import styled from 'styled-components';

export const ProfileCard = styled.article`
width: 300px;
text-align: center;
  
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Description = styled.div`
 padding-top: 25px;
 padding-bottom: 25px;

`;

export const Avatar = styled.img`
  border-radius: 100px;
    border: 3px solid green;
    box-shadow: 0 0 7px #666;
width: 100px;
height: 100px;
`;

export const Username = styled.p`
font-weight: bold;
font-size: 20px;
`;
export const Tag = styled.p`
font-size: 15px;
color: grey;

`;
export const Location = styled.p`
color: grey;
font-size: 15px;
`;
export const Stats = styled.ul`

display: flex;
justify-content: center;
background-color: #e6eaeb;


`;
export const Label = styled.span`
display: block;
color: grey;
font-size: 15px;
margin-bottom: 5px;
`;
export const Quantity = styled.span`

font-weight: bold;
`;
export const List = styled.li`

width: 100%;
 border: 1px solid #d2d8d9; 
gap: 5px;
padding-top: 30px;
padding-bottom: 30px;
`;