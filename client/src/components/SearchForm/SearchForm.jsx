import React from 'react'
import "./searchform.css";
import API from '../../utils/api'

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
        console.log("Getting NYT Articles");
        console.log("this.state.topic: ", this.state.topic);
        console.log("this.state.startYear: ", this.state.startYear);
        console.log("this.state.endYear: ", this.state.endYear);
        API.apiArticles(this.state.topic, this.state.startYear, this.state.endYear)
          .then((res) => {
            this.setState({ articles: res.response.docs });
            console.log("this.state.articles: ", this.state.articles);
          });
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
        </div>
                    )
                }
            }
            
export default SearchForm;