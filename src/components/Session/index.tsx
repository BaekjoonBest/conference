/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  SessionInfo, Title, Speaker, SessionNumber, Item,
} from './styles';

const SessionItem = (props: any) => {
  const { sessionNumber, title, speaker } = props;
  return (
    <Item>
      <SessionNumber>
        {sessionNumber}
      </SessionNumber>
      <SessionInfo>
        <Title>
          {title}
        </Title>
        <Speaker>
          {speaker}
        </Speaker>
      </SessionInfo>
    </Item>
  );
};

export default SessionItem;
