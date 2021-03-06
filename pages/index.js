import fetch from 'isomorphic-unfetch';
import { Fragment, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Event from '../components/Event/Event';
import Header from '../components/Header/Header';
import Bomb from '../public/bomb.svg';
import * as styles from '../styles/pages.styles';

const REMOVE_HTML = /<[^>]*>?/gm;

const Content = ({ event, error }) => {
  if (error) {
    return (
      <Layout>
        <div css={styles.errorContainer}>
          <Bomb />
          <p css={styles.errorTitle}>Oh no, you broke it!</p>
          <p css={styles.errorSubTitle}>We'll restart the hamster wheel shortly.</p>
        </div>
      </Layout>
    );
  }

  if (!event) {
    return (
      <Layout>
        <div css={styles.errorContainer}>
          <p css={styles.errorTitle}>No Events Scheduled</p>
          <p css={styles.errorSubTitle}>Please check back soon!</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout customStyles={styles.customLayoutPadding}>
      <Event event={event} />
    </Layout>
  );
};

const Index = ({ event, error }) => {
  useEffect(() => {
    const sessionData = sessionStorage.getItem('fayjs_event');

    if (!sessionData || sessionData === 'null') {
      sessionStorage.setItem('fayjs_event', JSON.stringify(event));
    }
  }, []);

  return (
    <Fragment>
      <Header />
      <Content event={event} error={error} />
    </Fragment>
  );
};

Index.getInitialProps = async () => {
  if (process.browser) {
    const sessionData = await JSON.parse(sessionStorage.getItem('fayjs_event'));
    return { event: sessionData } || fetchMeetupInfo();
  }

  return fetchMeetupInfo();
};

function formatEvent(eventPayload) {
  if (eventPayload.length === 0) {
    return null;
  }

  const nextEvent = eventPayload[0];

  if (nextEvent.name.toLowerCase().match(/lightning talks/)) {
    return {
      ...nextEvent,
      speaker: null,
      splitDescription: nextEvent.description.split('=&gt;'),
      isLightningTalks: true
    };
  }

  return {
    ...nextEvent,
    speaker: findSpeakerName(nextEvent.description),
    splitDescription: nextEvent.description.split('<p>'),
    isLightningTalks: false
  };
}

function findSpeakerName(description) {
  const startingIndex = description.search(/(Presenter|Speaker)/);

  const splitSubstring = description.substring(startingIndex).replace(REMOVE_HTML, '').split(' ');

  return `${splitSubstring[1]} ${splitSubstring[2]}`;
}

async function fetchMeetupInfo() {
  const response = await fetch('https://api.meetup.com/fayettevillejs/events');
  const result = await response.json();

  if (!result || result.errors) {
    throw new Error(result.errors[0].message);
  }

  return { event: formatEvent(result) };
}

export default Index;
