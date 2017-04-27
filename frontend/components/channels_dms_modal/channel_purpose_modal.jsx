import React from 'react';

const ChannelPurposeModal = (props) => {
  return (
    <div className="purpose">
      {props.channel.description}
    </div>
  );
};

export default ChannelPurposeModal;
