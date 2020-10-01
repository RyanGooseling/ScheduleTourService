import React from 'react';


const Booker = (props) => {

  const Modal = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  `;

  const Content = styled.div`
    padding: 1rem;
  `;

  if (!props.modal) {
    return null;
  } else {
    return (
      <Modal id="modal">
        <h2>Let's Book</h2>
        <Content>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.'}</Content>
        <div class="actions">
          <button class="toggle-button" onClick={() => props.onClose()}>
            close
          </button>
        </div>
      </Modal>
    );
  }
};

export default Booker;
