import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalizeString = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };

    // Update the title of WebPage on each rendering
    document.title = `News Monkey - ${this.capitalizeString(
      this.props.category
    )}`;
  }

  async updateNews() {
    this.setState({
      loading: true,
    });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4dfafd0523ed475ab9b569d86368039f&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrev = async () => {
    this.setState({
      page: this.state.page - 1,
    });

    this.updateNews();
  };

  handleNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });

    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          News Monkey - Top {this.capitalizeString(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {/* If loading === true then don't show the newsItems */}
          {this.state.loading === false &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    // if imageToUrl is null show a particular image else show the specific image
                    imageUrl={
                      element.urlToImage === null
                        ? "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/08/30/4A3FD731_ADB8_4484_848A_8340603372E2.0.jpeg?ar=16%3A9&auto=format&fit=crop&q=80&w=1280&nr=20"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                    color={this.props.color}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
