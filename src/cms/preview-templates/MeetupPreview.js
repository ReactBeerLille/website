import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import MeetupTemplate from '../../templates/meetup';

const MeetupPreview = ({ entry }) => {
  const meetup = entry.getIn(['data']).toJS();
  const rawDate = meetup.date;
  const formattedDate = format(rawDate, 'DD/MM/YYYY à H:mm');
  return <MeetupTemplate meetup={{ ...meetup, formattedDate, rawDate }} />;
};

MeetupPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default MeetupPreview;
