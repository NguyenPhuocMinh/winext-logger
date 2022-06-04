'use strict';

const isEmpty = (value) => {
  if (value == null) {
    return true;
  }

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
};

const isRequired = (value) => (value === undefined || value == null ? true : false);

const validateUtils = {
  isEmpty,
  isRequired,
};

module.exports = validateUtils;
