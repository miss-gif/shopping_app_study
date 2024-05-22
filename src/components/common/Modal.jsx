import styled from "@emotion/styled";

const Modal = ({ isOpen, message, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <StyleDiv>
      <StyleBc>
        <p>{message}</p>
        <div>
          <button onClick={onConfirm}>확인</button>
          <button onClick={onClose}>취소</button>
        </div>
      </StyleBc>
    </StyleDiv>
  );
};

export default Modal;

const StyleDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eeeeee73;
`;

const StyleBc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
`;
