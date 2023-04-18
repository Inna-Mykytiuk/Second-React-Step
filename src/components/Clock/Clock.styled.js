import styled from 'styled-components';

export const ClockWrapper = styled.div`
  width: 20%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  background-color: #fff;

  height: 100%;
  padding: 20px;
  margin: 0 auto;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  h2 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    margin: 0;
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 700;

    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
    background-color: rgb(33, 150, 243);
    color: rgb(255, 255, 255);
  }
`;
