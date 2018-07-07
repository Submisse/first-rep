import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
              <div className="wrapper">
                <SayMyName name="Han" surname="Yolo" link="1#" />
                <SayMyName name="Yasha" surname="Miroslavovich" link="2#" />
                <SayMyName name="Kim" surname="Jentyrgaev" link="#" />
              </div>
    );
  }
}

function SayMyName(props) {
  return (
      <div>
        <strong>Hello World!</strong>
        <h1> Просто имя {props.name}, ну и фамилия - {props.surname}</h1>
        <a href={props.link}> Ссылка на заглушку =) </a>
      </div>
    )
}


export default App;
