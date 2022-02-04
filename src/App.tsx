/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import Navigation from './navigation';
import {crashlyticsLog} from './libs/firebase/crashlytics/log';

const App: React.VFC = () => {
  useEffect(() => {
    crashlyticsLog('App mounted.');
  }, []);

  return <Navigation />;
};

export default App;
