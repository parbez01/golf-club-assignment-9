import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import OurService from "./OurService";
import Package from "./Package";
import LatestCustomer from "./LatestCustomer";



const Home = () => {

    const data = useLoaderData();


    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <h1 className="text-5xl font-bold text-center mt-8 mb-8 shadow-lg">Our Services</h1>  */}
            <OurService></OurService>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">

                {
                    data.map(singleCard => <Card key={data.id} singleCard={singleCard}></Card>)
                }

            </div>

            <div>
                <Package></Package>
            </div>

            <div>
                <LatestCustomer></LatestCustomer>
            </div>

           <div className="mt-10">
           <Footer></Footer>
           </div>

        </div>
    );
};

export default Home;