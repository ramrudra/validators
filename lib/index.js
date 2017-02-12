'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validators = exports.app = undefined;

var _eventCreate = require('./validators/events/eventCreate');

var eventCreate = _interopRequireWildcard(_eventCreate);

var _eventEdit = require('./validators/events/eventEdit');

var eventEdit = _interopRequireWildcard(_eventEdit);

var _eventInvitation = require('./validators/events/eventInvitation');

var eventInvitation = _interopRequireWildcard(_eventInvitation);

var _groupCreate = require('./validators/groups/groupCreate');

var groupCreate = _interopRequireWildcard(_groupCreate);

var _groupEdit = require('./validators/groups/groupEdit');

var groupEdit = _interopRequireWildcard(_groupEdit);

var _groupMemberInvitation = require('./validators/groups/groupMemberInvitation');

var groupMemberInvitation = _interopRequireWildcard(_groupMemberInvitation);

var _locationCreate = require('./validators/locations/locationCreate');

var locationCreate = _interopRequireWildcard(_locationCreate);

var _locationEdit = require('./validators/locations/locationEdit');

var locationEdit = _interopRequireWildcard(_locationEdit);

var _optionCreate = require('./validators/polls/optionCreate');

var optionCreate = _interopRequireWildcard(_optionCreate);

var _pollCreate = require('./validators/polls/pollCreate');

var pollCreate = _interopRequireWildcard(_pollCreate);

var _pollEdit = require('./validators/polls/pollEdit');

var pollEdit = _interopRequireWildcard(_pollEdit);

var _pollInvitation = require('./validators/polls/pollInvitation');

var pollInvitation = _interopRequireWildcard(_pollInvitation);

var _userCreate = require('./validators/users/userCreate');

var userCreate = _interopRequireWildcard(_userCreate);

var _userEdit = require('./validators/users/userEdit');

var userEdit = _interopRequireWildcard(_userEdit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = exports.app = function app() {
  return {};
};

var validators = exports.validators = function validators() {
  return {
    events: {
      eventCreate: eventCreate,
      eventEdit: eventEdit,
      eventInvitation: eventInvitation
    },
    groups: {
      groupCreate: groupCreate,
      groupEdit: groupEdit,
      groupMemberInvitation: groupMemberInvitation
    },
    locations: {
      locationCreate: locationCreate,
      locationEdit: locationEdit
    },
    polls: {
      optionCreate: optionCreate,
      pollCreate: pollCreate,
      pollEdit: pollEdit,
      pollInvitation: pollInvitation
    },
    users: {
      userCreate: userCreate,
      userEdit: userEdit
    }
  };
};