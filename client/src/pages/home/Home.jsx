import Featured from '../../components/featured/Featured'
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
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
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperty/>
      </div>
    </div>
  )
}

export default Home