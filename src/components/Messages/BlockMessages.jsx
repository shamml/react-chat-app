import React from 'react';
import InfoMessages from './InfoMessages';
import OutboxMessage from './OutboxMessage';
import InboxMessages from './InboxMessages';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

function BlockMessages({ message }) {
  const profileId = useSelector((state) => state.application.profile._id);

  const toUserId = message.toUserId;

  const loading = useSelector((state) => state.messages.loading);

  if (loading) {
    return <Skeleton count={1} duration={2} />;
  }
  if (message.type === 'info') {
    return <InfoMessages content={message.content} />;
  }

  if (toUserId === profileId) {
    return <InboxMessages content={message.content} message={message} />;
  }
  return (
    <div>
      <OutboxMessage content={message.content} message={message} />
    </div>
  );
}

BlockMessages.propTypes = {
  message: PropTypes.object.isRequired,
};

export default BlockMessages;
