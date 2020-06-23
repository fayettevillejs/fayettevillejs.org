import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import RevUnitLogo from '../public/logos/revunit.svg';
import DrawbridgeLogo from '../public/logos/drawbridge.svg';
import TeslarLogo from '../public/logos/teslar.svg';
import RichContextLogo from '../public/logos/rich-context.svg';
import FontAwesome from '../public/logos/font-awesome.svg';
import NwaTechFest from '../public/logos/nwa-tech-fest.svg';
import * as styles from '../styles/pages.styles';

const SponsorButton = ({ onClick }) => {
  return (
    <div css={styles.supportButtonLayout}>
      <Button fullWidth text="sponsor" onClick={onClick} />
    </div>
  );
};

const SponsorLogo = ({ component, url, customStyles }) => {
  return (
    <a href={url} css={{ cursor: 'pointer' }}>
      <div css={[styles.logo, customStyles]}>{component}</div>
    </a>
  );
};

const Sponsors = () => {
  const router = useRouter();
  const handleClick = () => router.push('/sponsorship');

  return (
    <Fragment>
      <Header />
      <Layout
        customStyles={styles.sponsorBottomMargin}
        bottomButton={<SponsorButton onClick={handleClick} />}
      >
        <div css={[styles.textContentContainer, styles.sponsorLayout]}>
          <div css={{ maxWidth: 400, margin: '0 auto' }}>
            <a href="https://hirelofty.com/" css={{ cursor: 'pointer' }}>
              <img src="/logos/lofty-white.png" css={[styles.logo, styles.loftyLogo]} />
            </a>

            <SponsorLogo component={<RevUnitLogo />} url="https://revunit.com/" />
            <SponsorLogo
              customStyles={{ paddingTop: 0 }}
              component={<DrawbridgeLogo />}
              url="https://drawbridgepartnersllc.com/"
            />
            <SponsorLogo component={<RichContextLogo />} url="https://www.richcontext.com/" />
            <SponsorLogo component={<TeslarLogo />} url="https://www.teslarsoftware.com/" />
            <a href="https://gdhconsulting.com/" css={{ cursor: 'pointer' }}>
              <img
                src="/logos/gdh-white.png"
                css={[styles.logo, { height: 140, display: 'block', margin: '0 auto' }]}
              />
            </a>
            <SponsorLogo component={<FontAwesome />} url="https://fontawesome.com/" />
            <SponsorLogo component={<NwaTechFest />} url="https://nwatechfest.org/" />
            <a href="https://frontendmasters.com/" css={{ cursor: 'pointer' }}>
              <img src="/logos/fem-dark.png" css={[styles.logo, styles.femLogo]} />
            </a>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Sponsors;
