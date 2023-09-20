/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import React from 'react';
import Model from './components/model/Model';
import CurrentDate from './components/model/CurrentDate';
const App = () => {
  return (
    <>
      <CurrentDate/>
      <Model style={{flex: 1}} />

    </>
  );
};

export default App;
