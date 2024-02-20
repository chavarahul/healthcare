import { poppin } from '../constants';
import Active from '../Components/Active';

const Home = () => {

  return (
    <section className='min-h-[85vh] w-full relative flex-center' id='home'>
      <div className='w-[60%] min-h-[80vh] relative'>
        <div className='w-[82%] min-h-[80vh] absolute right-0 top-0 flex-center'>
          <div className='w-full relative h-[60vh] flex-center flex-col mt-20 ml-4'>
            <div className='w-[50%] h-[85%] rounded-full bg-[#11081f] absolute left-[-95px] top-[-50px] circleH text-white animateBounce'></div>
            <div className='w-full h-[65%] -mt-8'>
              <div className='w-full flex space '>
                <h3
                  className={`text-3xl mr-9 ${poppin.className} font-semibold space leading-[3rem] mix-blend-difference text-white mt-3`}
                >
                  <span className='r'><i className='bi bi-menu'></i>Doctors-only hub for detailed patient insights, ensuring precision in personalized care.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[40%] min-h-[80vh] relative flex items-center justify-end'>
        <div className='h-[50vh] w-[35%] relative flex-center'>
          <div className='w-[10%] h-[20%] flex-center fixed top-80'>
            <Active />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
