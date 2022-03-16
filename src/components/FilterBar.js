import React from "react";
import "./FilterBar.css";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  removeHandler = (e) => {
    const removeTag = e.target.closest(".remove-btn").value;

    const index = this.props.selectedTags.indexOf(removeTag);
    if (index > -1) {
      this.props.selectedTags.splice(index, 1);
    }

    this.props.resetTags(this.props.selectedTags);
  };

  clearHandler = () => {
    this.props.resetTags("");
  };

  render() {
    const filterOptions = this.props.selectedTags.map((filterOption) => (
      <div className="filter-option" key={filterOption}>
        <p className="filter-name">{filterOption}</p>
        <button
          className="remove-btn"
          onClick={this.removeHandler}
          value={`${filterOption}`}
        >
          <svg
            className="remove-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
            />
          </svg>
        </button>
      </div>
    ));
    return (
      <div className="filter-bar">
        <div className="filter-options-container">{filterOptions}</div>
        <button className="clear-btn" onClick={this.clearHandler}>
          Clear
        </button>
      </div>
    );
  }
}

export default FilterBar;
