import React from 'react';
import './components/render.css';
import { useState } from "react"
import Getimg from './api'
import Showimg from './components/getlist'
import Searchlist from './components/onsearch'
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  const [count, setCount] = useState([])
  async function handler(term) {
    const result = await Getimg(term);
    setCount(result);
  }
  return (
    <div>
      <Searchlist onsubmit={handler} />
      <p className='group'>
      <Showimg images={count} />
      </p>
    </div>
  );
}
root.render(<App />)
