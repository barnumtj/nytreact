import React from 'react'
import "./searchform.css";

class SearchForm extends React.Component {
    render() {
        return (
        <div id="searchFormDiv">
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Search</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                </div>
                <div class="form-group">
                     <label for="formGroupExampleInput">Start Year</label>
                     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                 </div>
                 <div class="form-group">
                     <label for="formGroupExampleInput">End Year</label>
                     <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                 </div>
                 <div>
                 <button type="submit" class="btn btn-primary">Search</button>
                 </div>
            </form>
        </div>
                    )
                }
            }
            
export default SearchForm;