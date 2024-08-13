import React from 'react';
import { AppRoutes, RoutePath } from '@/shared/constants/router';
import SvgHome from '@/shared/assets/icons/home.svg';
import SvgAbout from '@/shared/assets/icons/about.svg';
import SvgProfile from '@/shared/assets/icons/profile.svg';
import SvgArticles from '@/shared/assets/icons/articles.svg';

export interface SidebarItemType {
  to: string;
  text: string;
  translationNs?: string;
  authOnly?: boolean;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const sideBarItems: SidebarItemType[] = [
  {
    to: RoutePath[AppRoutes.MAIN],
    text: 'Main page',
    Icon: SvgHome,
  },
  {
    to: RoutePath[AppRoutes.ABOUT],
    text: 'About page',
    translationNs: 'about',
    Icon: SvgAbout,
  },
  {
    to: RoutePath[AppRoutes.PROFILE],
    text: 'Profile',
    translationNs: 'profile',
    authOnly: true,
    Icon: SvgProfile,
  },
  {
    to: RoutePath[AppRoutes.ARTICLES],
    text: 'Articles',
    translationNs: 'articles',
    authOnly: true,
    Icon: SvgArticles,
  },
];
