function HeroSection() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row px-20 py-12 items-center">
                <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl md:6xl leading-8 sm:leading-12 font-poppins font-extrabold">Your Feet Deserve The Best</h2>
                    <p className="text-xs text-gray w-1/2">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="Hero-buttons flex gap-5">
                        <button className="bg-red text-xs px-3 py-1 text-white font-semibold cursor-pointer">Shop Now</button>
                        <button className="text-gray font-semibold text-xs px-3 py-1 border border-gray cursor-pointer">Category</button>
                    </div>
                    <div className="available-on">
                        <p className="text-xs text-gray">Also Available on</p>
                        <div className="flex gap-4 my-2">
                            <img src="/amazon.png" alt="amazon-logo" />
                            <img src="/flipkart.png" alt="flipkart-logo" />
                        </div>
                    </div>
                </div>
                <div className="hero-image flex justify-center">
                    <img className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px]" src="/shoe_image.png" alt="shoe-image" />
                </div>
            </div>
        </>
    )
}

export default HeroSection;