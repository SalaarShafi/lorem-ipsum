import React, { useState } from 'react';
import data from './data';


function App() {
  const [numOfOrders, setNumOfOrdered] = useState(1);
  // const [showParas, setShowParas] = useState(false);
  const [orders, setOrders] = useState(0);
  
  let paras = [];
  let paraIndex = 0;
  let totalOrdered = orders;

  function handleSubmit(e) {
    e.preventDefault();
    setOrders(numOfOrders);
  }

  while (totalOrdered > 0) {
    if (paraIndex==8) {
      paras.push(<p>{data[paraIndex]}</p>);
      paraIndex=0;
      totalOrdered--;
    } else {
      paras.push(<p>{data[paraIndex]}</p>);
      paraIndex++;
      totalOrdered--;
    }
  }
  console.log(paras);

  return (
  <section className='section-center'>
    <h3>Tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
    <label htmlFor="amount">Paragraphs :</label>
    <input 
    type="number" 
    value={numOfOrders}
    onChange={(e)=> setNumOfOrdered(e.target.value)} />
    <button className='btn' type='submit'>Generate</button>
    </form>
    <article className='lorem-text'>
    {numOfOrders<=0 && <h4 style={{margin: '18px',padding: '3px',textDecoration: 'underline'}}>Oops can't give you nothing!</h4> }
    {paras ? paras : <p>{data[0]}</p>}
    </article>
    
  </section>
    )
}

export default App;
