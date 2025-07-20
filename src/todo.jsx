import { Component } from "react"

class ClassInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      inputVal: "",
      count: 0,
      editingId: null,
      editingValue: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleNewInput = this.handleNewInput.bind(this)
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
      count: this.state.count + 1,
    }))
  }

  handleDelete(task) {
    const newTodo = this.state.todos.filter((todo) => todo != task)
    this.setState(() => ({
      todos: newTodo,
      inputVal: "",
      count: this.state.count - 1,
    }))
  }

  handleEdit(task) {
    this.setState((state) => ({
      ...state,
      editingId: task,
      editingValue: task,
    }))
  }

  handleSave(task) {
    const editedTodos = this.state.todos.map((todo) => {
      if (todo == task) return this.state.editingValue
      return todo
    })
    this.setState((state) => ({
      ...state,
      todos: editedTodos,
      editingId: null,
      editingValue: "",
    }))
  }

  handleNewInput(e) {
    this.setState((state) => ({
      ...state,
      editingValue: e.target.value,
    }))
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All Tasks: </h4>
        <p>{this.state.count} Task/s on list</p>
        <ul>
          {this.state.todos.map((todo) =>
            this.state.editingId === todo ? (
              <>
                <input
                  type="text"
                  id="task-entry"
                  name="task-entry"
                  value={this.state.editingValue}
                  onChange={this.handleNewInput}
                />
                <button onClick={() => this.handleSave(todo)}>Save</button>
              </>
            ) : (
              <li key={todo}>
                {todo}
                <button onClick={() => this.handleEdit(todo)}>Edit</button>
                <button onClick={() => this.handleDelete(todo)}>Delete</button>
              </li>
            )
          )}
        </ul>
      </section>
    )
  }
}

export default ClassInput
