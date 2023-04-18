import ReactModal from 'react-modal';
import { Wrapper } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 3px 10px',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ onClose, image, isOpen }) => {
  return (
    <div>
      {/* <h2>Modal</h2>
      <img src={image} alt="selected" width="320" />
      <button type="button" onClick={onClose}>
        Close
      </button> */}

      <ReactModal isOpen={isOpen} style={customStyles}>
        <Wrapper>
          <h2>Dish</h2>
          <img src={image} alt="selected" width="320" />
          <button type="button" onClick={onClose}>
            Close
          </button>
        </Wrapper>
      </ReactModal>
    </div>
  );
};
