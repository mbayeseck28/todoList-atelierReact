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
export default Boutons;
