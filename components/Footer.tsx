function Footer() {
    return (
        <div className='flex p-5 justify-evenly items-center border-t-2 border-red-600'>
            <p className='font-yellowtail'>
                &#169; {` David Cho ${new Date().getFullYear()}`}
            </p>
            <p>For inquiries: hoopslam@gmail.com</p>
        </div>
    );
}

export default Footer;
