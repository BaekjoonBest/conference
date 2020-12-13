import styled from '@emotion/styled';
import { breakpoints, media } from '../../utils/responsive';

const Content = styled.section`
  word-break: keep-all;

  margin: 0 auto;
  ${media.greaterThan(breakpoints.large)} {
    max-width: 1024px;
    padding-top: 130px;
  }
`;

export default Content;
