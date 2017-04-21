import React from 'react';

const MessageAvatar = ({user_image_url}) => (
  <div className="avatar_container">
    <img className="avatar" src={window.images.default_avatar} />
  </div>
);

export default MessageAvatar;
