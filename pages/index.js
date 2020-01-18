import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { Fragment, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Event from '../components/Event/Event';
import Bomb from '../public/bomb.svg';
import * as styles from './index.styles';

const REMOVE_HTML = /<[^>]*>?/gm;

const Content = ({ event, error }) => {
  if (!event || error) {
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

  return (
    <Layout>
      <Event event={event} />
    </Layout>
  );
};

const Index = ({ event, error }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('fayjs_event')) {
      sessionStorage.setItem('fayjs_event', JSON.stringify(event));
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Content event={event} error={error} />
    </Fragment>
  );
};

Index.getInitialProps = async () => {
  if (process.browser) {
    return {
      event: JSON.parse(sessionStorage.getItem('fayjs_event'))
    };
  }

  const response = await fetch('https://api.meetup.com/fayettevillejs/events');
  const result = await response.json();

  if (!result || result.errors) {
    throw new Error(result.errors[0].message);
  }

  return { event: formatEvent(result) };
};

function formatEvent(eventPayload) {
  const nextEvent = eventPayload[0];
  const speaker = findSpeakerName(nextEvent.description);
  const splitDescription = nextEvent.description.split('<p>');

  return {
    ...nextEvent,
    speaker,
    splitDescription
  };
}

function findSpeakerName(description) {
  const startingIndex = description.indexOf('Presenter' || 'Speaker');
  const splitSubstring = description
    .substring(startingIndex)
    .replace(REMOVE_HTML, '')
    .split(' ');

  return `${splitSubstring[1]} ${splitSubstring[2]}`;
}

export default Index;
