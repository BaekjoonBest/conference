import styled from '@emotion/styled';
import { media, breakpoints } from '../../utils/responsive';

export const Container = styled.header`
  position: absolute;
  top: 0;
  z-index: 1;

  display: none;
  justify-content: center;
  background: linear-gradient(90deg, #24A4EA, #379DEB 25%, #B76BF0);
  width: 100%;
  padding: 0.5rem 1rem;

  text-align: center;

  ${media.greaterThan(breakpoints.small)} {
    display: flex;
    width: 100%;
    padding: 0.5rem 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
  ${media.greaterThan(breakpoints.large)} {
    max-width: 1024px;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Logo = styled.a`
  color: #ffffff;
  font-weight: bold;
  font-size: 2em;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

export const Navigation = styled.nav`
  display: none;

  font-family: Roboto Mono, -apple-system, BlinkMacSystemFont, sans-serif;

  ${media.greaterThan(breakpoints.small)} {
    display: flex;
    flex: 1 0 100%;
    gap: 2rem;
    justify-content: center;
    padding: 1rem;
  }
`;

export const NavigationItem = styled.a`
  color: #fff;
  font-size: 1.125em;
  text-decoration: none;
`;
