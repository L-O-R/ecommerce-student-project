import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`px-6 py-3 transition-all duration-300 ease-linear cursor-pointer ${className}`}>
        {children}
    </button>
  )
}

export default Button
