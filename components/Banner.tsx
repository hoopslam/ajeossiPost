const Banner = () => {
    return (
        <div className='flex flex-col items-center lg:flex-row lg:space-x-5 justify-between font-bold p-10 w-full'>
            <h1 className='text-5xl sm:text-7xl md:text-5xl p-5'>
                The Ajeossi Post
            </h1>

            <p className='flex justify-center items-center text-gray-500 lg:max-w-sm lg:px-5'>
                Life in Korea | Ramblings of a grizzled old Ajeossi |
                Spontaneous cat pics
            </p>
        </div>
    );
};

export default Banner;
