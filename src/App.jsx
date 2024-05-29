import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import Header from './Components/Header';

function App() {


  const loadedCoffees = useLoaderData();
  
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Header></Header>
      <h1 className='text-6xl text-purple-600 text-center font-bold'>Coffee collection {loadedCoffees.length}</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4'>


        {
          coffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffee={coffee} 
          coffees={coffees} 
          setCoffees={setCoffees} >

          </CoffeeCard>)
        }

      </div>
    </div>
  )
}

export default App
