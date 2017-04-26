import React from 'react';


const statusOrAvatar = (props) => {
  let item;
  if (props.channel.is_dm === false) {
    item = <span className="status-modal">
      #
    </span>;
  } else {
    item = <img className="avatar" src={window.images.default_avatar} />;
  }

  return (
    {item}
  );
};

const userOrChannel = (props) => {
  let type;
  if (props.channel.is_dm === false) {
    type = props.channel.name;
  } else {
    type = props.user.name;
  }

  return (
    <span className="modal-channel-name">
      {type}
    </span>
  );
};



const ChannelNameRowModal = (props) => {
  render (
    <div className="channel-name-row-modal">
      {statusOrAvatar()}
      {userOrChannel()}
    </div>
  );

};
export default ChannelNameRowModal;
