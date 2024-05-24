import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {


  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <h1 className='text-6xl text-purple-600 text-center font-bold'>Coffee collection {coffees.length}</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4'>


        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }

      </div>
    </div>
  )
}

export default App
