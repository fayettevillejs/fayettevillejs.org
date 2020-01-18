import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import RevUnitLogo from '../public/logos/revunit.svg';
import RichContextLogo from '../public/logos/rich-context.svg';
import * as styles from './pages.styles';

const SponsorLogo = ({ component, url }) => {
  return (
    <a href={url} css={{ cursor: 'pointer' }}>
      <div css={styles.logo}>{component}</div>
    </a>
  );
};

const Sponsors = () => {
  const router = useRouter();

  return (
    <Layout>
      <div css={[styles.textContentContainer, styles.sponsorLayout]}>
        <a href="https://hirelofty.com/" css={{ cursor: 'pointer' }}>
          <img
            src="/logos/lofty-white.png"
            css={[styles.logo, { height: 160, margin: '24px auto -16px auto', display: 'block' }]}
          />
        </a>

        <SponsorLogo component={<RevUnitLogo />} url="https://revunit.com/" />
        <SponsorLogo component={<RichContextLogo />} url="https://www.richcontext.com/" />
        <div css={styles.supportButtonLayout}>
          <Button fullWidth text="become a sponsor" onClick={() => router.push('/sponsorship')} />
        </div>
      </div>
    </Layout>
  );
};

export default Sponsors;
