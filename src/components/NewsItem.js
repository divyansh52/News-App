import React from "react";

const NewsItem = (props) => {
  let { imageUrl, title, description, newsUrl, author, time, source, color } =
    props;
  return (
    <div className="container">
      <div className="my-3">
        <div className="card">
          <span
            className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`}
            style={{ left: "90%" }}
          >
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {/* If author is null then render Unknown in place of author and show the time in GMT format  */}
                By {author ? author : "Unknown"} on{" "}
                {new Date(time).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
