import {faFileUpload, faTrash, faSync} from '@fortawesome/free-solid-svg-icons';

export const notificationsData = [
  {
    variant: 'info',
    cardTitle: 'File Updated',
    cardDescription: 'Your file has been successfully uploaded.',
    cardTime: '1 day',
    iconProps: {icon: faFileUpload, color: 'white', iconSize: 12},
    textVariants: {title: 'browseCardLabelTitle', body: 'browseCardLabel'},
    circleProps: {circleSize: 30, variant: 'info'},
    onPress: () => console.warn('1'),
  },
  {
    variant: 'error',
    cardTitle: 'File Deleted',
    cardDescription: 'Your file has been successfuly deleted.',
    cardTime: '1 day',
    iconProps: {icon: faTrash, color: 'white', iconSize: 12},
    textVariants: {title: 'browseCardLabelTitle', body: 'browseCardLabel'},
    circleProps: {circleSize: 30, variant: 'error'},
    onPress: () => console.warn('2'),
  },
  {
    variant: 'alert',
    cardTitle: 'Papssword Reset',
    cardDescription: 'Your password has been restored successfuly.',
    cardTime: '1 day',
    iconProps: {icon: faSync, color: 'white', iconSize: 12},
    textVariants: {title: 'browseCardLabelTitle', body: 'browseCardLabel'},
    circleProps: {circleSize: 30, variant: 'alert'},
    onPress: () => console.warn('3'),
  },
];

export const simpleNotificationsData = [
  {
    variant: 'simple',
    cardTitle: 'File Updated',
    cardDescription: 'Your file has been successfully uploaded.',
    cardTime: '1 day',
    iconProps: {
      icon: faFileUpload,
      color: 'notificationInfoWhiteFade',
      iconSize: 13,
    }, //restyle theme object map
    textVariants: {title: 'simpleCardLabelTitle', body: 'simpleCardLabel'},
    circleProps: {circleSize: 30, variant: 'simple'},
    onPress: () => console.warn('1'),
  },
  {
    variant: 'simple',
    cardTitle: 'File Deleted',
    cardDescription: 'Your file has been successfuly deleted.',
    cardTime: '1 day',
    iconProps: {
      icon: faTrash,
      color: 'notificationAlertBackground',
      iconSize: 12,
    },
    textVariants: {title: 'simpleCardLabelTitle', body: 'simpleCardLabel'},
    circleProps: {circleSize: 30, variant: 'simpleAlert'},
    onPress: () => console.warn('2'),
  },
  {
    variant: 'simple',
    cardTitle: 'Password Reset',
    cardDescription: 'Your password has been restored successfuly.',
    cardTime: '1 day',
    iconProps: {
      icon: faSync,
      color: 'notificationErrorBackground',
      iconSize: 12,
    },
    textVariants: {title: 'simpleCardLabelTitle', body: 'simpleCardLabel'},
    circleProps: {circleSize: 30, variant: 'simpleError'},
    onPress: () => console.warn('3'),
  },
];

export const simpleNotificationsImageData = [
  {
    variant: 'simple',
    cardTitle: 'Jenny Osxal',
    cardDescription:
      'Please find attached .XD file with the document containing the ...',
    cardTime: '1 hour',
    iconProps: {
      color: 'notificationInfoWhiteFade',
      iconSize: 13,
      image:
        'https://cdn.pixabay.com/photo/2014/05/03/00/50/flower-child-336658_960_720.jpg',
    }, //restyle theme object map
    textVariants: {title: 'simpleCardLabelTitle', body: 'simpleCardLabel'},
    circleProps: {circleSize: 30, variant: 'simple'},
    onPress: () => console.warn('1'),
  },
  {
    variant: 'simple',
    cardTitle: 'Camila something',
    cardDescription:
      'Hey can you check the latest documents regarding notifications?',
    cardTime: '30 mins',
    iconProps: {
      color: 'notificationAlertBackground',
      iconSize: 12,
      image:
        'https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_960_720.jpg',
    },
    textVariants: {title: 'simpleCardLabelTitle', body: 'simpleCardLabel'},
    circleProps: {circleSize: 30, variant: 'simpleAlert'},
    onPress: () => console.warn('2'),
  },
];
