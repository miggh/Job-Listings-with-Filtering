import React from "react";
import "./Job.css";

class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  btnClickHandler = (e) => {
    this.props.setTags(e.target.value);
  };

  render() {
    const renderLanguageBtns = this.props.jobData.languages.map((language) => {
      return (
        <button
          key={language}
          className="filter-btn job-language"
          value={language}
          onClick={this.btnClickHandler}
        >
          {language}
        </button>
      );
    });

    return (
      <div className={this.props.jobData.featured ? "job feature" : "job"}>
        <img
          className="job-img"
          src={require(`${this.props.jobData.logo}`)}
          alt={this.props.jobData.company}
        />
        <div className="job-detail">
          <div className="job-detail--first-row">
            <p className="company-name">{this.props.jobData.company}</p>
            {this.props.jobData.new && <p className="new">New!</p>}
            {this.props.jobData.featured && (
              <p className="featured">Featured</p>
            )}
          </div>
          <h2 className="job-name">{this.props.jobData.position}</h2>
          <div className="job-detail--last-row">
            <p className="update-time">{this.props.jobData.postedAt}</p>
            <p className="offer">{this.props.jobData.contract}</p>
            <p className="location">{this.props.jobData.location}</p>
          </div>
        </div>
        <div className="job-tags">
          <button
            className="filter-btn job-role"
            onClick={this.btnClickHandler}
            value={this.props.jobData.role}
          >
            {this.props.jobData.role}
          </button>
          <button
            className="filter-btn job-level"
            onClick={this.btnClickHandler}
            value={this.props.jobData.level}
          >
            {this.props.jobData.level}
          </button>
          {renderLanguageBtns}
        </div>
      </div>
    );
  }
}

export default Job;
