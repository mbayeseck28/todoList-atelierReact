handleUpdate = (id) => {
const todoToUpdate = this.state.list.find((todo) => todo.id === id);
if (todoToUpdate) {
this.setState({ valeure: todoToUpdate.nom, id: id });
}
};

// Update handleSubmit to handle todo updates
handleSubmit = (e) => {
e.preventDefault();

if (this.state.valeure.trim() !== "") {
if (this.state.id) {
// If there's an id, update the existing todo
const updatedList = this.state.list.map((todo) =>
todo.id === this.state.id ? { ...todo, nom: this.state.valeure } : todo
);

      this.setState({ list: updatedList, valeure: '', id: null });
    } else {
      // If there's no id, add a new todo
      const newTodo = {
        id: new Date().getTime(),
        nom: this.state.valeure,
      };

      this.setState((prev) => ({
        list: [...prev.list, newTodo],
        valeure: '',
        id: null,
      }));
    }

}
};
