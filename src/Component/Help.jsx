
import { ImHome3 } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { TfiFaceSmile} from 'react-icons/tfi';
import { VscCalendar} from 'react-icons/vsc';
import { FaAmbulance} from 'react-icons/fa';
import { RiStethoscopeLine} from 'react-icons/ri';
import CountUp from 'react-countup';
const Help = () => {
    return (
        <div className='my-10'>
            <div className='flex flex-col justify-center items-center gap-5 my-10' >
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-Inter text-center lg:w-1/2 md:w-1/2 w-4/6'>We Are Always Ready To Help You & Your Family</h1>
                <img className='h-6 w-12' src="public/img/section-img.png" alt="" />
                <p className='text-base font-medium text-[#878797] text-center'>Loren ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.<br/> pretiumts</p>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center lg:flex lg:flex-row md:flex  md:flex-row mb-10'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='border border-solid p-8 rounded-full text-blue-600 hover:text-white hover:bg-blue-600'>
                            <FaAmbulance size={40}/>
                        </div>
                        <h2 className='text-3xl font-Inter'>Emergency Help</h2>
                        <p className='text-base text-[#9999b5] w-80 text-center'>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                    </div>
                    <h1 className='text-5xl text-blue-600 hidden lg:flex md:flex relative -top-20'>..........</h1>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='border border-solid p-8 rounded-full text-blue-600 hover:text-white hover:bg-blue-600'>
                            <FaAmbulance size={40}/>
                        </div>
                        <h2 className='text-3xl font-Inter'>Enriched Pharmecy</h2>
                        <p className='text-base text-[#9999b5] w-80 text-center'>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                    </div>
                    <h1 className='text-5xl text-blue-600 hidden lg:flex md:flex relative -top-20'>..........</h1>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='border border-solid p-8 rounded-full text-blue-600 hover:text-white hover:bg-blue-600'>
                            <RiStethoscopeLine size={40}/>
                        </div>
                        <h2 className='text-3xl font-Inter'>Medical Treatment</h2>
                        <p className='text-base text-[#9999b5] w-80 text-center'>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[url('public/img/fun-bg.jpg')] bg-no-repeat bg-cover bg-center w-full">
                <div className='relative  w-full bg-[#176ABC] bg-opacity-70 flex justify-center items-center p-32'>
                    <div className='grid md:grid-cols-2 lg:flex gap-20'>
                        <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-center items-center gap-2'>
                            <div className='border border-2 hover:bg-white rounded-full p-5 text-white hover:text-[#176ABC]'>
                                <ImHome3 size={30} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                            <number className='text-white font-Inter text-3xl'><CountUp start={0} end={3468}/></number>
                            <p className='text-white'>Hospital Rooms</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-center items-center gap-2'>
                            <div className='border border-2 hover:bg-white rounded-full p-5 text-white hover:text-[#176ABC]'>
                                <FaUser size={30} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                            <number className='text-white font-Inter text-3xl'><CountUp start={0} end={527}/></number>
                            <p className='text-white'>Specialist Doctors</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-center items-center gap-2'>
                            <div className='border border-2 hover:bg-white rounded-full p-5 text-white hover:text-[#176ABC]'>
                                <TfiFaceSmile size={30} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                            <number className='text-white font-Inter text-3xl'><CountUp start={0} end={4379}/></number>
                            <p className='text-white'>Happy Patients</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-center items-center gap-2'>
                            <div className='border border-2 hover:bg-white rounded-full p-5 text-white hover:text-[#176ABC]'>
                                <VscCalendar size={30} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                            <number className='text-white font-Inter text-3xl'><CountUp start={0} end={32}/></number>
                            <p className='text-white'>Years of Experience</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Help;