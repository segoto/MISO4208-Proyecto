/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const fs = require('fs');
var i = 1;
//const axiosScript = require('../../axiosScript');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  on('after:screenshot', (details) => {

        const newPath = './utils/mod_images/img'+i+'.png';
        i += 1;

        return new Promise((resolve, reject) => {
            // fs.rename moves the file to the existing directory 'new/path/to'
            // and renames the image to 'screenshot.png'
            fs.rename(details.path, newPath, (err) => {
                if (err) return reject(err)

                // because we renamed and moved the image, resolve with the new path
                // so it is accurate in the test results
                resolve({ path: newPath })
            })
        })
    });

    on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
            // in Chromium, preferences can exist in Local State, Preferences, or Secure Preferences
            // via launchOptions.preferences, these can be acccssed as `localState`, `default`, and `secureDefault`

            // for example, to set `somePreference: true` in Preferences:
            launchOptions.preferences.default.intl = {accept_languages: "es"}

            return launchOptions
        }

        if (browser.name === 'electron') {
            // launchOptions.preferences is a `BrowserWindow` `options` object
            //launchOptions.preferences = true

            return launchOptions
        }
    });

  /*on('task', {
        'getRegistrationData': () => {
            // CHANGED: return a promise so Cypress can wait for it
            return axiosScript.getRegistrationData();
        }
    })*/
}
