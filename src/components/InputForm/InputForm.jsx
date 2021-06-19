import React from "react";
import { connect } from "react-redux";
import { addEntry } from "../../redux/entries/entries-operations";
import styles from "./InputForm.module.css";

class InputForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  onNameInput = (event) => {
    this.setState({ name: event.target.value });
  };

  onNumberInput = (event) => {
    this.setState({ number: event.target.value });
  };

  onSubmitEntry = (event) => {
    event.preventDefault();
    this.props.onAddEntry(this.state);
    event.target.reset();
  }

  render() {
    return (
      <section className={styles.newEntrySection}>
        <form className="inputForm" onSubmit={this.onSubmitEntry}>
          <label className="inputLabel">
            First / Last name :
            <input
              className="inputField"
              type="text"
              onChange={this.onNameInput}
              required
            />
          </label>
          <label className="inputLabel">
            Phone number :
            <input
              className="inputField"
              type="tel"
              onChange={this.onNumberInput}
              required
            />
          </label>
          <button className={styles.newEntryButton} type="submit">
            Add entry
          </button>
        </form>
      </section>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  onAddEntry: entry => dispatch(addEntry(entry)),
});

export default connect(null, mapDispatchToProps)(InputForm);
