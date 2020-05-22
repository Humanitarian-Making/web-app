// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://us-central1-humanitarian-making-test-abb29.cloudfunctions.net/api/v1/',
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYWRtaW4taHVtYW5pdGFyaWFuLW1ha2luZyIsImEiOiJjazkxY3ozemQwMXNlM2xwbDNwZWpiNmlnIn0.3z2mttbszjIsVOr7CVld2w'
  },
  firebase: {
    apiKey: 'AIzaSyD7NveTz9RqC-vXrhIZpN8Ku5lPDMkTMQM',
    authDomain: 'humanitarian-making-test-abb29.firebaseapp.com',
    databaseURL: 'https://humanitarian-making-test-abb29.firebaseio.com',
    projectId: 'humanitarian-making-test-abb29',
    storageBucket: 'humanitarian-making-test-abb29.appspot.com',
    messagingSenderId: '1076225681578',
    appId: '1:1076225681578:web:75c2755d6790a35c1808d3',
    measurementId: 'G-E6YW0BV0JC'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
