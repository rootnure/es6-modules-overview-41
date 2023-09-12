import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  const [watches, setWatches] = useState([]);

  /* useEffect(()=> {
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, []); */

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/rootnure/es6-modules-overview-41/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, []);

  /* const watches = [
    {id: 1, name: 'Apple Watch', price: 200},
    {id: 2, name: 'Samsung Smart Watch', price: 200},
    {id: 3, name: 'Casio Normal Watch', price: 200},
    {id: 4, name: 'MI Smart Watch', price: 2700},
  ] */

  /* const watches = [
    {
      _id: "W1tch_4b5F1X1L9D",
      name: "Luxury Chronograph Watch",
      price: 599.99
    },
    {
      _id: "W2tch_3e7l4e8g7a3n5t",
      name: "Elegant Rose Gold Watch",
      price: 349.95
    },
    {
      _id: "W3tch_9M9i5d7n1i9g0h5t",
      name: "Midnight Black Digital Watch",
      price: 149.99
    },
    {
      _id: "W4tch_1S8p7o5r5t3y",
      name: "Sporty Diver's Watch",
      price: 229.99
    },
    {
      _id: "W5tch_2C1a9s8u7a6l3",
      name: "Casual Leather Strap Watch",
      price: 79.95
    },
    {
      _id: "W6tch_3E2x9e4c8u7t1v5e",
      name: "Executive Stainless Steel Watch",
      price: 449.99
    },
    {
      _id: "W7tch_4P9r3e9m9i5u4m",
      name: "Premium Swiss Automatic Watch",
      price: 999.99
    },
    {
      _id: "W8tch_5E3l7e8g2a3n1t4",
      name: "Elegant Silver Dial Watch",
      price: 189.95
    },
    {
      _id: "W9tch_7S4p5o7r5t8y",
      name: "Sporty Smartwatch",
      price: 129.99
    },
    {
      _id: "W10tch_1R8o4y9a4l9e2",
      name: "Royal Diamond Collection Watch",
      price: 1499.99
    }
  ]; */   

  return (
    <>
      <h1>React → ES6 Modules</h1>
      {
        watches.map(watch => <Watch key={watch._id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
