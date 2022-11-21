import './App.css'
const Quote = require('inspirational-quotes');


function App() 
{
  const newQuote = ()=>{
    window.location.reload(false);
    document.getElementById('quote-output').textContent = Quote.getQuote().text
  }

  return (
    <div className="App">
      <main>
        <section className="left-box">
          <button id="button-output" onClick={newQuote} className="btn-orange">Nieuwe Quote</button>
        </section>
        <section className="right-box">
          <section id="quote-output">{Quote.getRandomQuote()}</section>
        </section>
    </main>
    </div>
  );
}
export default App;
