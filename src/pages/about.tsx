/** @jsx jsx */
import { jsx } from '@emotion/react';
import Header from '../components/Header';
import About from '../components/About';
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout>
    <Header />
    <About />
  </Layout>
);

export default AboutPage;
