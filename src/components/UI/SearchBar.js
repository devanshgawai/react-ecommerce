import { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredText: "",
    };
  }
  inputChangeHandler = (event) => {
    this.setState({ enteredText: event.target.value });
    this.props.onInputChange(this.state.enteredText);
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Search by category."
          onChange={this.inputChangeHandler.bind(this)}
          value={this.state.enteredText}
        />
      </>
    );
  }
}
export default SearchBar;
