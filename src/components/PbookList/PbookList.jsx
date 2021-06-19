import React from "react";
import { connect } from "react-redux";
import {
  deleteEntry,
  fetchEntries,
} from "../../redux/entries/entries-operations";
import { getLoadingState } from "../../redux/entries/entries-selectors";
import { getFilteredContacts } from "../../redux/entries/entries-selectors";
import styles from "./PbookList.module.css";

class PbookList extends React.Component {
  
  componentDidMount() {
    this.props.onFetchEntries();
  }

  render() {
    const { entries, onDelete } = this.props;
    return (
      <section>
        <div className={`${styles.entry} ${styles.pbookHeader}`}>
          <span>Name</span>
          <span>Phone number</span>
          <span>Actions</span>
        </div>
        <ul className={styles.pbookList}>
          {entries.map((entry) => (
            <li key={entry.id} className={styles.entry}>
              <span>{entry.name}</span>
              <span>{entry.number}</span>
              <div className={styles.controlBtnContainer}>
                <button
                  className={styles.entryControlBtn}
                  type="button"
                  data-id={entry.id}
                  onClick={onDelete}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  entries: getFilteredContacts(state),
  loading: getLoadingState(state),
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (event) => dispatch(deleteEntry(event.target.dataset.id)),
  onFetchEntries: () => dispatch(fetchEntries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PbookList);
