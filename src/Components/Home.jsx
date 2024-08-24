import React, {useEffect, useState} from 'react'
import cities from './jsSupportFiles/cityByStates.json'

export default function Home() {
  const [jsonData, setJsonData] = useState({
    source: '',
    destination: '',
    date: ''
  })
  const [citiesOptions, setCityOptions] = useState([])
  useEffect(() => {
    setCityOptions([...cities])
    let sourcePopup = document.getElementById('sourceSuggestions')
    let destPopup = document.getElementById('destSuggestions')
    sourcePopup.style.display = 'none'
    destPopup.style.display = 'none'
  }, [])
  const sourceInput = (e) => {
    if(e.target.type === 'number' || e.target.type === 'text' || e.target.type === 'textarea'){
        console.log(e)
        setJsonData({
            ...jsonData,
            [e.target.id]: e.target.value
        })
    }
  }
  const HandlePopup = (e, type) => {
    let sourcePopup = document.getElementById('sourceSuggestions')
    let destPopup = document.getElementById('destSuggestions')
    if(type == 'source'){
      if(e.type == 'focus') {
        sourcePopup.style.display = 'block'
      }
      else sourcePopup.style.display = 'none'
    } else {
      if(e.type == 'focus') destPopup.style.display = 'block'
      else destPopup.style.display = 'none'
    }
    setCityOptions([...cities])
  }

  const selectCity = () => {
    console.log('object')
    // console.log(name)
    // let sourceInput = document.getElementById('source')
    // let destInput = document.getElementById('destination')
    // if(type == 'source'){
    //   console.log(sourceInput)
    // } else {
    //   console.log(destInput)
    // }
  }
  return (
    <section className="bg-[url('/img/bus_img.avif')] w-full bg-center bg-cover flex justify-center items-center h-96">
        <div className="p-5 bg-white w-fit h-fit shadow-xl rounded flex justify-center items-center">
            <div className='relative'>
              <input type="text" id="source" onInput={sourceInput} placeholder="From" className="outline-none min-w-52" onFocus={(e) => HandlePopup(e, 'source')} onBlur={(e) => HandlePopup(e, 'source')}/>
              <ul className="statedropdown absolute top-12 bg-white shadow-lg rounded w-full max-h-40 overflow-scroll" id="sourceSuggestions">
                {citiesOptions.map((x, x_index) => (
                  <li className='py-1 px-3 shadow shadow-blue-500/40 hover:shadow-indigo-500/40' key={"destination"+x_index}>
                    <div onClick={() => selectCity}>
                      {x.name}    
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <input type="text" id="destination" onInput={sourceInput} placeholder="To" className="outline-none min-w-52" onFocus={(e) => HandlePopup(e, 'destination')} onBlur={(e) => HandlePopup(e, 'destination')}/>
              <ul className="statedropdown absolute top-12 bg-white shadow-lg rounded w-full max-h-40 overflow-scroll" id="destSuggestions">
                {citiesOptions.map((x, x_index) => (
                  <li className='py-1 px-3 shadow shadow-blue-500/40 hover:shadow-indigo-500/40' key={"destination"+x_index}>
                    <div onClick={() => selectCity}>
                      {x.name}    
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <input type="date" id="journey_date" className="outline-none" />
        </div>
    </section>
  )
}
