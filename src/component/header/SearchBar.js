import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './SearchBar.css'
export default function SearchBar() {
  return (
    <header>
          <button className='search-btn'><BsSearch className='search-icon'size={30}/></button>
          <form id="search">
          <input className="searchTask" type="text" placeholder="Search..."></input>
          </form>
    </header>
  )
}

