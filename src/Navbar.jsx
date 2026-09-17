function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-8 py-4">
      <div className="flex items-center justify-between">

        {/* Logo / Name */}
        <h2 className="text-xl font-bold">
          SHARDA
        </h2>

        {/* Menu */}
        <div className="flex items-center gap-8">

          {/* Home */}
          <a
            href="#"
            className="hover:text-blue-300 transition"
          >
            Home
          </a>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-300 transition">
              About ▾
            </button>

            <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-56 top-7 left-0 z-50">

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Placements Report
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Library
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Events
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Hostel
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Fee Structure
              </a>

            </div>
          </div>

          {/* Registration Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-300 transition">
              Registration ▾
            </button>

            <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-56 top-7 left-0 z-50">

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Sports Club
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Music Club
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Dance Club
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Environment Club
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Drama Society
              </a>

            </div>
          </div>

          {/* Contact Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-300 transition">
              Contact ▾
            </button>

            <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-56 top-7 right-0 z-50">

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Admission Cell
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Placement Cell
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Sharda Tech
              </a>

              <a
                href="#"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Complaint
              </a>

            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;