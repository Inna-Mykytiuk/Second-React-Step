import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  margin: 0 auto;
  h3 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
  }
  button {
    padding: 10px 20px;
    background-color: orange;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.8;

    &:hover,
    &:focus {
      /* filter: brightness(95%); */
      opacity: 1;
      color: #000;
    }

    &:active {
      scale: 0.95;
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: none;
      border-radius: 5px;
      outline: none;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    }
  }
`;
