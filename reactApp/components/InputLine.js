import React  from 'react';
import ReactDOM from 'react-dom';


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

export default InputLine;
