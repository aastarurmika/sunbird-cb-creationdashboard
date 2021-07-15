// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment: IEnvironment = {
  production: false,
  sitePath: (window as { [key: string]: any })['env']['apiUrl'] || 'default', // 'cbc_3000',
  karmYogiPath: (window as { [key: string]: any })['env']['apiUrl'] || '',
  cbpPath: (window as { [key: string]: any })['env']['apiUrl'] || '',
}
interface IEnvironment {
  production: boolean
  sitePath: null | string
  karmYogiPath: string
  cbpPath: string
}

/*
 * For easier debugging in development mode, you can import the    file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error' // Included with Angular CLI.x
