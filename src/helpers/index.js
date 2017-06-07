import moment from 'moment';
import _ from 'lodash';

export const transformYupValidationErrors = (res) => {
  if (res === null || typeof res !== 'object') {
    return {};
  }

  return res.inner.reduce((acc, item) =>
    ({ ...acc, ...{ [item.path]: item.errors.join() } })
  , { _error: res.message });
};

export function checkEndDate(value) {
  const parent = this.parent;
  const startDate = parent.startDate;
  if (!_.isNull(startDate)) {
    if (_.isNull(value)) {
      return false;
    }
  }
  return true;
}

export function checkEndDateGreater(value) {
  const parent = this.parent;
  const startDate = parent.startDate;
  if (!startDate || _.isNull(startDate)) {
    return true;
  }
  if (moment(value).isValid() && moment(startDate).isValid()) {
    if (moment(value).diff(moment(startDate), 'days') > 0) {
      return true;
    }
    return false;
  }
  return false;
}

export function checkPollType(value) {
  if (value === 'DATETIME' || value === 'STRING') {
    return true;
  }
  return false;
}

export function validPollOption(value) {
  if (!_.isNull(value)) {
    if (_.isString(value)) {
      return true;
    } else if (_.isArray(value)) {
      let isDateArray = true;
      _.each(value, (ele) => {
        if (!moment(ele).isValid()) {
          isDateArray = true;
        }
        return isDateArray;
      });
    }
  }
  return false;
}
