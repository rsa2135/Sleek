import React from 'react';
import FontAwesome from 'react-fontawesome';

const MemberCountModal = (props) => {
  return (
    <div className="member-count">
      <FontAwesome name='user-o' />
      <span className="count-modal">{props.channel.count}</span>
    </div>
  );
};

export default MemberCountModal;
