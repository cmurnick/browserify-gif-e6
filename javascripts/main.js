"use strict";

const doItAll = require('./data');


doItAll.initializer();
const activateEvents = require('./events');

doItAll.initializer();
activateEvents.filterEvent();