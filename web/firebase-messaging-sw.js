importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: "AIzaSyAorS6tKySWhsP4ZYmVhYA1Bfg6_Z_vKXg",
    authDomain: "flutter-dasd-tes-fec9d.firebaseapp.com",
    projectId: "fir- demo - c677e",
    storageBucket: "flutter-dsd-tes-fec9d.dasda.com",
    messagingSenderId: "326532949124",
    appId: "1:326532949124:android:bbb7b977be81f9c9eb0ed1",
    measurementId: "G-dsada"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});