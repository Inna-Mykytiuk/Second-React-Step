import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  height: 100%;
  padding: 8px;
  /* border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px; */

  padding: 30px;
`;

export const Wrapper = styled.div`
  width: 40%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  background-color: #fff;

  height: 100%;
  padding: 20px;
  margin: 0 auto;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
`;

export const InitialValue = styled.span`
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 700;
`;

export const Button = styled.button`
  width: 45%;
  height: 40px;

  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  background-color: #000;
  color: #fff;
  margin: 0;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &:hover {
    background-color: orange;
    color: #000;
  }
  &:active {
    scale: 0.95;
  }
`;
