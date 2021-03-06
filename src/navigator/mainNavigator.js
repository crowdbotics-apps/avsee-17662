import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile56972Navigator from '../features/UserProfile56972/navigator';
import Tutorial56971Navigator from '../features/Tutorial56971/navigator';
import NotificationList56943Navigator from '../features/NotificationList56943/navigator';
import Settings56942Navigator from '../features/Settings56942/navigator';
import Settings56934Navigator from '../features/Settings56934/navigator';
import UserProfile56932Navigator from '../features/UserProfile56932/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile56972: { screen: UserProfile56972Navigator },
Tutorial56971: { screen: Tutorial56971Navigator },
NotificationList56943: { screen: NotificationList56943Navigator },
Settings56942: { screen: Settings56942Navigator },
Settings56934: { screen: Settings56934Navigator },
UserProfile56932: { screen: UserProfile56932Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
