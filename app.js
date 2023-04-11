function App() {
  console.log(`app loaded`)
  return (
    <div className="container">
      <NavBar />
      {/* <hr />
      <div>
      <Footer />
      </div> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
