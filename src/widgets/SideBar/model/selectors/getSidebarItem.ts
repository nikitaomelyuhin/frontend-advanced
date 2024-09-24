import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/SidebarItems';
import { AppRoutes, RoutePath } from '@/shared/constants/router';

import SvgHome from '@/shared/assets/icons/home.svg';
import SvgAbout from '@/shared/assets/icons/about.svg';
import SvgProfile from '@/shared/assets/icons/profile.svg';
import SvgArticles from '@/shared/assets/icons/articles.svg';

export const getSidebarItem = createSelector(
  getUserAuthData,
  (userAuthData) => {
    const sideBarItems: SidebarItemType[] = [
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

    ];
    if (userAuthData) {
      sideBarItems.push(
        {
          to: `/${AppRoutes.PROFILE}/${userAuthData.id}`,
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
      );
    }

    return sideBarItems;
  },
);
