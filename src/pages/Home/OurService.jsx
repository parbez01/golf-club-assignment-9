import Marquee from "react-fast-marquee";

const OurService = () => {
    return (
        <div className="">
            <h2 className="text-center text-5xl font-bold mt-12 mb-10">Our Services</h2>
            <p></p>
            <Marquee speed={100} pauseOnHover className="bg-green-400 p-3 rounded-xl text-white font-bold text-xl mb-6">
            We provide a different types services.Like Golf Training,Best Grounds,Best team,Online training,Eqipmental Rental,Monthly Tournament.
            We provide a different types services.Like Golf Training,Best Grounds,Best team,Online training,Eqipmental Rental,Monthly Tournament.
            </Marquee>

        </div>
    );
};

export default OurService;