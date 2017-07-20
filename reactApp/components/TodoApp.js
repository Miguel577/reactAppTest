import React  from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import InputLine from './InputLine';

const dummyData = [{taskText: "Eat Chipotle", completed: true},
  {taskText: "Cry", completed: true},
  {taskText: "Marry Lisa", completed: false},
  {taskText: "Code (??)", completed: false},
  {taskText: "Watch GOT", completed: false},
  {taskText: "Shower", completed: true},
  {taskText: "Catch 'em all", completed: false},
  ]


//big box lots of stuff in it
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      todos: [],
    }
  }

  componentDidMount() {
    this.setState({todos:dummyData})
  }

  render() {
    return (
      <div>
        <InputLine/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
