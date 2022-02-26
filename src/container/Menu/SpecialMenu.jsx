import { data, images } from '../../constants'
import MenuItem from '../../components/Menuitem/MenuItem'

function SpecialMenu() {
  
  return (

  <div className="min-h-screen py-8 px-10 flex flex-col bg-black text-center">

    <div className='flex flex-col justify-center items-center'>
      <p className='text-white font-cormorant text-lg md:text-2xl font-bold'>Menu That Fits You Palatte</p>
      <img src={images.spoon}  className='w-12' alt=''></img>
      <h1 className='font-cormorant text-yellow-200 md:text-7xl text-5xl '>Today's Special</h1>
    </div>

    <div className='flex flex-col md:flex-row'>
      <div className=''>
        <h2 className='font-cormorant text-white text-3xl md:text-5xl'>Wine & Beer</h2>
        {data.wines.map((wine, index) => (
          <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
        ))}
      </div>

      <div className='flex justify-center items-center'>
        <img src={images.menu} className='md:w-4/6' alt="menu__img" />
      </div>

      <div className=''>
        <h2 className='font-cormorant text-white text-3xl md:text-5xl'>Cocktails</h2>
        {data.cocktails.map((cocktail, index) => (
          <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
        ))}
      </div>
    </div>
    
  </div>



)
}

export default SpecialMenu