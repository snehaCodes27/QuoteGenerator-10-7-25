import { useState } from "react";
import axios from "axios";

function Quote() {
  const [quote1, setQuote1] = useState("");

  const cq = () => {
    let url = "http://localhost:9000/coding";
    axios
      .get(url)
      .then((res) => {
       
        setQuote1(res.data[0].Quote);
      })
      .catch((err) => {
        setQuote1("Error : " + err.message);
      });
  };

  const coq = () => {
    let url = "http://localhost:9000/confidence";
    axios
      .get(url)
      .then((res) => {
    
        setQuote1(res.data[0].Quote);
      })
      .catch((err) => {
        setQuote1("Error : " + err.message);
      });
  };

  const hq = () => {
    let url = "http://localhost:9000/happy";
    axios
      .get(url)
      .then((res) => {
   
        setQuote1(res.data[0].Quote);
      })
      .catch((err) => {
        setQuote1("Error : " + err.message);
      });
  };

  const wq = () => {
    let url = "http://localhost:9000/work";
    axios
      .get(url)
      .then((res) => {
   
        setQuote1(res.data[0].Quote);
      })
      .catch((err) => {
        setQuote1("Error : " + err.message);
      });
  };

  return (
    <>
      <div className="quote-container">
        <h1>💬 Quote Generator</h1>
        <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
          <input type="submit" value="Coding Quote" onClick={() => cq()} />
          

          <input type="submit" value="Confidence Quote" onClick={() => coq()} />
          
          <input type="submit" value="Happy Quote" onClick={() => hq()} />
          

          <input type="submit" value="Work Quote" onClick={() => wq()} />
       
        </form>
<h2>{quote1}</h2>


      </div>
    </>
  );
}

export default Quote;
