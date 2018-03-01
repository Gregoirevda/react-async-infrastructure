import React, {Component} from 'react';

export default class MovieList extends Component {

  render() {
    return new Array(100).fill(1).map((_, id) => {
      return <div key={id} onClick={this.props.onClick}>
        Movie {id}
      </div>
    })
  }
}