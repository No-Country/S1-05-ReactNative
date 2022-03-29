import AppNavigations from "./src/navigations/AppNavigations";
import LoginScreen from './src/login/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store.js';

export default function App() {
  return (
    // <AppNavigations />
    <Provider store={store}>
      <AppNavigations />
    </Provider>
  );
}
