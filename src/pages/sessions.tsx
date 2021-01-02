/** @jsx jsx */
import { jsx } from '@emotion/react';
import Header from '../components/Header';
import Sessions from '../components/Sessions';
import Layout from '../components/Layout';

const SessionsPage = () => (
  <Layout>
    <Header />
    <Sessions />
  </Layout>
);

export default SessionsPage;
