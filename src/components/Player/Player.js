import { useRef } from 'react';
import { BtnWrapper, Btn, Container } from './Player.styled';

export const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <Container>
      <h2>Video player</h2>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <BtnWrapper>
        <Btn onClick={play}>Play</Btn>
        <Btn onClick={pause}>Pause</Btn>
      </BtnWrapper>
    </Container>
  );
};
