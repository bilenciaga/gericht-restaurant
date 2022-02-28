import { images } from "../../constants"


function Chef() {
  return (
    <div className='min-h-screen py-8 px-10 flex flex-col md:flex-row md:justify-between bg-black'>

    <div  className="flex justify-center items-center">
      <img src={images.chef} className='w-full lg:w-3/4' alt=''></img>
    </div>

    <div className='flex flex-col my-10'>

      <p className="text-white font-cormorant text-lg md:text-2xl text-left font-bold">Chef’s Word</p>
      <img src={images.spoon}  className='w-12' alt=''></img>
      <h1 className="font-cormorant text-yellow-200 mt-5 text-center md:text-left md:text-7xl text-5xl ">What We Believe In</h1>

      <div className="flex flex-col text-sm mt-5">
        <div className="flex justify-start items-center">
          <img src={images.quote} className='w-[47px] h-[35px] mr-2 mb-2'alt="" />
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>
        </div>
        <p className="text-white">Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
        <p className="mt-5 mb-2 text-yellow-200 font-cormorant text-2xl">Kevin Lou</p>
        <p className="mb-10 text-white">Chef & Founder</p>
        <img src={images.sign} className='lg:w-3/4' alt=''></img>
      </div>

    </div>



  </div>
  )
}

export default Chef