/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Description, SessionInfo, Title, Speaker, Time, Item,
} from './styles';

const SessionItem = (props: any) => {
  const { time, title, speaker } = props;
  return (
    <Item>
      <Time>
        {' '}
        {time}
        {' '}
      </Time>
      <SessionInfo>
        <Title>
          {' '}
          {title}
          {' '}
        </Title>
        <Speaker>
          {speaker}
        </Speaker>
      </SessionInfo>
      <Description>
        {/* {description} */}
      </Description>
    </Item>
  );
};

export default SessionItem;
