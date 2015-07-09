// Core.
var CoreM = require('./core/core.m.js');

// Shared.
var UserM = require('./shared/user/user.m.js');

// Components.
var SliderM = require('./components/slider/slider.m.js');
var LoginRegisterM = require('./components/loginRegister/loginSignUp.m.js');
var ChatM = require('./components/chat/chat.m.js');
var SettingsM = require('./components/settings/settings.m.js');

// Inject all modules at this one centralized place.
var app = angular.module('app', [

  // Core.
  CoreM.name,

  // Shared.
  UserM.name,

  // Components.
  SliderM.name,
  LoginRegisterM.name,
  ChatM.name,
  SettingsM.name,

])

require('./app.run.js')(app); // Runs required files during the beginning.
require('./app.r.js')(app); // Loads the routes.
