import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <div className="card">
          <img src="https://media.architecturaldigest.com/photos/56a29165883e5aaf0648d83e/4:3/w_768/LA-package.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kelionė</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="card-icons">
            <i class="far fa-heart"></i>
            <i class="fas fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
