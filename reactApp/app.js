import React  from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{taskText: "Eat Chipotle", completed: true},
  {taskText: "Cry", completed: true},
  {taskText: "Marry Lisa", completed: false},
  {taskText: "Code (??)", completed: false},
  {taskText: "Watch GOT", completed: false},
  {taskText: "Shower", completed: true},
  {taskText: "Catch 'em all", completed: false},
  ]

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
          {this.props.todos.map((item) =>
            item.completed ? (
              <Todo task={<strike>{item.taskText}</strike>}></Todo>
            ) : (
              <Todo task={item.taskText}></Todo>
            )
          )}
        </ul>
    )
  }
}

//input field and submit button to add new todos
class InputLine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <input type="text" value="task"></input>
        <button type="submit">Add todo</button>
      </div>

    )
  }
}

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

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
