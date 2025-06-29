import BLUG from "../../assets/blug.svg"
const Footer = () => {
    return (
      <div className="bg-[#423E40] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex space-x-6 mb-4">
              <img 
                src="https://via.placeholder.com/100x40?text=Logo1" 
                alt="Logo 1" 
                className="h-10"
              />
              <img 
                src={BLUG}
                alt="Logo 2" 
                className="h-10"
              />
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              GO OPEN SOURCE !!
            </p>
          </div>
  
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>082388304818 - Aurel</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>087851618604 - Kayla</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Jl Ahmad Yani Politeknik Negeri Batam, Batam, Riau, Indonesia 29431</span>
              </li>
            </ul>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/home" className="hover:text-gray-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-300">
        Open Source Competition 2025. Batam Linux User Group.
        </div>
      </div>
    );
  };
  
  export default Footer;