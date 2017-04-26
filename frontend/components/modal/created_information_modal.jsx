import React from 'react';
import {FormattedDate} from 'react-intl';

const CreatedInformationModal = (props) => {
  return (
    <div className="created-information-modal">
      Created by
      <span className="creator-id"> {props.channel.creator} </span>
      on
      <span className="date-created"> <FormattedDate
        value={props.channel.created_at}
        month='long'
        day='2-digit'
        year='numeric'
        />
      </span>
    </div>
  );
};

export default CreatedInformationModal;
