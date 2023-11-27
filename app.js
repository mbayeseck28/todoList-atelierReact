const list = []; //C'est ici que je vais stocker toute ma list pour l'afficher

// Composant Bouton
class Boutons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        id={this.props.id}
        className="text-white font-bold py-1 px-2 rounded"
      >
        {this.props.text}
      </button>
    );
  }
}
// Composant Formulaire
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nouvelleTache: '' };
  }
  handleChange = (e) => {
    this.setState({ nouvelleTache: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouvelleTache;
    list.push({ id: id, nom: nom });
    this.setState({ nouvelleTache: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="flex justify-between">
            <label className="flex justify-between flex-wrap w-[100%]">
              <input
                type="text"
                className="my-1 w-[75%] py-1"
                placeholder="Entrer une tache"
                value={this.state.nouvelleTache}
                onChange={this.handleChange}
              />
              <Boutons id="vert" text="Ajouter" />
            </label>
          </div>
        </form>
        <ul className='text-white '>
          {list.map((li) => (
            <li key={li.id}>{li.nom}</li>
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
      <div className="m-4 flex justify-center bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
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
