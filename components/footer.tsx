import React from 'react'

function Footer() {
  return (
    <footer className="text-white py-6 bg-[#181818]">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/samiul-islam-1700251a2/" target="_blank" className="text-gray-400 hover:text-white">
          LinkedIn
        </a>
        <a href="https://github.com/samiulislam09" target="_blank" className="text-gray-400 hover:text-white">
          GitHub
        </a>
        <a href="https://codeforces.com/profile/sawon19" target="_blank" className="text-gray-400 hover:text-white">
          Codeforces
        </a>
        <a href="https://www.hackerrank.com/profile/samiulislamsawo1" target="_blank" className="text-gray-400 hover:text-white">
          Hackerrank
        </a>
      </div>

      <p className="text-gray-400">&copy; 2024 Samiul Islam. All rights reserved.</p>

    
    </div>
  </div>
</footer>

  )
}

export default Footer