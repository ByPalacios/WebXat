import './App.css';

const App = () => {
  return (
    <div className="App">
      <section className="FormDiv">
          <h1 className={'formTitle'}>WebXat Ruine TT</h1>
        <input className='formInput' type={Text} placeholder="Escriu el teu Username" id="username"></input>
        <input className='formInput' type={Text} placeholder="Escriu el teu Email" id="email"></input>
        <input className='formInput' type={Text} placeholder="Escriu la teva contrasenya" id="password"></input>
          <input className='formInput' type={Text} placeholder="Torna a escriure la teva contrasenya" id="password"></input>
          <p className={"formCondicions"}>Accepta els <a href={"google.com"}>Terminis i condicions</a></p>
        <input className={'formButton'} type={"submit"} value={'Registrar-se'}></input>
      </section>
    </div>
  );
}

export default App;
