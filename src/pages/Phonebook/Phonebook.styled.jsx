import Styled from '@emotion/styled';

export const Container = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;

    
`;

export const Head = Styled.h1`
text-align: center;
margin-bottom: 0;
color:#20b2aa;
`;
export const Title = Styled.h2`
    margin-top: 0;
    text-align: center;
    color:#20b2aa;
`;

export const FormContainer = Styled.div`
    width: 400px;
    margin-bottom: 20px;
    padding: 10px;
    height: min-content;
    // border: 1px solid #20b2aa;
    border-radius: 5px;
    box-shadow: rgb(26 25 24 / 50%) 2px 2px 5px 2px;
`;

export const LeftContainer = Styled.div`
width: 400px;
// border: 1px solid #20b2aa;
padding: 10px;
margin-bottom: 50px;
border-radius: 5px;
box-shadow: rgb(26 25 24 / 50%) 2px 2px 5px 2px;
`;

export const Template = Styled.p`
text-align: center;
margin-bottom: 0;
color:#20b2aa;
margin: 0;
font-size: 30px;
`;
