import type { HeaderMenuItem } from '../types/navigation.ts';

export const PATH = {
  ROOT: '/',
  MENU: '/menu',
  ABOUT_US: '/about-us',
  GALLERY: '/gallery',
  REVIEWS: '/reviews',
  BLOG: '/blog',
  FAQ: '/faq',
  CONTACTS: '/contacts',
};

export const HEADER_MENU: HeaderMenuItem[] = [
  { title: 'Меню', src: PATH.MENU },
  { title: 'Про нас', src: PATH.ABOUT_US },
  { title: 'Галерея', src: PATH.GALLERY },
  { title: 'Відгуки', src: PATH.REVIEWS },
  { title: 'Блог', src: PATH.BLOG },
  { title: 'Часті питання', src: PATH.FAQ },
  { title: 'Контакти', src: PATH.CONTACTS },
];
