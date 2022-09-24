import styled from 'styled-components';


export const Item = styled.li`
width: 100%;
 border: 1px solid #d2d8d9; 
gap: 5px;
padding-top: 15px;
padding-bottom: 15px;
border-radius: 10px;
background: rgb(100,100,100) radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
box-shadow:
inset rgba(0,0,0,.6) 0 -3px 8px,
inset rgba(252,255,255,.7) 0 3px 8px,
rgba(0,0,0,.8) 0 3px 8px -3px;
`;
export const Label = styled.span`
display: block;
font-size: 15px;
color: #fff;
`;
export const Percentage = styled.span`
margin-top: 10px;
display: block;
font-size: 20px;
font-weight: bold;
color: #fff;
`;

