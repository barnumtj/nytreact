import React from 'react'
import './results.css'


const Results = props =>
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <h1>{props.title}</h1>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-default ">View Article</button>
          </a>
          <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
  </div>



export default Results