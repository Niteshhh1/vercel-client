
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './pages/admin/AdminDashboard'
import Landing from './pages/landingPage/Landing'
import Projects from './components/project management/Projects'
import Clients from './components/client management/Clients'
import ContactForm from './components/Contact_Form_Details/ContactForm'
import SubscribedEmail from './components/subscribed_email/SubscribedEmail'


function App() {

  return (
     <>
       <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/admin/projects' element={<Projects/>}/>
          <Route path='/admin/clients' element={<Clients/>} />
          <Route path='/admin/contact' element={<ContactForm/>}/>
          <Route path='/admin/subscribed' element={<SubscribedEmail/>}/>
       </Routes>
    </>
  )
}

export default App
