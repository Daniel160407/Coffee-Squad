import React from 'react'
import Button from '../src/components/uiComponents/Button';
import { Link } from 'react-router';

const Header = () => {
  return (
    <>
      <header className="w-full flex flex-row h-20 bg-[#303058] items-center justify-around">
        <div className='flex flex-row gap-6 items-center cursor-pointer'>
          <img src="./images/logo.jpg" className="w-[50px] h-auto rounded-full"/>
          <a href='/'>
            <div className='flex flex-col'>
                <h1 className='text-white'>CoffeFitness</h1>
                <p className='text-gray-400'>Better fitness and health</p>
            </div>
          </a>
        </div>
        <div className="flex flex-row gap-5">
          <Button
            title={"Cycling"}
            style={"outline-1 outline-lime-400 bg-white"}
          />
          <Button title={"Runing"} style="bg-lime-400" />
        </div>
      </header>
    </>
  );
}

export default Header
