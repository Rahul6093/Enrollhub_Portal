export const Contact = () => {
    return (
        <>


    <div id='contact' className="flex flex-col md:flex-row py-10 px-5 w-[93%] mx-auto">
        
        <div className="font-['Petrona'] p-10 space-y-5 ">
            <div className="text-5xl">Lets Chat</div>
            <div className="text-xl text-justify">Have questions? Want to enroll or collaborate as a teacher? We’d love to hear from you</div>
        </div>

      <div className="font-['Manrope'] min-w-[60vw] md:pt-8 py-2 px-10">
      <div className="mx-auto">
        <div className="mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
              <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your name" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
              <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your email" name="email" id="email" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
              <textarea className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" rows={4} placeholder="Enter your message" name="message" id="message" defaultValue={""} />
            </div>
            <button className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>

    </div>
        </>
    );
}