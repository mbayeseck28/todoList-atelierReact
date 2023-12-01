// Composant TODO-LIST
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valeure: '', affiche: '' };
  }

  handleChange = (e) => {
    this.setState({ valeure: e.target.value });
  };

  //   handleSubmit = (e) => {
  //     e.preventDefault();

  //     this.setState({ affiche: this.state.valeure });

  //     this.setState({ valeure: '' });
  //   };

  render() {
    return (
      <div>
        <nav className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 py-5 lg:px-8 flex justify-center">
            <span className="text-xl bold ml-4">
              Bonjour: {this.state.valeure}
            </span>
          </div>
        </nav>

        <div className="flex justify-center bg-white dark:bg-slate-800 h-[100vh] px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div className="w-[50%]">
            {/* <h1 className="text-3xl font-bold text-white text-center mb-4">
              Bonjour: {this.state.valeure}
            </h1> */}
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
                  {/* <button className=" focus:outline-none text-white bg-green-700 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 my-2 mx-auto">
                    Submit
                  </button> */}
                  {/* <button className=' focus:outline-none text-white bg-green-700 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 my-2 mx-auto'>{this.handleUpdate? 'Modifier' : 'Ajouter'}</button> */}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'));
