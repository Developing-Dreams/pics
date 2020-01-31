import React from "react";

class SearchBar extends React.Component {
  onInputChange = event => {
    // console.log(event.target.value);
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  state = {
    term: ""
  };
  render() {
    return (
      <div className="ui segment">
        <form action="" onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
