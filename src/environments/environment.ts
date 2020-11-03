// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAxsYRMXek1fJDnQy6AonwWCjlOLY0cgvU',
    authDomain: 'opinion-app-706b3.firebaseapp.com',
    // authDomain: 'simple-chat-7c08d.web.app',
    databaseURL: 'https://opinion-app-706b3.firebaseio.com',
    projectId: 'opinion-app-706b3',
    storageBucket: 'opinion-app-706b3.appspot.com',
    messagingSenderId: '358805530541',
    appId: '1:358805530541:web:c32fd7e9e34edacecca324',
    measurementId: 'G-02THX4GY1V'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
