// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "",
    authDomain: "ng-us-pic.firebaseapp.com",
    databaseURL: "https://ng-us-pic.firebaseio.com"
    projectId: "ng-us-pic",
    storageBucket: "ng-us-pic.appspot.com",
    messagingSenderId: "67177299"
  }
};
