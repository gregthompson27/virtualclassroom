import React from 'react';
import PropTypes from 'prop-types';
import AnnouncementList from './allUsers/AnnouncementList';
import AssignmentList from './allUsers/AssignmentList';
import ClassList from './allUsers/ClassList';

export default function StudSplashScreen({ name, user }) {
  return (
    <div>
      <h1>
        Hello
        {' '}
        {name}
      </h1>
      <AnnouncementList />
      <AssignmentList user={user} />
      <ClassList />
    </div>
  );
}
StudSplashScreen.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
};

StudSplashScreen.defaultProps = {
  name: '',
  user: '',
};