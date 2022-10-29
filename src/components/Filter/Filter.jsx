import React from 'react';
import { Label, Input } from './Filter-styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Search
      <Input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search by name..."
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
