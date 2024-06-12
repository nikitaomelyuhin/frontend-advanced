import { AppRoutes, RoutePath } from '@/shared/constants/router';
import SvgHome from '@/shared/assets/icons/home.svg';
import SvgAbout from '@/shared/assets/icons/about.svg';
import SvgProfile from '@/shared/assets/icons/profile.svg';
export var sideBarItems = [
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
        Icon: SvgProfile,
    },
];
