import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { imageUrl, title, description, newsUrl } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.substring(0, 10) + "..."}</h5>
          <p className="card-text">{description.substring(0, 30) + "..."}</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
