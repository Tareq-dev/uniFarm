import React, {  useState } from 'react';

import logo from '../images/logo.png'
import earn from '../images/earn.png'
import trade from '../images/trade.png'
import bridge from '../images/bridge.png'
import grov from '../images/grov.png'
import support from '../images/support.png'

import { BsListTask } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { FiGrid } from 'react-icons/fi';
import ListView from './ListView';
import Gridview from './Gridview';
import Navbar from './Navbar';

const Dashboard = () => {
     const [list,setList] = useState(false);
     const [grid,setGrid] = useState(false);

     const listView = () => {
          setList(true);
          setGrid(false);
     }
     const gridView = () => {
          setGrid(true);
          setList(false);
          }
    
     return (
          <div className='flex'>
           <div className='w-56 bg-gray-200 max-h-full px-4 hidden md:block'>
               <img className='mt-12 w-28 ml-6' src={logo} alt="" />
               <p className='text-xl flex items-center mt-10'> <AiOutlineHome className='mx-2' size={20} /> Dashboard</p>
               
               <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li>
        <a className='text-xl flex items-center mt-2' href="/"> <img className='mx-2 w-4' src={earn} alt="" /> Earn
          <svg className="fill-current mt-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a href='/'>All Farms</a></li>
          <li><a href='/'>My Stakes</a></li>
        </ul>
      </li>
      
    </ul>
    <ul className="menu menu-horizontal p-0">
      <li>
        <a className='text-xl flex items-center mt-2' href="/"> <img className='mx-2 w-4' src={trade} alt="" /> Trade
          <svg className="fill-current mt-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a href='/'>Exchange</a></li>
          <li><a href='/'>Liquidity</a></li>
        </ul>
      </li>
    </ul>
  </div>
               <p className='text-xl flex items-center mt-4'><img className='mx-4 w-4' src={bridge} alt="" /> Bridge</p>
               <p className='text-xl flex items-center mt-4'><img className='mx-4 w-4' src={grov} alt="" /> Governance</p>
               <p className='text-xl flex items-center mt-4 mx-12'>Referral</p>
               <p className='text-xl flex items-center mt-4 pt-96'><img className='mx-4 w-8' src={support} alt="" /> Support</p>
               </div>   
               <div className='w-full px-10'>
                    <Navbar />
                    <hr />
                    <div className='flex mt-6 justify-between'>
                    <div className='flex'>
                    <h2 className='text-4xl px-4 text-purple-800 font-semibold border-r-2'>Farms</h2>
                    <p className='w-80 text-md mt-2 px-2 text-gray-500'>Stake one token and earn multiple token as
rewards with high APY and low risk</p>
                    </div>
                    <div className="form-control mx-6">
                    <label className="label cursor-pointer">
                    <input type="checkbox" className="toggle toggle-accent" checked />
                    <label className='mx-2'>V2</label>
                    </label>
                    </div>
                    </div>
                    <div className='flex mx-12 mt-10 border-b-2'>
                    <button className='px-16 bg-purple-200 text-purple-800 font-semibold border-b-4 border-purple-700 py-2'>ALL FARMS</button>
                    <button className='px-16'>HOT FARMS</button>
                    </div>
                    <div className='flex justify-between mt-20'>
                        <div className='flex'>
                        <input className='border-neutral-500 border-b mb-4 border-gray-500 w-28 text-sm' value='Search' />
                        <input className='border-neutral-500 border-b mb-4 border-gray-500 mx-12 w-40 text-sm' value='Sort By' />
                        </div>
                         <div className='flex rounded-2xl border'>
                         <button onClick={listView} className={list ? "bg-blue-300  rounded-l-2xl p-2" : "p-2 rounded-l-2xl"}><BsListTask size={25} /></button>
                         <button onClick={gridView} className={grid ? "bg-blue-300 text-white rounded-r-2xl p-2" : "rounded-r-2xl p-2"}><FiGrid size={25} /></button>
                         </div>
                    </div>
                   { list ?
                    <ListView />:<Gridview /> }
    </div>  
    </div>
     );
};

export default Dashboard;