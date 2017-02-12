import * as eventCreate from './validators/events/eventCreate';
import * as eventEdit from './validators/events/eventEdit';
import * as eventInvitation from './validators/events/eventInvitation';
import * as groupCreate from './validators/groups/groupCreate';
import * as groupEdit from './validators/groups/groupEdit';
import * as groupMemberInvitation from './validators/groups/groupMemberInvitation';
import * as locationCreate from './validators/locations/locationCreate';
import * as locationEdit from './validators/locations/locationEdit';
import * as optionCreate from './validators/polls/optionCreate';
import * as pollCreate from './validators/polls/pollCreate';
import * as pollEdit from './validators/polls/pollEdit';
import * as pollInvitation from './validators/polls/pollInvitation';
import * as userCreate from './validators/users/userCreate';
import * as userEdit from './validators/users/userEdit';

export const app = () => ({});

export const validators = () => ({
  events: {
    eventCreate,
    eventEdit,
    eventInvitation,
  },
  groups: {
    groupCreate,
    groupEdit,
    groupMemberInvitation,
  },
  locations: {
    locationCreate,
    locationEdit,
  },
  polls: {
    optionCreate,
    pollCreate,
    pollEdit,
    pollInvitation,
  },
  users: {
    userCreate,
    userEdit,
  },
});
