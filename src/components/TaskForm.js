import React from "react";
import "../styles/taskForm.css";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props ? this.props.category : "",
      description: this.props ? this.props.description : ""
    };
  }

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState(() => ({ category, error: "" }));
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description, error: "" }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.category || !this.state.description) {
      console.log("All fields are required");
      this.setState(() => ({
        error: "All fields are required"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));

      this.props.onSubmit({
        category: this.state.category,
        description: this.state.description
      });
    }
  };

  render() {
    return (
      <div className="task-form">
        {this.state.error && <div className="error">{this.state.error}</div>}
        <form onSubmit={this.onSubmit}>
          <label>Category</label>
          <br />
          <input
            placeholder="Enter category"
            type="text"
            onChange={this.onCategoryChange}
            value={this.state.category || ""}
          />
          <br />
          <label>Description</label>
          <br />
          <input
            placeholder="Enter Description"
            type="text"
            onChange={this.onDescriptionChange}
            value={this.state.description || ""}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
