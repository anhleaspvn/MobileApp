// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //baseUrl: 'http://localhost:59624/api', // Sử dụng test local Visual Studio
  //resourceUrl: 'http://localhost:59624/resources/file',  
  baseUrl: 'https://api1.airspeedmfg.com.vn:449/api',
  resourceUrl: 'https://api1.airspeedmfg.com.vn:449/resources/file', 
  //baseUrl: 'http://192.168.10.2/api', // Sử dụng test local Visual Studio
  //resourceUrl: 'http://192.168.10.2/resources/file',  

  token: {
    key: 'l_at'
  },
  storage: {
    dataCode: 'd_code',
    softwareId: 'l_sw'
  },
  baseColor: '#2196f2',
  mapApiKey: 'AIzaSyCwhBrALKTDSdaKSwo9fbp4htPzkvjWuxA'
};
//  * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
//  */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
