import Styled from '@emotion/styled';

export const Label = Styled.label`
margin-bottom: 5px;
margin-left: 24px;
color:#20b2aa;
`;

export const Input = Styled.input`
display: block;
width: 350px;
height: 30px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
border: none;
border-bottom: 2px solid #20b2aa;
color: #20b2aa;

&:focus{
    outline:none;
	border: 1px solid #20b2aa;
    border-radius:5px;
   
}

 &::placeholder {
    font: inherit;
    font-size: 16px;
    color:#20b2aa;
  }

`;
