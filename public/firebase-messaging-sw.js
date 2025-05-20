importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAQdvOCfB1Pc3c87nnk_rtrQ5BwlZBF9zA",
  authDomain: "gather-gram.firebaseapp.com",
  projectId: "gather-gram",
  storageBucket: "gather-gram.firebasestorage.app",
  messagingSenderId: "982262123404",
  appId: "1:982262123404:web:c5760404d650c1bf6064a9",
  measurementId: "G-MWS4EYJY4F"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

onMessage(messaging, (payload) => {
  console.log("Message received: ", payload);
  callback(payload); // Invoke the callback with the received payload
});


export default messaging;
