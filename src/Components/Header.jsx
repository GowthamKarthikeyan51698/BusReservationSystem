import React from 'react'

export default function Header() {
  return (
    <header className="h-20 bg-emerald-400 flex justify-between items-center px-5">
      <h1 className="font-bold text-5xl	text-white">BMS</h1>
      <div>
        <i className="fa-solid fa-right-to-bracket text-white"></i>
        <span className="pl-2 text-white">Login</span>
      </div>
    </header>
  )
}
