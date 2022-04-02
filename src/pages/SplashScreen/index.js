// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Logo from '../../assets/icons/Logo.png';

// const SplashScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Logo />
//       <Text style={styles.text}>SplashScreen</Text>
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#02CF8E',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 32,
//     fontFamily: 'Poppins-Regular',
//     fontWeight: '500',
//     alignItems: 'center',
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02EF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
