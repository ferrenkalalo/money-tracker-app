// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import SplashScreen from './pages/SplashScreen';

// const App = () => {
//   return (
//     <View>
//       <SplashScreen />
//       {/* <Text>hallo</Text> */}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {SignIn, SplashScreen} from './pages';
import Routers from './routers';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      {/* <SignIn /> */}
      <Routers />
    </NavigationContainer>
  );
};

export default App;
