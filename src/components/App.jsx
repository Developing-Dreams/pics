import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get("search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
    //Promise
    // .then(response => {
    //   console.log(response.data.results);
    // });
    //console.log(term);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {/* Show {this.state.images.length} Images */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
