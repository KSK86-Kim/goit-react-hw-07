import React from "react";
import { connect } from "react-redux";
import { onChangeFilter } from "../../redux/filter/filter-actions";
import styles from "./Filter.module.css";

class Filter extends React.Component {

  filterChangeHandler = (event) => {
    this.props.onChangeFilter(event.target.value)
  }

  render() {
    return (
      <div className={styles["filter"]}>
        <label className={styles["filter-label"]}>
          Find contacts by name
          <br />
          <input
            className={styles["filter-input"]}
            type="text"
            onChange={this.filterChangeHandler}
          />
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (value) => dispatch(onChangeFilter(value)),
});

export default connect(null, mapDispatchToProps)(Filter);
