/** @jsx jsx */
import { jsx } from '@emotion/react';
import Content from '../Content';
import SessionItem from '../Session';
import { SessionInfo } from '../../contants/types';

const Sessions = () => {
  const sessionInfos: SessionInfo[] = [
    {
      time: '13:00 ~ 13:30',
      title: '중심인물과 펭귄결합',
      speaker: '헛소리꾼/백준푸는방',
    },
    {
      time: '13:35 ~ 14:00',
      title: '이것이 1코노바이트다',
      speaker: '계산기/백준/9813',
    },
    {
      time: ' 14:45 ~ 18:00',
      title: '스타트업 아포칼립스',
      speaker: '익명',
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
        />
      ))}
    </Content>
  );
};

export default Sessions;
