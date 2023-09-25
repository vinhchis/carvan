import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ListRange from "../ListRange";

function Home() {
  return ( 
    <>
      <Header/>
      <div className="main col-10 offset-1">
        <ListRange />/
      </div>
      <Footer/>
    </>
   );
}

export default Home;