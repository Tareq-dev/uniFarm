import React from 'react';
import logo from '../images/uniLogo.png'
import ox from '../images/ox.png'
import eth from '../images/eth.png'
import setting from '../images/setting.png'

const Navbar = () => {
     return (
          <div className='flex pt-4'>
          <div className="navbar bg-base-100">
          <div className="flex-none">
          <button className="btn btn-square btn-ghost">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          </div>
          </div> 
          <div>
             <p className='border flex items-center py-2 pr-6 rounded-xl'> <img src={logo} className='px-2' alt="" /> 13.4622</p>
          </div>
          <div>
             <p className='border flex items-center py-2 mx-6 px-6 pl-4 rounded-xl'>0xF1....sc <img src={ox} className='px-2' alt="" /></p>
          </div>
          <div>
             <p className='border flex items-center py-2 mx-4 pr-6 rounded-xl'> <img src={eth} className='px-2' alt="" /> Ethereum</p>
          </div>
          <img className='w-5 h-5 mt-4 mx-4' src={setting} alt="" />
          </div>
     );
};

export default Navbar;