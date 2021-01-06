/** @jsx jsx */
import { jsx } from '@emotion/react';
import Content from '../Content';
import SessionItem from '../Session';
import { SessionInfo } from '../../contants/types';

const Sessions = () => {
  const sessionInfos: SessionInfo[] = [
    {
      time: 'HH:MM ~ HH:MM',
      title: '이것은 테스트 타이틀1',
      speaker: '이것은/테스트/발표자/정보',
      description: '이것은 아직 구현되지 않은 발표 설명',
    },
    {
      time: 'HH:MM ~ HH:MM',
      title: '이것은 테스트 타이틀2',
      speaker: '이것은/테스트/발표자/정보',
      description: '이것은 아직 구현되지 않은 발표 설명',
    },
    {
      time: 'HH:MM ~ HH:MM',
      title: '이것은 테스트 타이틀3',
      speaker: '이것은/테스트/발표자/정보',
      description: '이것은 아직 구현되지 않은 발표 설명',
    },
  ];

  return (
    <Content>
      {sessionInfos.map((item) => (
        <SessionItem
          key={item.title}
          time={item.time}
          title={item.title}
          speaker={item.speaker}
          description={item.description}
        />
      ))}
    </Content>
  );
};

export default Sessions;
