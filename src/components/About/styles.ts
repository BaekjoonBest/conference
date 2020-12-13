import styled from '@emotion/styled';

export const Title = styled.h2`
  display: inline-block;
  margin-bottom: 2rem;
  padding-bottom: 1rem;

  color: #4e4e4e;
  font-size: 3em;

  &:after {
    display: block;
    width: 100%;
    height: 4px;
    content: '';
    background: #379DEB;
  }

  &:not(:first-child) {
    margin-top: 1em;
  }
`;

export const Description = styled.p`
  font-size: 1.75em;
`;
