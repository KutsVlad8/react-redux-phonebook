import Styled from '@emotion/styled';

export const Form = Styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Label = Styled.label`
    margin-bottom: 5px;
    color: #20b2aa;

`;

export const Input = Styled.input`
    display: block;
    width: 350px;
    height: 30px;
    margin-bottom: 15px;
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
      border: none;
	background-color: #2f4f4f;
    color: white;
	
}
`;
