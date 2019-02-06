import * as React from 'react';
import Head from './components/head';

import ShutdownNotice from './components/shutdown-notice';
import HeaderLogo from './components/header-logo';
import HeaderBanner from './components/header-banner';
import HeaderLoginButton from './components/header-login-button';

import HowItWorks from './components/how-it-works';
import UsedBy from './components/used-by';
import OpenSource from './components/open-source';
import SponsoredBy from './components/sponsored-by';

import Footer from './components/footer';

export default <html>
  <Head />
  <body>
    <ShutdownNotice />
    <HeaderLogo />
    <HeaderBanner />
    <HeaderLoginButton />

    <HowItWorks />
    <UsedBy />
    <OpenSource />
    <SponsoredBy />

    <Footer />

    {/* In production, provide analytics */}
    <script src="https://cdn.ravenjs.com/3.17.0/raven.min.js" crossorigin="anonymous"></script>
    <script src="/assets/scripts/analytics.js"></script>
  </body>
</html>;
