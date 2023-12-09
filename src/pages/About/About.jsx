import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


const About = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div><h2 className="text-5xl font-bold text-center mt-24 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text ">Meet Our Team Members</h2></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 ml-6 gap-6  lg:ml-28 mt-24 mb-16">


        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"  data-aos="flip-right" data-aos-duration="2000">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/HPTXQ7d/053bff642d1fc903053bff642d1fc903-IMG-20230310-141841.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Parbez Mosharof
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="#facebook"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* 2nd card */}
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="flip-right" data-aos-duration="2000">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/vZtG84w/photo-1656338997878-279d71d48f6e.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Arjun Kapoor
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Junior Trainer
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="#facebook"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* 3rd card */}

        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" data-aos="flip-right" data-aos-duration="2000">
          <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src="https://i.ibb.co/Cv2nCxG/istockphoto-1200677760-612x612.jpg" alt="profile-picture" />
          </div>
          <div className="p-6 text-center">
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Natalie Paisley
            </h4>
            <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
              Senior Trainer
            </p>
          </div>
          <div className="flex justify-center gap-7 p-6 pt-2">
            <a
              href="#facebook"
              className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="#twitter"
              className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="#instagram"
              className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>


      
<div>
  
<div className="container my-24 mx-auto md:px-6">

<section className="mb-32 text-center">
  <h2 className="mb-12 text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text ">
    Meet the another team member
  </h2>

  <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
    <div className="mb-12">
      <img className="h-20 rounded-full w-20 flex ml-44 lg:ml-32" src="https://i.ibb.co/gM6V3L5/20161214164224-Getty-Images-533978993.jpg" alt="" />

      <p className="mb-2 font-bold">John Doe</p>
      <p className="text-neutral-500 dark:text-neutral-300">Co-founder</p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/XWmCMYN/images-1.jpg" alt="" />

      <p className="mb-2 font-bold">Lisa Ferrol</p>
      <p className="text-neutral-500 dark:text-neutral-300">Web designer</p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/8MYtrv4/images-2.jpg" alt="" />
      <p className="mb-2 font-bold">Maria Smith</p>
      <p className="text-neutral-500 dark:text-neutral-300">
        Senior consultant
      </p>
    </div>
    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/G26Rtrs/21-Pros-and-Cons-of-One-Person-Company.png" alt="" />
      <p className="mb-2 font-bold">Agatha Bevos</p>
      <p className="text-neutral-500 dark:text-neutral-300">Co-founder</p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/5r09BSM/download-1.jpg" alt="" />
      <p className="mb-2 font-bold">Darren Randolph</p>
      <p className="text-neutral-500 dark:text-neutral-300">
        Marketing expert
      </p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/9b6pNv7/images-3.jpg" alt="" />
      <p className="mb-2 font-bold">Soraya Letto</p>
      <p className="text-neutral-500 dark:text-neutral-300">SEO expert</p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/mBNqkKR/images-4.jpg" alt="" />
      <p className="mb-2 font-bold">Maliha Welch</p>
      <p className="text-neutral-500 dark:text-neutral-300">Web designer</p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/zmTczVp/images-5.jpg" alt="" />
      <p className="mb-2 font-bold">Zeynep Dudley</p>
      <p className="text-neutral-500 dark:text-neutral-300">Web developer</p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/DC4zrkM/images-6.jpg" alt="" />
      <p className="mb-2 font-bold">Avaya Hills</p>
      <p className="text-neutral-500 dark:text-neutral-300">Copywritter</p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/gSD8fwC/images-7.jpg" alt="" />
      <p className="mb-2 font-bold">Thierry Fischer</p>
      <p className="text-neutral-500 dark:text-neutral-300">
        Senior consultant
      </p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/Sm2FqwT/images-8.jpg" alt="" />
      <p className="mb-2 font-bold">Aisling Sheldon</p>
      <p className="text-neutral-500 dark:text-neutral-300">
        Senior developer
      </p>
    </div>

    <div className="mb-12">
    <img className="h-20 rounded-full w-20 flex  ml-44 lg:ml-32" src="https://i.ibb.co/c2sGRfR/images-9.jpg" alt="" />
      <p className="mb-2 font-bold">Ayat Black</p>
      <p className="text-neutral-500 dark:text-neutral-300">Web designer</p>
    </div>
  </div>
</section>

</div>
</div>







     <div>
     <Footer></Footer>
     </div>
    </div>
   
  );
};

export default About;