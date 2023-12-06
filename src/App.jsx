import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/calendar.css'
import Header from './Components/Header'
import Header_start from './Components/Header_start'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import Calendar from './Pages/Calendar'
import Book_room from './Pages/Book_room'
import All_meeting_room from './Pages/All_meeting_room'
import Add_meeting_room from './Pages/Add_meeting_room'
import Login_page from './Pages/Login_page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('')

  const obtaine_msg = (msg_1) => {
    setMsg(msg_1)
  }

  return (

    <BrowserRouter>
      <div className={`h-100 ${msg}`}>
        <Routes>
          <Route path='/' element={< Calendar obtaine_msg={obtaine_msg} />}></Route>
          <Route path='/login' element={< Login_page obtaine_msg={obtaine_msg} />}></Route>
          <Route path='/book_room' element={< Book_room obtaine_msg={obtaine_msg} />}></Route>
          <Route path='/all_meeting_room' element={< All_meeting_room obtaine_msg={obtaine_msg} />}></Route>
          <Route path='/add_meeting_room' element={< Add_meeting_room obtaine_msg={obtaine_msg} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>


    //   < Content obtaine_msg={obtaine_msg} />
    //  <div className={msg}>
    //  </div>

  )
}

export default App
