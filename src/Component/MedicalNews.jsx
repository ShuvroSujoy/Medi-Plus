import MedicalNewsSlider from './MeicalNewsSlider';
const MedicalNews = () => {
    return (
        <div className='my-10'>
            <div className='flex flex-col justify-center items-center gap-5 my-10' >
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-Inter text-center lg:w-1/2 md:w-1/2 w-4/6'>Keep Up With Our Most Recent Medical News.</h1>
                <img className='h-6 w-12' src="public/img/section-img.png" alt="" />
                <p className='text-base font-medium text-[#878797] text-center'>Loren ipsum dolor sit amet consectetur adipiscing elit praesent aliquet.<br /> pretiumts</p>
            </div>
            <div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-5 p-10'>
                <div className='flex flex-col justify-start gap-5 w-5/6 lg:w-1/3 md:w-1/3 bg-slate-200 rounded-b-md mb-10'>
                    <div >
                        <img src="public/img/blog-sidebar2.jpg" alt="" className='h-full w-full' />
                    </div>
                    <div className='p-5 flex flex-col gap-3'>
                        <div className='bg-blue-600 p-1  rounded text-white text-center w-32 lg:w-40'>
                            <p>22 Aug, 2020</p>

                        </div>
                        <h3 className='text-xl font-Inter hover:text-blue-600'>We have annnocuced our new product</h3>
                        <p className='text-base text-[#878797]'>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start gap-5 w-5/6 lg:w-1/3 md:w-1/3 bg-slate-200 rounded-b-md mb-10'>
                    <div >
                        <img src="public/img/blog-sidebar3.jpg" alt="" className='h-full w-full' />
                    </div>
                    <div className='p-5 flex flex-col gap-3'>
                        <div className='bg-blue-600 p-1  rounded text-white text-center w-32 lg:w-40'>
                            <p>15 Jul, 2020</p>

                        </div>
                        <h3 className='text-xl font-Inter  hover:text-blue-600'>Top five way for solving teeth problems</h3>
                        <p className='text-base text-[#878797]'>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start gap-5 w-5/6 lg:w-1/3 md:w-1/3 bg-slate-200 rounded-b-md mb-10'>
                    <div >
                        <img src="public/img/blog-sidebar1.jpg" alt="" className='h-full w-full' />
                    </div>
                    <div className='p-5 flex flex-col gap-3'>
                        <div className='bg-blue-600 p-1  rounded text-white text-center w-32 lg:w-40'>
                            <p>05 Jan, 2020</p>

                        </div>
                        <h3 className='text-xl font-Inter hover:text-blue-600'>We provide highly business solutions.</h3>
                        <p className='text-base text-[#878797]'>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</p>
                    </div>
                </div>
            </div>
            <MedicalNewsSlider />
        </div>
    );
};

export default MedicalNews;