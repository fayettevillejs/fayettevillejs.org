import Layout from '../components/Layout/Layout';
import { Fragment } from 'react';
import ListItem from '../components/ListItem/ListItem';
import Heart from '../public/heart.svg';
import * as styles from './pages.styles';

const About = () => (
  <Fragment>
    <Layout customStyles={styles.customLayoutPadding}>
      <div css={styles.textContentContainer}>
        <h3 css={[styles.h3, { marginTop: 120 }]}>What is Fayetteville.js?</h3>
        <p css={styles.bottomSpacing(24)}>
          Fayetteville.js is a monthly meeting of software engineers in Northwest Arkansas who are
          interested in JavaScript. The purpose of the group is to learn, teach and network with
          other developers in the area.
        </p>
        <p css={styles.bottomSpacing(32)}>
          The group was originally formed in 2015 by{' '}
          <a href="https://blakej.io" css={styles.link}>
            Blake Johnston
          </a>
          , and is now one of NWA's longest-running and largest software development groups.
        </p>

        <h3 css={styles.h3}>What is the format of the events?</h3>
        <ul>
          <p css={styles.bottomSpacing(16)}>Events come in a couple different varieties:</p>

          <ListItem
            title="Conference style talks"
            text="Long form talks lasting about 45m in length about a single topic. This is a great opportunity to practice speaking in front of your peers!"
          />

          <ListItem
            title="Lightning talks"
            text="Multiple 5-10 minute talks from several people. If you've never given a talk before,
            this can be a great way to try it out."
          />

          <ListItem
            title="Social gatherings"
            text="Meeting at a local restaurant or bar to hang out and get to know your fellow NWA
            developers over a cold drink and food."
          />

          <ListItem
            title="Demo night"
            text="An opportunity to show off a project or work to a group of people. We will have the
            entire time reserved for people to show what they've been working on, no matter how
            big or small."
          />
        </ul>

        <h3 css={styles.h3}>Where are the events?</h3>
        <p css={styles.bottomSpacing(32)}>
          Despite the name, Fayetteville.js has events all over Northwest Arkansas. Most of the
          events are in Fayetteville, but we also have many in Bentonville and Rogers. The venue of
          the events depends on businesses interested in hosting / sponsoring an event. In
          Fayetteville, our events have been hosted by{' '}
          <a css={styles.link} href="https://hirelofty.com/">
            Lofty
          </a>{' '}
          for several years. <Heart />{' '}
        </p>

        <h3 css={styles.h3}>When are the events?</h3>
        <p css={styles.bottomSpacing(24)}>
          Events are nearly always on the last Thursday of the month at 6:30PM. This changes
          occasionally depending on my schedule. Events are usually posted a month in advance.
        </p>
        <p css={styles.bottomSpacing(24)}>
          An event will last about 2 hours. An example schedule looks like:
        </p>
        <p css={styles.bottomSpacing(8)}>
          <span css={styles.emphasis}>6:30 PM - 7:00 PM</span> // Socializing / Food
        </p>
        <p css={styles.bottomSpacing(8)}>
          <span css={styles.emphasis}>7:00 PM - 8:00 PM</span> // Main Event
        </p>
        <p css={styles.bottomSpacing(32)}>
          <span css={styles.emphasis}>8:00 PM - 8:30 PM // Socializing</span>
        </p>

        <h3 css={styles.h3}>Can I give a presentation?</h3>
        <p css={styles.bottomSpacing(32)}>
          Absolutely! If you're interested in presenting, please get in touch with me via Slack,
          e-mail or at an event
        </p>

        <h3 css={styles.h3}>I want to present, but can't think of anything!</h3>
        <p css={styles.bottomSpacing(32)}>
          We've got you! Here's a list of topics the community has expressed interest in. Feel free
          to pick one from the list! Giving a presentation is a great opportunity to learn something
          new -- don't feel like you have to be an expert give a presentation.
        </p>
      </div>
    </Layout>
  </Fragment>
);

export default About;
