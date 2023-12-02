// Composant Bouton
class Boutons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        id={this.props.id}
        className="focus:outline-none text-white bg-green-700 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 my-1 mx-auto"
      >
        {this.props.text}
      </button>
    );
  }
}

// Composant de la Formulaire
class Formulaire extends React.Component {
  
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <div className="flex justify-between">
            <label className="flex justify-between flex-wrap w-[100%]">
              <input
                type="text"
                className="my-1 w-[100%] py-1"
                placeholder="Entrer une tache"
                value={this.props.valeure}
                onChange={this.props.handleChange}
              />
              <Boutons id={this.props.id} text={this.props.text} />
            </label>
          </div>
        </form>
      </div>
    )
  }
}

// Chaque liste
class Liste  extends React.Component{
  render(){
    return(
      <div>
        {this.props.list.map((li) => (
            <li key={li.id} className='flex justify-between flex-wrap content-center p-2 bg-white dark:bg-slate-500 rounded my-2'>
              {li.nom}
              <div className='flex gap-1'>
                <Boutons onClick={() => this.props.handleUpdate(li.id)} id="orange" text={<i className="fa-solid fa-pen-to-square"></i>} />
                <Boutons onClick={() => this.props.handleDelete(li.id)} id="rouge" text={<i className="fa-solid fa-trash"></i>} />
              </div>
            </li>
          ))}
      </div>
    )
  }
}

// Composant Liste UL
class Todo extends React.Component {

  render() {
    return (
      <div>
        <ul className='text-white '>
          <Liste handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate} list={this.props.list} />
        </ul >
      </div>
    );
  }
}


// Composant de base
class Affichage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      valeure: '',
      list: [],
      couleur: 'vert',
      fonction: 'Ajouter',
      cleAmodifier:''
    };
  }
  handleChange = (e) => {
    this.setState({ valeure: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.valeure.trim() !== ""){
      const newTodo = {
        id: new Date().getTime(), nom: this.state.valeure 
      };
      this.setState((prev) => ({
        list: [...prev.list, newTodo],
        valeure: ''
      }))
    }
  };
  handleSubmitModif = (e) => {
    e.preventDefault();
    
    const listeAmodifier = this.state.list.map((li) => {
      if (li.id === this.state.cleAmodifier) {
        return { ...li, nom: this.state.valeure }; 
      }
      return li;
    });
  
    this.setState({
      list: listeAmodifier,
      couleur: "vert",
      fonction: "Ajouter",
      valeure: ''
    });
  };
  
  ConditionHandleSubmit = (e) =>{
    const condition = this.state.fonction == "Ajouter"

    condition ? this.handleSubmit(e) : this.handleSubmitModif(e);
  }
  handleDelete = (id) => {
    const newList = this.state.list.filter(li => li.id !== id)
    this.setState({list: newList })
  }
  handleUpdate = (id) => {
    const listSelect = this.state.list.filter((li) => li.id == id)
    listSelect.map((li) => {
      this.setState({
        cleAmodifier: li.id,
        valeure: li.nom,
        couleur: "orange",
        fonction: "Modifier"
      })
    })

  };

  render() {
    return (
      <div className="flex justify-center bg-white dark:bg-slate-800 min-h-screen px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div className="w-[100%]">
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Todo List React
          </h1>
            <Formulaire handleSubmit={this.ConditionHandleSubmit} handleChange={this.handleChange} valeure={this.state.valeure} id={this.state.couleur} text={this.state.fonction}/>
            <Todo handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} list={this.state.list}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Affichage />, document.getElementById('root'));
