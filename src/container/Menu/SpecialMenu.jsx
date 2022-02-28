import { data, images } from '../../constants'
import MenuItem from '../../components/Menuitem/MenuItem'
import Button from '../../components/Button/Button'

function SpecialMenu() {
  
  return (

  <div className="min-h-screen py-16 px-24flex flex-col bg-black text-center">

    <div className='flex flex-col justify-center items-center'>
      <p className='text-white font-cormorant text-lg md:text-2xl font-bold'>Menu That Fits You Palatte</p>
      <img src={images.spoon}  className='w-12 mb-5' alt=''></img>
      <h1 className='font-cormorant text-yellow-200 md:text-7xl text-5xl mb-5 '>Today's Special</h1>
    </div>

    <div className='my-5 flex flex-col lg:flex-row lg:justify-between '>

      <div className='my-5 lg:w-full flex flex-col'>
        <h2 className='font-cormorant text-white text-3xl md:text-5xl'>Wine & Beer</h2>
        {data.cocktails.map((wine, index) => (
          <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
        ))}
      </div>

      <img src={images.menu} className='lg:mx-5 lg:h-[50rem]' alt='' />

      <div className='my-5 lg:w-full flex flex-col'>
        <h2 className='font-cormorant text-white text-3xl md:text-5xl'>Cocktails</h2>
        {data.cocktails.map((cocktail, index) => (
          <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
        ))}
      </div>
    </div>

    <div className='flex justify-center items-center'>
      <Button>View More</Button>
    </div>
  </div>
  



)
}

export default SpecialMenu