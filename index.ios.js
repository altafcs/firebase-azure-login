import React from 'react-native';

const FirebaseAzureLogin = React.NativeModules.FirebaseAzureLogin;

export default {
  firebaseAzureLogin: () => {
    return FirebaseAzureLogin.firebaseAzureLogin();
  },
};
