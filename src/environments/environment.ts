// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5001/humanitarian-making-test-abb29/us-central1/api/v1/',
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYWRtaW4taHVtYW5pdGFyaWFuLW1ha2luZyIsImEiOiJjazkxY3p2dDcwMnU4M2dwYXV6NG5xY3FvIn0.oRelXCGLzlFFlwOfASPqIw'
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

