import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper } from "../../ui/misc";

export default class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(10)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);

        console.log(matches);
      });
  }

  showMatches = () => <div className="match_block">BLOCK!!</div>;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
