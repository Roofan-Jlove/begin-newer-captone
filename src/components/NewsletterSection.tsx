export default function NewsletterSection() {
  return (
    <main>
      <div className="w-full max-w-[1169px] mx-auto text-center mb-12 flex flex-col sm:flex-row gap-8 sm:gap-12 px-4 sm:px-8">
        <div className="flex flex-col mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
          </h2>
          <p className="text-sm sm:text-base mb-6">
            Don&apos;t wait, make a smart & logical quote here. I&apos;s pretty easy.
          </p>
        </div>

        <form className="w-full sm:w-auto flex flex-col sm:flex-row items-center mt-6 sm:mt-10">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-[#FF9F0D] px-6 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      <div className="w-full max-w-[1169px] mx-auto flex justify-center items-center px-4 sm:px-8">
        <hr className="border-[#FF9F0D] my-6 w-full sm:w-5/6" />
      </div>
    </main>
  );
}
