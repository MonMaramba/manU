import React, { Component } from "react";
import { reverseArray } from "../../ui/misc";
import { DataSnapshot } from "@firebase/database";
import { Link } from "react-router-dom";
import AdminLayout from "../../../HOC/AdminLayout";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import CircularProgress from "@material-ui/core/CircularProgress";

import { firebasePlayers } from "../../../firebase";
import { firebaseLooper } from "../../ui/misc";

export default class AdminPlayers extends Component {
  render() {
    return <div>Players</div>;
  }
}
