// import App from './App';

// // Expo handles the registration automatically, so no need for AppRegistry.registerComponent
// export default App;

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import { useWeb } from 'react-native-web';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.runApplication(appName, {
//   initialProps: {},
//   rootTag: document.getElementById('app-root'),
// });
