/** @jsx jsx */
import { jsx } from '@emotion/react';
import Content from '../Content';
import SessionItem from '../Session';
import { SessionInfo } from '../../contants/types';

const Sessions = () => {
  const sessionInfos: SessionInfo[] = [
    {
      sessionNumber: 'Session 1',
      title: '나의 산업기능요원 후기',
      speaker: '박인서 / 중앙대학교',
    },
    {
      sessionNumber: 'Session 2',
      title: '레거시 길들이기',
      speaker: '98',
    },
    {
      sessionNumber: 'Session 3',
      title: '가볍게 배워보는 SIMD 입문',
      speaker: '박다원 / 넥슨',
    },
    {
      sessionNumber: 'Session 4',
      title: '당신의 머신러닝 프로젝트를 잘하기',
      speaker: '김준우',
    },
    {
      sessionNumber: 'Session 5',
      title: '카카오 입사 후기',
      speaker: 'Yun / Kakao Corp.',
    },
  ];

  return (
    <Content>
      {sessionInfos.map((item) => (
        <SessionItem
          key={item.title}
          sessionNumber={item.sessionNumber}
          title={item.title}
          speaker={item.speaker}
        />
      ))}
    </Content>
  );
};

export default Sessions;
