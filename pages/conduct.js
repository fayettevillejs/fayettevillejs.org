import Layout from '../components/Layout/Layout';
import { Fragment } from 'react';
import ListItem from '../components/ListItem/ListItem';
import Heart from '../public/heart.svg';
import * as styles from '../styles/pages.styles';

const CodeOfConduct = () => (
  <Fragment>
    <Layout customStyles={styles.customLayoutPadding}>
      <div css={styles.textContentContainer}>
        <p css={styles.bottomSpacing(24)}>
          All delegates, speakers, sponsors and volunteers at any fayetteville.js event are required
          to agree with the following code of conduct. Organizers will enforce this code throughout
          the event.
        </p>

        <h3 css={styles.h3}>tl;dr:</h3>
        <p css={styles.bottomSpacing(24)}>
          fayetteville.js is dedicated to providing a harassment-free experience for everyone,
          regardless of gender, gender identity and expression, age, sexual orientation, disability,
          physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology
          choices. We do not tolerate harassment of event attendees in any form. Sexual language and
          imagery is not appropriate for any event venue, including talks, workshops, parties,
          Twitter and other online media. Event participants violating these rules may be sanctioned
          or expelled from the event at the discretion of the group organizers.
        </p>

        <h3 css={styles.h3}>The Details:</h3>
        <p css={styles.bottomSpacing(24)}>
          Harassment includes offensive verbal comments related to gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance, body size, race,
          ethnicity, religion, technology choices, sexual images in public spaces, deliberate
          intimidation, stalking, following, harassing photography or recording, sustained
          disruption of talks or other events, inappropriate physical contact, and unwelcome sexual
          attention.
        </p>

        <p css={styles.bottomSpacing(24)}>
          Participants asked to stop any harassing behavior are expected to comply immediately.
        </p>

        <p css={styles.bottomSpacing(24)}>
          Sponsors are also subject to the anti-harassment policy. In particular, sponsors should
          not use sexualized images, activities, or other material.
        </p>

        <p css={styles.bottomSpacing(24)}>
          If a participant engages in harassing behavior, the conference organizers may take any
          action they deem appropriate, including warning the offender or expulsion from the
          conference with no refund.
        </p>

        <p css={styles.bottomSpacing(24)}>
          If you are being harassed, notice that someone else is being harassed, or have any other
          concerns, please contact the organizer immediately.
        </p>

        <p css={styles.bottomSpacing(40)}>
          We value your attendance. <Heart />
        </p>

        <p css={{ fontSize: 10, paddingBottom: 32 }}>
          This Code of Conduct is an adaptation of the{' '}
          <a css={styles.link} href="https://jsconf.com/codeofconduct.html">
            JSConf Code of Conduct.
          </a>{' '}
        </p>
      </div>
    </Layout>
  </Fragment>
);

export default CodeOfConduct;
