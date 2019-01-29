var path = require('path');
var VisualRegressionCompare = require('wdio-visual-regression-service/compare');

function getScreenshotName(basePath) {
    return function(context) {
        var type = context.type;
        var testName = context.test.title;
        var browserVersion = parseInt(context.browser.version, 10);
        var browserName = context.browser.name;
  
        return path.join(basePath, `${testName}_${type}_${browserName}_v${browserVersion}.png`);
    };
}

exports.config = {
    port: 4723,

    // Note:
    // When you want to run a single test file for debug,
    // please use `.only()` method in mocha APIs.
    // Please search below page with '.only' word.
    //
    // https://mochajs.org/
    specs: [
        './test/android/specs/**/*.js'
    ],

    // Note:
    // You can run specific suite
    suites: {
    },

    exclude: [
    // 'path/to/excluded/files'
    ],

    // Note:
    // We need to execute E2E test script one by one because only one simplator
    // can exist in one local machine for iOS.
    maxInstances: 1,

    capabilities: [{
        appiumVersion: '1.9.1',
        platformName: 'Android',
        platformVersion: '9',
        deviceName: 'Android Emulator',
        automationName: "UiAutomator2",
        browserName: 'Chrome',
        chromedriverExecutable: '/Users/matejskrlep/Documents/Projects/celtra/chromedriver',
        autoGrantPermissions: true
    }],
    sync: true,

    logLevel: 'verbose',

    coloredLogs: true,

    screenshotPath: './errorShots/',

    baseUrl: 'http://localhost',

    waitforTimeout: 1000000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        fullTrace: true,
        timeout:100000
    },
    services: [
        'visual-regression'
    ],
    visualRegression: {
        compare: new VisualRegressionCompare.LocalCompare({
            referenceName: getScreenshotName(path.join(process.cwd(), 'screenshots/reference')),
            screenshotName: getScreenshotName(path.join(process.cwd(), 'screenshots/taken')),
            diffName: getScreenshotName(path.join(process.cwd(), 'screenshots/diff')),
        }),
        orientations: ['portrait'],
    },
};
