### WebdriverIO code with Jasmine BDD

This setup contains a webdriverIO project for Test Automation of imdb site and libraries that demonstrate how to use the tool and develop automation script using the Jasmine BDD framework. It support ES6, ES8 (via babel-register) and uses Grunt to manage tasks. It generate Spec, JUNIT, Allure reporters as well.




### Installation

`JDK 1.8+:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally. Recommended version is 8.10.0. OR  If you have nvm installed globally, you run `nvm install` to get the latest version of node specified in the`.nvmrc` file [here](/.nvmrc).  If you don't use nvm, be sure that you are using a compatible version. Further details on nvm can be found on the official [github page](https://github.com/creationix/nvm). MAC OSX users are best suited to install nvm with homebrew `brew install nvm`.



If above are already available on your machine:

Clone project from following repo: https://github.com/zeeshankhalid8/Malware-Bytes using git clone https://github.com/zeeshankhalid8/Malware-Bytes command.
Run `npm install` command in terminal of project folder, to grab all dependencies.


To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install the following globally:

  `npm install -g  grunt-cli`

### Selenium Tests

  To run your test you must have selenium server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` in the .conf.js.  That's all there is to it.!.

### Run Some Sample Tests

To execute the entire test suite, you can use the command mentioned below

Command: `npm run test`


### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files are found in the `/test/config/` directory and all end with `*.conf.js`.  These can be called via the the cli

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

##### Dot

To use the dot reporter just add 'dot' to the reporters array in the config file. The dot reporter prints for each test spec a dot. If colors are enabled on your machine you will see three different colors for dots. Yellow dots mean that at least one browser has executed that spec. A green dot means all browser passed that spec and a red to means that at least one browser failed that spec. All config files have this turned on by default. This one is not used in this project.

##### Spec

Test reporter, that prints detailed results to console.

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.  Please note, this has been added in .config.

Open terminal in project directory and install yarn with following command: `brew install yarn`. This would be used to generate allure reports.

To generate and view an allure report locally, run `npm run allure:generate` and then `npm run allure:open` commands. These scripts are written in package.json file.


##### junit/xunit

A WebdriverIO reporter that creates Jenkins compatible XML based JUnit reports. Add it to the reports array in the config file and define the directory where the xml files should get stored. webdriverIO will create an xml file for each instance under test and the filename will contain the browser and OS. Please note, this has been added in .config.

To generate and view an junit/xunit report locally, run `npm run junit-report`. This script is written in package.json file