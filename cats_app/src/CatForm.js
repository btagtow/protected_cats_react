import React, { Component } from 'react';

const catsURL = 'http://localhost:3000/cats';

class CatForm extends Component {

  state = {
    name: "",
    color: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(catsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(this.state)
    }).then(response => response.json())
      .then(console.log);
  }

  render() {
    const { name, color } = this.state;

    return(
      <form className="cat-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="color"
          value={color}
          placeholder="color"
          onChange={this.handleChange}
        />
        <input type="submit" value="New Cat" />
      </form>
    )
  }
}

export default CatForm;