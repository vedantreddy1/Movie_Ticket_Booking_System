
import Balls from '../ExtrasPages/Balls'
import Coursel from '../ExtrasPages/Coursel'
import Cards from '../ExtrasPages/Cards'

const Home = () => {
  return (
    <div className='bg-gray-700'>
    <br />
      <Balls />
      <Coursel />
      <Balls /> <br />
      <br />
      
      <div className="ml-14 pl-52">
        <h2 className="text-2xl font-bold bgamber-500 text-center text-amber-300">Recomemeded movies</h2>

        <br />
        <Cards />
      </div>
    
    </div>
  );
}

export default Home
