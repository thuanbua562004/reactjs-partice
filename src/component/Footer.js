import acessLogo from "../acess";

export default function Footer(params) {
  return (
    <>
      <div className="dark:bg-color-dark bg-[#07266f] text-white dark:text-black border-t-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-center font-bold text-xl mb-8">
            Follow us For further information
          </h2>
          <form className="flex justify-center mb-20">
            <input
              className="rounded-l-full py-3 px-6 text-gray-600 dark:text-black w-80 focus:outline-none"
              placeholder="Enter Your Email"
              type="email"
            />
            <button
              className="bg-[#1bc47d] font-bold rounded-r-full px-8 text-white hover:bg-[#17a96a] transition"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <img
                alt="Nasarna logo"
                className="w-[220px] h-[60px]"
                src="https://nasarna-react.wpocean.com/static/media/logo.450df77d.png"
              />
              <p className="text-sm leading-relaxed max-w-xs">
                Build and Earn with your online store with lots of cool and exclusive wpo-features
              </p>
              <div className="flex space-x-6 text-white dark:text-black text-lg">
                <a aria-label="Facebook" className="hover:text-[#1bc47d]" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a aria-label="Twitter" className="hover:text-[#1bc47d]" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a aria-label="Instagram" className="hover:text-[#1bc47d]" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a aria-label="Google Plus" className="hover:text-[#1bc47d]" href="#">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Top News</h3>
              <div className="flex space-x-4 mb-6">
                <img
                  alt="Children"
                  className="w-16 h-16 object-cover"
                  src="https://storage.googleapis.com/a1aa/image/935bf338-d89d-486f-ac9a-500ad73e7b85.jpg"
                />
                <div>
                  <h4 className="font-bold text-sm leading-snug">
                    Education for all<br /><span>poor children</span>
                  </h4>
                  <p className="text-xs mt-1">12 Nov, 2020</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <img
                  alt="Children"
                  className="w-16 h-16 object-cover"
                  src="https://storage.googleapis.com/a1aa/image/4db7f3e1-f5f6-441e-9981-96ed6c02ee95.jpg"
                />
                <div>
                  <h4 className="font-bold text-sm leading-snug">
                    Education for all<br /><span>poor children</span>
                  </h4>
                  <p className="text-xs mt-1">12 Nov, 2020</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Useful Links</h3>
              <ul className="space-y-4 text-sm">
                <li>About Us</li>
                <li>Our Causes</li>
                <li>Our Mission</li>
                <li>Contact Us</li>
                <li>Our Event</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <p className="text-sm max-w-xs mb-6">
                Online store with lots of cool and exclusive wpo-features
              </p>
              <ul className="space-y-4 text-sm max-w-xs">
                <li className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>28 Street, New York City, USA</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-phone"></i>
                  <span>+000123456789</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fas fa-envelope"></i>
                  <span>nasarna@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-[#1bc47d] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#17a96a] transition"
        >
          <i className="fas fa-arrow-up text-white"></i>
        </button>
      </div>
    </>
  );
}
