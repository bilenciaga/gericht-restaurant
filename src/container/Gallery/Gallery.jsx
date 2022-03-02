import { images } from '../../constants';
import Button from '../../components/Button/Button';
import { useRef } from 'react'; 
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };




  return(
  <div className='py-8 px-10 lg:py-16 lg:px-24 bg-black flex flex-col lg:flex-row lg:justify-between '>

    <div className="flex flex-col w-full justify-center items-start">
      <p className="font-cormorant text-white text-lg md:text-2xl font-bold tracking-wider">Instagram</p>
      <img src={images.spoon} className='w-12 mb-5' alt=''></img>
      <h1 className='font-cormorant text-yellow-200 md:text-7xl text-5xl mb-5'>Photo Gallery</h1>
      <p className='text-white font-sans tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <div className='my-10'>
        <Button>View More</Button>
      </div>
    </div>

    <div className='flex flex-row relative max-w-[50%]'>
      <div className='flex flox-row overflow-x-scroll overflow-y-hidden w-max h-full no-scrollbar' ref={scrollRef}>
        {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
          <div className='relative flex justify-center items-center mr-3 min-w-[300px] h-[450px]' key={index}>
            <img src={image} className='h-full w-full' alt=''></img>
          </div>
        ))}
      </div>

      <div className='w-full flex justify-between items-center absolute bottom-[5px]'>
        <div className='p-0.5 m-1 border border-black rounded bg-black'>
          <BsArrowLeftShort className='text-yellow-400 text-3xl' onClick={() => scroll('left')} />
        </div>
        
        <div className='p-0.5 m-1 border border-black rounded bg-black'>
          <BsArrowRightShort className='text-yellow-400 text-3xl' onClick={() => scroll('right')}  />
        </div>
    </div>
    
    </div>




  </div>
  )
};

export default Gallery;
