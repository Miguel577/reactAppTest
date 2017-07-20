import React  from 'react';
import ReactDOM from 'react-dom';

//individual todo item
class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <li><button>X</button>  {this.props.task}</li>
      </div>
    )
  }
}

export default Todo;
