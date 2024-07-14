import Hero from "../components/Hero";
import Header from "../components/Header";
import Clip from "../components/Clip"
import Footer from "../components/Footer"

export default function Home() {
   return (
      <div className="content-container" >
         <div className="sub-main">

         </div>
         <div className="main">
            <main>
               <Header/>
               <Hero/>
               {/* <Clip/> */}
               <Footer/>
            </main>
         </div>
      </div>
   )
}
