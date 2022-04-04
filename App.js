import AppNavigations from "./src/navigations/AppNavigations";
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store.js';
//import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {  } from 'expo-google-sign-in';

// GoogleSignin.configure({
//   webClientId: "700011416699-aef7jb1ieqbcdgv9r51v29ra437tne2c.apps.googleusercontent.com",
//   iosClientId: "700011416699-7kk37n52lf9qqlmjtgke58jhp8idchhp.apps.googleusercontent.com",
// });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigations />
    </Provider>
  );
}
