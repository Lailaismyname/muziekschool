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
      <header>
        <section>
            <h1>MuziekSchool H&J</h1>
            <span class="dikke-text">Tarieven</span>
        </section>
        <nav>
            <ul>
                <li><a href="https://lailaismyname.github.io/ProjectMuziekschool/index.html">Home</a></li>
                <li><a href="https://lailaismyname.github.io/ProjectMuziekschool/html/overons.html">Over ons</a></li>
                <li><a href="https://lailaismyname.github.io/ProjectMuziekschool/html/tarieven.html">Tarieven</a></li>
                <li><a href="https://lailaismyname.github.io/ProjectMuziekschool/html/contact.html">Contact</a></li>
                <li><a href="https://lailaismyname.github.io/ProjectMuziekschool/html/blog.html">Blog</a></li>
                <li><a href="https://lailaismyname.github.io/muziekschool/">Motivational</a></li>
            </ul>
        </nav>
    </header>
      <main>
        <section className="left-box">
          <button id="button-output" onClick={newQuote} className="btn-orange">Nieuwe Quote</button>
        </section>
        <section className="right-box">
          <section id="quote-output">{Quote.getRandomQuote()}</section>
        </section>
    </main>
    <footer>
        <p>Copyright 2021 Muziekschool H&J<br></br>
        (Dit is een oefenopdracht, alle informatie op deze website is fictief.)</p>
    </footer>
    </div>
  );
}
export default App;
