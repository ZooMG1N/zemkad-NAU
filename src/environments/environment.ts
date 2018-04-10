// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBlU3IED0R-PIJeIWxBDCKfRzOe9z6Hxlk',
    authDomain: 'conference-b09c2.firebaseapp.com',
    databaseURL: 'https://conference-b09c2.firebaseio.com',
    projectId: 'conference-b09c2',
    storageBucket: 'conference-b09c2.appspot.com',
    messagingSenderId: '601107994565'
  }
};
