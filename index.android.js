import React from 'react-native';

const FirebaseAzureLogin = React.NativeModules.FirebaseAzureLogin;

export default {
  firebaseAzureLogin: (onSuccess, onFailure) => {
    return FirebaseAzureLogin.firebaseAzureLogin(onSuccess, onFailure);
  },
};
