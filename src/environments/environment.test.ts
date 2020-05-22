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
    apiKey: 'AIzaSyB4rh2DqTBhMFNZQb7Ip3_tW4yaa17JXWQ',
    authDomain: 'humanitarian-making-dev.firebaseapp.com',
    databaseURL: 'https://humanitarian-making-dev.firebaseio.com',
    projectId: 'humanitarian-making-dev',
    storageBucket: 'humanitarian-making-dev.appspot.com',
    messagingSenderId: '143323369544',
    appId: '1:143323369544:web:54ad6f5cc910fd9493087d',
    measurementId: 'G-HS74RDCSSZ'
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
