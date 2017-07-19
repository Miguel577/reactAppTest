import React  from 'react';
import ReactDOM from 'react-dom';

const dummyData = ["eat chipotle", "cry", "marry Lisa", "code??", "watch GOT", "shower"]

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

//box around assortment of todos
class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <ul>
          {dummyData.map((item) => <Todo task={item}>{item}</Todo>)
        }
        </ul>
    )
  }
}

//input field and submit button to add new todos
// class InputLine extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//
//     )
//   }
// }

//big box lots of stuff in it
// class TodoApp extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//
//     )
//   }
// }

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
