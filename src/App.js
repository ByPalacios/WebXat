import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>WebXat Ruine TT</h1>
      <section className="FormDiv">
          <h3 className='formTitles'>Username:</h3>
        <input className='formInput' type={Text} placeholder="Escriu el teu Username" id="username"></input>
          <h3 className='formTitles'>Email:</h3>
        <input className='formInput' type={Text} placeholder="Escriu el teu Email" id="email"></input>
          <h3 className='formTitles'>Password:</h3>
        <input className='formInput' type={Text} placeholder="Escriu la teva contrasenya" id="password"></input>
        </section>
    </div>
  );
}

export default App;
