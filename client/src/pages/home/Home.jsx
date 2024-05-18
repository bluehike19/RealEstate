import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertList'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <div className="homeTitle">Browse by property type</div>
        <PropertyList />
      </div>
    </div>
  )
}

export default Home