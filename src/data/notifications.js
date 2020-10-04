import {faFileUpload, faTrash, faSync} from '@fortawesome/free-solid-svg-icons';

export const notificationsData = [
  {
    variant: 'info',
    cardTitle: 'File Updated',
    cardDescription: 'Your file has been successfully uploaded.',
    cardTime: '1 day',
    circleSize: 30,
    iconSize: 12,
    icon: faFileUpload,
    onPress: () => console.warn('1'),
  },
  {
    variant: 'error',
    cardTitle: 'File Deleted',
    cardDescription: 'Your file has been successfuly deleted.',
    cardTime: '1 day',
    circleSize: 30,
    iconSize: 12,
    icon: faTrash,
    onPress: () => console.warn('2'),
  },
  {
    variant: 'alert',
    cardTitle: 'Papssword Reset',
    cardDescription: 'Your password has been restored successfuly.',
    cardTime: '1 day',
    circleSize: 30,
    iconSize: 12,
    icon: faSync,
    onPress: () => console.warn('3'),
  },
];
