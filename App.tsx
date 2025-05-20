// src_v2/App.tsx

import React from "react";
import { AppIndex } from "./src_v1/root/index";  // Adjust according to your folder structure
// import { UserContextProvider } from './AppContext';  // Import the UserContextProvider

const App = () => {
  return (
    // <UserContextProvider>
      <AppIndex />
    // </UserContextProvider>
  );
};

// export default App;

// import React, { useState } from 'react';
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { persistor, store } from "./src/redux/store";
// import { Provider } from "react-redux";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { PersistGate } from "redux-persist/integration/react";
// import AppSetup from "./src/AppSetup";
// import { EventResponse } from './src/model/EventModel';
// import  {storageAPI}  from './src/util/storage';
// // import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { GoogleOAuthProvider } from "@react-oauth/google"
// import {
//   GOOGLE_WEB_CLIENT_ID
// } from '@env';

// const queryClient = new QueryClient();
// export const UserContext = React.createContext({});

// // GoogleSignin.configure({
// //   webClientId: GOOGLE_WEB_CLIENT_ID,
// //   // iosClientId: GOOGLE_IOS_CLIENT_ID,
// //   scopes: ['profile', 'email'],
// // });

// const App = () => {
//   const [event, setEvent] = useState<EventResponse | null>(storageAPI.getEvent());
//   const [attemptedLogin, setAttemptedLogin] = useState<any>({});
//   console.log("App.js")
//   // @ts-ignore
//   return (
//     <GoogleOAuthProvider clientId={GOOGLE_WEB_CLIENT_ID}>
//       <Provider store={store}>
//         <UserContext.Provider value={{ event, setEvent, attemptedLogin, setAttemptedLogin }}>
//           <PersistGate loading={null} persistor={persistor}>
//             <QueryClientProvider client={queryClient}>
//               <GestureHandlerRootView style={{ flex: 1 }}>
//                 <AppSetup />
//                 {/* <AppIndex/> */}
//               </GestureHandlerRootView>
//             </QueryClientProvider>
//           </PersistGate>
//         </UserContext.Provider>
//       </Provider>
//      </GoogleOAuthProvider>
//   );
// };


// const App = () => {
//   const [event, setEvent] = useState<EventResponse | null>(storageAPI.getEvent());
//   const [attemptedLogin, setAttemptedLogin] = useState<any>({});
//   console.log("App.js");

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <QueryClientProvider client={queryClient}>
//           <GestureHandlerRootView style={{ flex: 1 }}>
//             <AppSetup />
//           </GestureHandlerRootView>
//         </QueryClientProvider>
//       </PersistGate>
//     </Provider>
//   );
// };
// import React from 'react';
// import { View, Text } from 'react-native';

// const App = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Hello, World!</Text>
//     </View>
//   );
// };

// export default App;


export default App;
