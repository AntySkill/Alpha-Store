import styled from 'styled-components';

export const ButtonContainer = styled.button`
font-size: 1.5rem;
background: transparent;
border: 0.04rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.6rem;
padding: 0.5rem;
transition: all 0,5 ease-in-out;
&:hover{
  background:var(--lightBlue);
  color:var(--mainBlue);
}
&:focus{
  outline:none;
}
`