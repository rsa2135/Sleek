import React from 'react';


const statusOrAvatar = (props) => {
  if (props.channel) {
    return (<span className="status-modal">
      #
    </span>);
  } else {
    return (<span className="status-modal-user">
            <img className="avatar" src={window.images.default_avatar} />
          </span>
    );
  }
};

const userOrChannel = (props) => {
  let type;
  if (props.channel) {
    type = props.channel.name;
  } else {
    type = props.user.username;
  }

  return (
    <span className="modal-channel-name">
      {type}
    </span>
  );
};

const ChannelNameRowModal = (props) => {
  return (
    <div className="channel-name-row-modal">
      {statusOrAvatar(props)}
      {userOrChannel(props)}
    </div>
  );
};

export default ChannelNameRowModal;
