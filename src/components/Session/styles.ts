import styled from '@emotion/styled';

export const Item = styled.div`
  width: 100%;
  border-bottom: 2px solid #77777777;
  padding-bottom: 0.5rem;
  margin: auto 0 1rem 0;
`;

export const SessionInfo = styled.span`
  margin-bottom: 2rem;
  color: #4e4e4e;
  font-size: 1.25em;
  padding: 23px 98px 21px 20px;
  `;

export const Title = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 750px;
`;

export const Speaker = styled.span`
    overflow: hidden;
    margin-left: 20px;
    color: #aaa;
    font-family: 'PingFang SC', 'Microsoft YaHei', 'AvenirNext-Regular', 'NanumSquareRegular';
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Time = styled.span`
  width: 80px;
  font-size: 1.0em;
  padding: 0 0 0 19px;
  margin-bottom: 4px;
  color: #aaa;
`;
