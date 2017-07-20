import React  from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

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

export default TodoList;
