import React from 'react'
import "./searchform.css";
import API from '../../utils/api'
import Results from '../Results/Results'

class SearchForm extends React.Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  };

  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleStartYearChange = (event) => {
    this.setState({ startYear: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value });
  }

  // When the search form submits, perform NYT api search with user input
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.apiArticles(this.state.topic, this.state.startYear, this.state.endYear)
      .then((res) => {
        this.setState({ articles: res.response.docs });
      });

  }

  renderArticles = () => {
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
      />
    ));
  }

  getSavedArticles = () => {
    API.getArticle()
      .then((res) => {
        this.setState({ saved: res.data });
      });
  }
  
  handleSaveButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    console.log("findArticleByID: ", findArticleByID);
    const newSave = { title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url };
    API.saveArticle(newSave)
      .then(this.getSavedArticles());
  }

  render() {
    return (
      <div id="searchFormDiv">
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Search</label>
            <input onChange={this.handleTopicChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Start Year</label>
            <input onChange={this.handleStartYearChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">End Year</label>
            <input onChange={this.handleEndYearChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
          </div>
          <div>
            <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
        <div>
          <ul className="list-group">{this.renderArticles()}</ul>
        </div>
      </div>
    )
  }
}

export default SearchForm;