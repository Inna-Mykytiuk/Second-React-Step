import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: orange;
      color: #000;
    }

    &:active {
      scale: 0.95;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    text-align: center;
    margin: 0;
  }
`;
