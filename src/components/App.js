import React from "react";
import "./App.css";
import FilterBar from "./FilterBar";
import JobList from "./JobList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: [] };
  }

  setTags = (newTag) => {
    if (this.state.tags.includes(newTag)) return;
    this.setState((prevState) => ({
      tags: [...prevState.tags, newTag],
    }));
  };

  resetTags = (newTags) => {
    this.setState({ tags: [...newTags] });
  };

  render() {
    return (
      <div>
        <header className="header"></header>
        {this.state.tags.length !== 0 && (
          <FilterBar
            resetTags={this.resetTags}
            selectedTags={this.state.tags}
          />
        )}
        <JobList setTags={this.setTags} selectedTags={this.state.tags} />
      </div>
    );
  }
}

export default App;
