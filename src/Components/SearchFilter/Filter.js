import React from "react";
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contact/contact-action';
import style from './Filter.module.css';
import PropTypes from "prop-types";
import { getFilter } from '../../redux/contact/contact-selectors';

const Filter = ({ filter, onHandleChange }) => {
  return (
    <div>
      <h3 className={style.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChange}
        className={style.input}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onHandleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onHandleChange: event => dispatch(changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);