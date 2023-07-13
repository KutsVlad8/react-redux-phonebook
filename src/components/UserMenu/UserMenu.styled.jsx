import Styled from '@emotion/styled';

export const Img = Styled.img`
margin-right: 10px;
`;

export const Span = Styled.span`
margin-right: 10px;

  color: white;
`;

export const Button = Styled.button`
display: inline-block;
    height: 28px;
	
    background-color: white;
    color: #20b2aa;
    border: 1px solid #20b2aa;
    border-radius: 3px;
    cursor: pointer;
    outline: none;

&:focus,&:hover{
    border: 1px solid #20b2aa;
	background-color: #20b2aa;
    color: white;
	
}
`;
