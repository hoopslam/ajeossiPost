function Footer() {
    return (
        <div className='flex flex-col p-5 justify-evenly items-center border-t-2 border-red-600 sm:flex-row'>
            <p className='font-yellowtail'>
                &#169; {` David Cho ${new Date().getFullYear()}`}
            </p>
            <p>
                For inquiries:{' '}
                <a href='mailto: davidchocode@gmail.com'>
                    davidchocode@gmail.com
                </a>
            </p>
        </div>
    );
}

export default Footer;
