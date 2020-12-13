/** @jsx jsx */
import { jsx } from '@emotion/react';
import Content from '../Content';
import { Description, Title } from './styles';

const About = () => (
  <Content>
    <Title>BBConf</Title>
    <Description>
      BBConf는 알고리즘을 공부하던 학생들이 각자 배운 기술적 지식을 공유하기 위해 시작한 소규모 비영리 컨퍼런스입니다.
      기술적 지식이라면 분야와 프로그래밍 언어 등에 대한 제한없이 공유할 수 있는 자리입니다.
    </Description>

    <Title>Goal</Title>
    <Description>
      BBConf의 목적은 미래의 개발자와 다양한 분야에서 일하고 있는 주니어 개발자들이 자유롭게 기술적인 이야기를 할 수 있는 공간이 되는 것입니다.
    </Description>
  </Content>
);

export default About;
