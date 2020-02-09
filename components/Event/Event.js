import { Fragment } from 'react';
import { format } from 'date-fns';
import ArrowRight from '../../public/arrow-right.svg';
import Button from '../Button/Button';
import * as styles from './Event.styles';

const Event = ({ event }) => {
  const date = format(new Date(event.time), 'MMMM d, yyyy');
  const startTime = format(new Date(event.time), 'h:mm aa');
  const endTime = format(new Date(event.time + event.duration), 'h:mm aa');
  const onClick = () => (window.location.href = event.link);

  return (
    <Fragment>
      <div css={styles.textContentContainer}>
        <p css={styles.eventTitle}>{event.name}</p>
        <p css={styles.speaker}>{event.speaker}</p>
        <div css={[styles.descriptionBorder, event.isLightningTalks && { borderLeft: 'none' }]}>
          {renderDescriptionBlocks(event.isLightningTalks, event.splitDescription)}
        </div>
        <div css={styles.eventTimes}>
          <span css={styles.date}>{date}</span>
          <span>{`${startTime} - ${endTime}`}</span>
        </div>

        <div css={styles.buttonLayout}>
          <Button text="learn more" onClick={onClick} />
        </div>
      </div>
    </Fragment>
  );
};

function renderLightningTalks(description) {
  return description.map((block, idx, arr) => {
    const isLast = idx === arr.length - 1;
    const speakerIndex = block.indexOf('by');

    const speaker = removeHtml(block.slice(speakerIndex)).trim();
    const talkTitle = block.slice(0, speakerIndex).trim();

    return (
      <li
        key={idx.toString()}
        css={[styles.description, styles.lightningTalkLayout, { marginBottom: isLast ? 0 : 24 }]}
      >
        <div css={styles.iconFlex}>
          <ArrowRight />
        </div>

        <div css={styles.lightningTalkContainer}>
          <p css={styles.lightningTalkTitle}>{talkTitle}</p>
          <p>{speaker}</p>
        </div>
      </li>
    );
  });
}

function renderDescriptionBlocks(isLighningTalks = false, description) {
  if (isLighningTalks) {
    return (
      <ul css={[styles.list]}>
        <p css={styles.LightningTalkDescription}>{removeHtml(description[0])}</p>
        {renderLightningTalks(description.filter((block, idx) => idx !== 0))}
      </ul>
    );
  }

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
          {removeHtml(block)}
        </p>
      );
    });
}

function removeHtml(str) {
  return str.replace(/<[^>]*>?/gm, '');
}

export default Event;
