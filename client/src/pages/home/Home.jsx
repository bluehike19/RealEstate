import Navbar from '../../components/Navbar'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
      </div>
    </div>
  )
}

export default Home