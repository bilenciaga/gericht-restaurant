import { images } from "../../constants"


function Chef() {
  return (
  <div className='min-h-screen py-8 px-10 md:py-16 md:px-24 flex flex-col lg:flex-row md:justify-between lg:items-between bg-black'>

    <div  className="flex justify-center items-center h-full my-auto">
      <img src={images.chef} className='w-full lg:w-4/5' alt=''></img>
    </div>

    <div className='flex flex-col mx-auto lg:mx-10 my-auto'>

      <p className="text-white font-cormorant  mt-5 text-lg md:text-2xl text-left font-bold">Chef’s Word</p>
      <img src={images.spoon}  className='w-12 mb-5' alt=''></img>
      <h1 className="font-cormorant text-yellow-200 mb-5 text-left md:text-7xl text-5xl ">What We Believe In</h1>

      <div className="flex flex-col text-sm mt-5">
        <div className="flex justify-start items-center">
          <img src={images.quote} className='w-[47px] h-[35px] mr-2 mb-2'alt="" />
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>
        </div>
        <p className="text-white">Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
        <p className="mt-5 mb-2 text-yellow-200 font-cormorant text-2xl">Kevin Lou</p>
        <p className="mb-10 text-white">Chef & Founder</p>
        <img src={images.sign} className='w-3/4' alt=''></img>
      </div>

    </div>



  </div>
  )
}

export default Chef