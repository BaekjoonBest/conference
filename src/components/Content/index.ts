import styled from '@emotion/styled';
import { breakpoints, media } from '../../utils/responsive';

const Content = styled.section`
  word-break: keep-all;

  margin: 0 auto;
  padding-top: 100px;
  ${media.greaterThan(breakpoints.medium)} {
    padding-top: 130px;
    max-width: 1024px;
  }
`;

export default Content;
