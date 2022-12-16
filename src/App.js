import React from 'react'
import Navbar from './Components/Navbar'
import TextFrom from './Components/TextFrom'

export default function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils"/>
      <div className='container'>
      <TextFrom heading= "Enter the text"/>
      </div>
      
    </>
  )
}
