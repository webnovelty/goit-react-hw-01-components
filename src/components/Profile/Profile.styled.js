import styled from 'styled-components';

export const ProfileCard = styled.article`
width: 400px;
text-align: center;

  background-color: #fff;
  
  

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
padding: 0;
margin: 0;



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
padding-top: 15px;
padding-bottom: 15px;
border-radius: 10px;
background: rgb(205 180 180) radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
box-shadow:
inset rgba(0,0,0,.6) 0 -3px 8px,
inset rgba(252,255,255,.7) 0 3px 8px,
rgba(0,0,0,.8) 0 3px 8px -3px;
`;