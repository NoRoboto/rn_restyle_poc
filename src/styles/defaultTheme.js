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
  orange: '#F38C15',
  orangeFade: '#F5A447',
  calmWhiteBlue: '#EFF6FF',
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
    black: 'black',
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
    elevated: {
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 15,
      elevation: 5,
      borderRadius: 10,
    },
  },
  notificationHeaderVariants: {
    defaults: {
      backgroundColor: 'notificationInfoWhiteFade',
    },
    info: {
      backgroundColor: 'notificationInfoWhiteFade',
    },
    alert: {
      backgroundColor: 'notificationOrangeFade',
    },
    error: {
      backgroundColor: 'notificationErrorRedFade',
    },
  },
  // @TODO: redefine breakpoint on future work
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export default theme;
