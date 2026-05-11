function Navbar() {
    return (
      <nav className="navbar w-full">
  
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between">
  
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3 cursor-pointer flex-shrink-0">
  
            {/* Accent Dot */}
            <div className="w-8 h-8 rounded-full bg-[#9a7b4f]"><img src="\earth.png" alt=""  height={1000} width={1000}/></div>
  
            {/* Logo */}
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
              Yasogi
            </h1>
  
          </div>
  
          {/* CENTER LINKS */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 text-[15px] text-gray-700">
  
            <a className="hover:text-black transition duration-300 cursor-pointer">
              About
            </a>
  
            <a className="hover:text-black transition duration-300 cursor-pointer">
              Projects
            </a>
  
            <a className="hover:text-black transition duration-300 cursor-pointer">
              Experience
            </a>
  
            <a className="hover:text-black transition duration-300 cursor-pointer">
              Contact
            </a>
  
          </div>
  
          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
  
            {/* GitHub Button */}
            <button className="secondary-button flex items-center gap-2">
  
              <img
                src="/github.png"
                alt="GitHub"
                className="w-4 h-4 object-contain"
              />
  
              <span className="hidden md:block ">
                GitHub
              </span>
  
            </button>
  
            {/* Resume Button */}
            <button className="primary-button whitespace-nowrap gap-5">
              Resume
            </button>
  
          </div>
  
        </div>
  
      </nav>
    )
  }
  
  export default Navbar