let list = []; //C'est ici que je vais stocker toute ma list pour l'afficher

// Composant TODO-LIST
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valeure: '' };
  }

  handleChange = (e) => {
    this.setState({ valeure: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(), nom: this.state.valeure 
    }
    if (newTodo.nom != ""){
      list.push( newTodo );
    }
    this.setState({ valeure: '' });
  };

  handleDelete = (id) => {
    console.log(id);
    const listCopie = list.slice()
    list = listCopie.filter(li => li.id !== id)
    this.setState(list)
  }
  // handleUpdate = (id) => {
  //   const listUpdate = list.find((li) => li.id === id);
  //   if (listUpdate) {
  //     this.setState({ valeure: listUpdate.nom, id: id });
  //   }
  // };
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="flex justify-between">
            <label className="flex justify-between flex-wrap w-[100%]">
              <input
                type="text"
                className="my-1 w-[100%] py-1"
                placeholder="Entrer une tache"
                value={this.state.valeure}
                onChange={this.handleChange}
              />
              <button className=' focus:outline-none text-white bg-green-700 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 my-2 mx-auto'>Submit</button>
              {/* <button className=' focus:outline-none text-white bg-green-700 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 my-2 mx-auto'>{this.handleUpdate? 'Modifier' : 'Ajouter'}</button> */}
            </label>
          </div>
        </form>
        <ul className='text-white '>
          {list.map((li) => (
            <li key={li.id} className='flex justify-between flex-wrap p-2 bg-white dark:bg-slate-500 rounded my-2'>
              {li.nom}
              <div className='flex gap-1'>
                <button onClick={() => this.handleUpdate(li.id)} className=' focus:outline-none text-white bg-green-700 focus:ring-4 font-medium rounded-lg text-sm px-2 py-1'><i className="fa-solid fa-pen-to-square"></i></button>
                <button onClick={() => this.handleDelete(li.id)} className=' focus:outline-none text-white bg-red-700 focus:ring-4 font-medium rounded-lg text-sm px-2 py-1'><i className="fa-solid fa-trash"></i></button>
              </div>
            </li>
          ))}
        </ul >
      </div>
    );
  }
}


// Composant de base
class Affichage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center bg-white dark:bg-slate-800 h-[100vh] px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div className="w-[50%]">
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Todo List React
          </h1>
            <Todo />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Affichage />, document.getElementById('root'));
