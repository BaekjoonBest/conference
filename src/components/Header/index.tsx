/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import {
  Container, Logo, Navigation, NavigationItem, Item, Wrapper,
} from './styles';
import { MenuItem } from '../../contants/types';

const Header = () => {
// const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      href: '/sessions',
      text: 'Sessions',
    },
    {
      href: '/archive',
      text: 'Archive',
    },
    {
      href: '/about',
      text: 'About',
      public: true,
    },
  ];

  const underConstruction = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();
    alert('추후에 공개됩니다!');
  };

  return (
    <Container>
      <Wrapper>
        <Item>
          <Logo href='/'>BBConf</Logo>
        </Item>
        <Item>
          <Navigation>
            {menuItems.map((item) => (
              <NavigationItem
                href={item.href}
                onClick={item.public ? undefined : underConstruction}
              >
                {item.text}
              </NavigationItem>
            ))}
          </Navigation>
        </Item>
      </Wrapper>
    </Container>
  );
};
export default Header;
