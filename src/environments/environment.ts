// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyANBOtHBFu8_iK1V_2vtxtUbB6OaO6-fjQ',
    authDomain: 'meetup-pwa-2017.firebaseapp.com',
    databaseURL: 'https://meetup-pwa-2017.firebaseio.com',
    projectId: 'meetup-pwa-2017',
    storageBucket: '',
    messagingSenderId: '630429263101'
  }
};
