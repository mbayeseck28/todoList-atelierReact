class Welcome extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      <h1>
        Bonjour {this.props.name} {this.props.children}
      </h1>
    );
  }
}

class Affichage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Welcome name="Mbaye"> comment vas-tu</Welcome>
        {/* <Welcome name="Awa" />
          <Welcome name="Fallou" /> */}
      </div>
    );
  }
}

ReactDOM.render(<Affichage />, document.getElementById('root'));

// // _______________________
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function tick() {
//   const element = (
//     <div>
//       <h1>Bonjour, monde !</h1>
//       <h2>Il est {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);
