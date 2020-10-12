import {createTheme} from '@shopify/restyle';

const palette = {
  skyblue: '#7BDFF2',
  celeste: '#B2F7EF',
  mintCream: '#EFF7F6',
  piggyPink: '#F7D6E0',
  cottonCandy: '#F2B5D4',
  white: 'white',
  whiteFade: '#2686FF',
  black: 'black',
  blue: '#0071FF',
  red: '#FF3A41',
  redFade: '#FF6167',
  redDegraded: '#FEEDE8',
  blueDegraded: '#E2EDFC',
  orange: '#F38C15',
  orangeFade: '#F5A447',
  orangeDegraded: '#FCEAD5',
  calmWhiteBlue: '#EFF6FF',
  vanishGray: '#B6B6B6',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.calmWhiteBlue,
    cardPrimaryBackground: palette.celeste,
    cardSuccesBackground: palette.blue,
    cardBackground: palette.white,
    notificationInfoWhiteFade: palette.whiteFade,
    notificationErrorRedFade: palette.redFade,
    notificationOrangeFade: palette.orangeFade,
    primaryText: palette.white,
    cardSecondaryBrackground: palette.cottonCandy,
    cardSelected: palette.piggyPink,
    notificationErrorBackground: palette.red,
    notificationAlertBackground: palette.orange,
    notificationBodyVariantTextColor: palette.vanishGray,
    notificationSimpleInfoFade: palette.blueDegraded,
    notificationSimpleErrorFade: palette.redDegraded,
    notificationSimpleOrangeFade: palette.orangeDegraded,
    black: 'black',
    white: 'white',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    browseCardLabelTitle: {
      fontWeight: 'bold',
      fontSize: 13,
      color: 'primaryText',
    },
    browseCardLabel: {
      fontSize: 11,
      lineHeight: 18,
      color: 'primaryText',
    },
    simpleCardLabelTitle: {
      fontWeight: 'bold',
      fontSize: 13,
      color: 'black',
    },
    simpleCardLabel: {
      fontSize: 11,
      lineHeight: 18,
      color: 'notificationBodyVariantTextColor',
    },
  },
  border: {
    default: 12,
  },
  browseCardVariants: {
    defaults: {
      width: 300,
      height: 90,
      borderRadius: 5,
      backgroundColor: 'cardPrimaryBackground',
    },
    info: {
      width: 350,
      height: 90,
      backgroundColor: 'cardSuccesBackground',
      borderRadius: 10,
    },
    alert: {
      width: 350,
      height: 90,
      backgroundColor: 'notificationAlertBackground',
      borderRadius: 10,
    },
    error: {
      width: 350,
      height: 90,
      backgroundColor: 'notificationErrorBackground',
      borderRadius: 10,
    },
    simple: {
      width: 350,
      height: 90,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    simpleAlert: {
      width: 350,
      height: 90,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    simpleError: {
      width: 350,
      height: 90,
      backgroundColor: 'white',
      borderRadius: 10,
    },
  },
  notificationHeaderVariants: {
    defaults: {
      backgroundColor: 'notificationInfoWhiteFade',
    },
    info: {
      height: 30, // move shared values to parent root object.
      width: 30,
      size: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'notificationInfoWhiteFade',
    },
    alert: {
      height: 30,
      width: 30,
      size: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'notificationOrangeFade',
    },
    error: {
      height: 30,
      width: 30,
      size: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'notificationErrorRedFade',
    },
    simple: {
      height: 30,
      width: 30,
      size: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'notificationSimpleInfoFade',
    },
    simpleAlert: {
      height: 30,
      width: 30,
      size: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'notificationSimpleOrangeFade',
    },
    simpleError: {
      height: 30,
      width: 30,
      size: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'notificationSimpleErrorFade',
    },
  },
  bottomTabNavigatorStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'mainBackground',
  },
  bottomTabNavigatorTextStyle: {
    fontSize: 15,
  },
  // @TODO: redefine breakpoint on future work
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export default theme;
