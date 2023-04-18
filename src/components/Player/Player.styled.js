import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 8px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  background-color: #fff;
  text-align: center;
  h2 {
    margin: 0px 0px 20px;
    font-size: 30px;
    font-weight: 700;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  margin-top: 25px;
`;

export const Btn = styled.button`
  margin: 0px 0px 20px;
  font-size: 26px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  background-color: rgb(33, 150, 243);
  color: rgb(255, 255, 255);

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  &:hover {
    background-color: orange;
    color: #fff;
  }
  &:active {
    scale: 0.95;
  }
`;
