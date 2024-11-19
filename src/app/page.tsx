import TopBar from "./components/top";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Brands from "./components/brands";
import DisplayPage1 from "./components/display1";
import DisplayPage2 from "./components/display2";
import StylePage from "./components/style";
import Customers from "./components/customers";
import Footer from "./components/footer";

export default function Home() {
  return (
      <div className="w-[390px] h-[4461px]  lg:w-[1350px] lg:h-[3600px]">
     <TopBar/>
     <Navbar/>
     <Hero/>
     <Brands/>
     <DisplayPage1/>
     <DisplayPage2/>
     <StylePage/>
     <Customers/>
     <Footer/>

      </div>
  );
}
