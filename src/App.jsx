import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListConainer from './components/ItemListContainer/ItemListConainer'

const App = () => {
  return (
    <div>
        <NavBar/>
        <ItemListConainer text="BIENVENIDOS A MODA-MAN" />
    </div>
  )
}

export default App
