import React from 'react';


const Booker = (props) => {

  if (!props.modal) {
    return null;
  } else {
    return (

      <div class="modal" id="modal">
        <h2>Let's Book</h2>
        <div class="content">{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.'}</div>
        <div class="actions">
          <button class="toggle-button" onClick={() => props.onClose()}>
            close
          </button>
        </div>
      </div>
    );
  }
};

export default Booker;
