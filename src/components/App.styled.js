import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;

export const TextReport = styled.div`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Raleway-Bold', sans-serif;
`;

export const Button = styled.button`
  padding: 10px 20px;
  /* background-color: rgb(33, 150, 243); */
  background-color: rgb(43 46 48);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.8;
  font-size: 16px;
  font-weight: 700;
  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  font-family: 'Raleway-Regular', sans-serif;
  margin: 30px 0;

  &:hover,
  &:focus {
    /* filter: brightness(95%); */
    opacity: 1;
    color: #fff;
  }

  &:active {
    scale: 0.95;
  }
`;
