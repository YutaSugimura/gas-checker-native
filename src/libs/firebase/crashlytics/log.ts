import crashlytics from '@react-native-firebase/crashlytics';

export const crashlyticsLog = (text: string) => {
  crashlytics().log(text);
};
