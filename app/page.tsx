
import Image from "next/image";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Drop from "./components/dropdown";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer";

 function Home() {
  return (
    <>
    
    <Navbar/>

<Header/>




  <div  className=" bg-black my-30 relative">
  <Swiper/>
  </div>
  {/* <Drop/> */}
  <Footer/>
  
    
     
   <div className="starry-background">
  {[...Array(600)].map((_, i) => {
    const vhStep = 44/ 100; 
    const style = {
      top: `${i * vhStep + Math.random() * 1}vh`, // distribute vertically with small randomness
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 3}s`,
      width: `${1 + Math.random() * 1.5}px`,
      height: `${1 + Math.random() * 1.5}px`,
      opacity: 0.6 + Math.random() * 0.4,
    };
    return <div key={i} className="star" style={style} />;
  })}
</div>


  </>
   
  
);
}
export default Home;
