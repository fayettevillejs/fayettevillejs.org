import { Fragment } from 'react';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import ListItem from '../components/ListItem/ListItem';
import * as styles from '../styles/pages.styles';

const Sponsorship = () => {
  return (
    <Fragment>
      <Header />
      <Layout customStyles={styles.customLayoutPadding}>
        <div css={styles.textContentContainer}>
          <h3 css={styles.h3}>What is the money used for?</h3>
          <p css={styles.bottomSpacing(24)}>
            The cost of running the group is about $1600 / year, and nearly all money goes toward
            food and beverages for the attendees. In the event we're having a social event, we will
            pay for a couple appetizers for the group to share. Any money left over at the end of
            the year helps pay the Meetup dues ($180 / year) for that year, or is set aside for the
            following year. All money is handled through{' '}
            <a css={styles.link} href="https://opencollective.com/">
              Open Collective
            </a>{' '}
            for transparency.
          </p>

          <h3 css={styles.h3}>What do you get for sponsoring</h3>
          <p css={styles.bottomSpacing(24)}>
            We're always interested in in-kind sponsorship like books, t-shirts etc to give away
            throughout the year. If this is something your company is interested in, I like to
            handle these on a case by case basis. Please get in touch to discuss options!
          </p>

          <p css={styles.bottomSpacing(24)}>
            There are two monetary options for sponsorship with slightly different benefits.
          </p>

          <ul css={styles.bottomSpacing(40)}>
            <ListItem
              title="Yearly Model"
              text="If you donate $200 / more, the money will be spread across multiple events during the year."
              bottomMargin={16}
            />

            <ul css={[styles.subList, styles.bottomSpacing(24)]}>
              <li css={[styles.subListItem, styles.bottomSpacing(4)]}>
                Company logo on the{' '}
                <a css={styles.link} href="/sponsors">
                  fayetteville.js website
                </a>
              </li>
              <li css={[styles.subListItem, styles.bottomSpacing(4)]}>
                Company logo on the{' '}
                <a css={styles.link} href="https://www.meetup.com/fayettevillejs/sponsors/">
                  fayetteville.js Meetup site
                </a>
              </li>
              <li css={[styles.subListItem, styles.bottomSpacing(4)]}>
                Logo in the pre-event presentation
              </li>
              <li css={[styles.subListItem, styles.bottomSpacing(4)]}>
                Representative time during pre-event
              </li>
            </ul>

            <ListItem
              title="Event Model"
              text="Donate for specific events in smaller amounts (typically < $100)."
              bottomMargin={16}
            />

            <ul css={styles.subList}>
              <li css={[styles.subListItem, styles.bottomSpacing(4)]}>
                Logo in the pre-event presentation
              </li>
              <li css={[styles.subListItem, styles.bottomSpacing(4)]}>
                Representative time during pre-event
              </li>
            </ul>
          </ul>

          <Button
            fullWidth
            text="sign up"
            bottomMargin={56}
            onClick={() => (window.location.href = 'https://opencollective.com/fayettevillejs')}
          />
        </div>
      </Layout>
    </Fragment>
  );
};

export default Sponsorship;
