/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ singleCard }) => {

  const { image, name, price, id, short_description } = singleCard;
  return (

    <div data-aos="zoom-in" data-aos-duration="2000">
      <div className=" h-[700px] flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl" >
      <div className=" mx-4 mt-4 h-[400px]  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img  className="lg:h-[700px]"
          src={image}
        />
      </div>
      <div className="lg:p-6 -mt-24 lg:mt-0">
        <div className="mb-2 lg:flex items-center justify-between">
          <p className="text-xl text-center lg:text-left font-extrabold block font-sans leading-relaxed text-blue-gray-900 antialiased">
            {name}
          </p>
          <p className=" block font-sans text-center lg:text-left text-xl font-bold leading-relaxed text-blue-gray-900 antialiased">
            $ {price}
          </p>
        </div>
      
        {/* {
          description.length > 200 ? <p className="block font-sans text-base font-medium leading-normal text-gray-700 antialiased opacity-75">{description.slice(0, 300)} <Link to={`/singleCard/${id}`}><span className="text-base font-bold text-red-500">   Read More</span></Link>
          </p> : <p>{short_description}</p>
        } */}
        <p>{short_description}</p>


      </div>
      <div className="p-6 pt-0 flex justify-center">

        <Link to={`singleCard/${id}`}>

          {/* <button
            className="bg-teal-500 block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View Details
          </button> */}
          <button type="button" className="p-3 mt-5 lg:mt-0 rounded-lg text-lg font-bold text-white bg-gradient-to-r from-sky-700 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
            Show Details
          </button>

          
        </Link>

      </div>
    </div>
    </div>

  );
};

export default Card;