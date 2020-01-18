import { Fragment } from 'react';
import { format } from 'date-fns';
import Button from '../Button/Button';
import * as styles from './Event.styles';

const Event = ({ event }) => {
  const date = format(new Date(event.time), 'MMMM d, yyyy');
  const startTime = format(new Date(event.time), 'h:mm aa');
  const endTime = format(new Date(event.time + event.duration), 'h:mm aa');
  const onClick = () => (window.location.href = event.link);

  return (
    <Fragment>
      <p css={styles.eventTitle}>{event.name}</p>
      <p css={styles.speaker}>{event.speaker}</p>
      <div css={styles.descriptionContainer}>{createDescriptionBlocks(event.splitDescription)}</div>
      <span css={styles.date}>{date}</span>
      <span>{`${startTime} - ${endTime}`}</span>
      <div css={styles.buttonLayout}>
        <Button text="learn more" onClick={onClick} />
      </div>
    </Fragment>
  );
};

function createDescriptionBlocks(description) {
  const isSpeakerLine = RegExp('(Presenter|Speaker)');

  return description
    .filter(block => !isSpeakerLine.test(block) && block !== '')
    .map((block, idx, arr) => {
      const isFirst = idx === 0;
      const isLast = idx === arr.length - 1;

      return (
        <p
          css={[styles.description, isFirst && { marginTop: 0 }, isLast && { marginBottom: 0 }]}
          key={idx.toString()}
        >
          {block.replace(/<[^>]*>?/gm, '')}
        </p>
      );
    });
}

export default Event;
