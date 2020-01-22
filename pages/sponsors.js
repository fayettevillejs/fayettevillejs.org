import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import RevUnitLogo from '../public/logos/revunit.svg';
import DrawbridgeLogo from '../public/logos/drawbridge.svg';
import RichContextLogo from '../public/logos/rich-context.svg';
import * as styles from './pages.styles';
import { Fragment } from 'react';

const SponsorLogo = ({ component, url, customStyles }) => {
  return (
    <a href={url} css={{ cursor: 'pointer' }}>
      <div css={[styles.logo, customStyles]}>{component}</div>
    </a>
  );
};

const Sponsors = () => {
  const router = useRouter();

  return (
    <Layout>
      <div css={[styles.textContentContainer, styles.sponsorLayout]}>
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
        <div css={styles.supportButtonLayout}>
          <Button fullWidth text="sponsor" onClick={() => router.push('/sponsorship')} />
        </div>
      </div>
    </Layout>
  );
};

export default Sponsors;
