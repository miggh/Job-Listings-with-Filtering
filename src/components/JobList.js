import React from "react";
import data from "../data.json";
import Job from "./Job";

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: [] };
  }

  setTags = (newTag) => {
    this.props.setTags(newTag);
    this.setState((prevState) => ({
      tags: [...prevState.tags, newTag],
    }));
  };

  checkMatchedTags = (jobTags) => {
    const match = this.props.selectedTags.every((tag) => jobTags.includes(tag));

    return match;
  };

  render() {
    const renderJobs = data.map((d) => {
      const jobTags = [d.role, d.level, ...d.languages];

      const match = this.checkMatchedTags(jobTags);
      if (this.props.selectedTags.length === 0 || match)
        return <Job key={d.id} jobData={d} setTags={this.setTags} />;
    });
    return renderJobs;
  }
}

export default JobList;
