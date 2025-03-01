import './App.css'
import { Header } from './components/Header'
import { AvailableMeals } from './components/meals/AvailableMeals'
import { Meals } from './components/meals/Meals'
import { Summory } from './components/Summory'



function App() {
  return <div>
  <Header/>
  <Summory/>
  <Meals>
    <AvailableMeals/>
  </Meals>
  </div>
}

export default App
