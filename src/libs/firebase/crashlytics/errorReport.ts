import crashlytics from '@react-native-firebase/crashlytics';

export const crashlyticsErrorReports = (error: any) => {
  crashlytics().recordError(error);
};
