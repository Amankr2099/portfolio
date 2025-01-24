import React from 'react'

const Footer = () => {
  const date = new Date();

  return (
    <div className=" w-full  text-white pt-12 text-center  pb-9 text-xs bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="pb-2">
          <i className="fa-solid fa-location-dot" /> New Delhi, India
        </div>

        <div>Aman Kumar ©{date.getFullYear()} Copyright        </div>
      </div>
  )
}

export default Footer
