import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './extra.css'
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Carl Sagan',
      quote: 'Who is more humble? The scientist who looks at the universe with an open mind and accepts whatever the universe has to teach us, or somebody who says everything in this book must be considered the literal truth and never mind the fallibility of all the human beings involved?'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler = async function() {
    const response = await fetch("https://api.quotable.io/quotes/random");
    var data = await response.json();

    this.setState({
      author: data[0].author,
      quote: data[0].content,
    })

  }
  
  
  render() {
    let twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.quote}-${this.state.author}`
    return (
      <section id="quote-box">
        <blockquote>
          <p id="text">{this.state.quote}</p>
          <footer id="author">-{this.state.author}</footer>
          <button className="btn btn-default btn-primary" onClick={this.clickHandler} id="new-quote">New Quote</button>
          <a target="_top" href={twitterUrl} id="tweet-quote" className="btn btn-default btn-info">
            <i class="fa-brands fa-twitter"></i> Tweet
          </a>
        </blockquote>
      </section>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
