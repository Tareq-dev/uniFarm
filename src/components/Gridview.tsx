import React from 'react';
import ftx from '../images/ftx.png'
import link from '../images/link.png'
import usdt from '../images/usdt.png'
import uni from '../images/uni.png'
import boost from '../images/boost.png'
import pool from '../images/pool.png'
import { MdCalculate } from 'react-icons/md';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import u1 from '../images/u1.png'
import u2 from '../images/u2.png'
import d3 from '../images/d3.png'
import a1 from '../images/a1.png'
import a2 from '../images/a2.png'
import a3 from '../images/a3.png'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import b3 from '../images/b3.png'
import p from '../images/p.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'

const Gridview = () => {
     const percentageusdt = 80;
     const percentageuftx = 75;
     const percentagelink = 25;
     const percentageylo = 25;
     return (
          <div className="grid md:grid-cols-3 gap-3 py-8">
              <div className='border p-4 rounded-lg'>
               <div className='flex'>
               <img src={usdt} alt="" />
               <div className='mx-4 mt-4'>
                    <p className='text-gray-500'>Cohort 29</p>
                    <p className='font-bold'> USDT</p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='text-gray-500 w-32'>Pool Filled</p>
                    <div className='flex items-center'>
             <div className='w-8'>
              <CircularProgressbar  value={percentageusdt} styles={{
               root: {
                    borderRadius:50,
               },
               path: {
                    strokeWidth:25,
                    stroke: '#009F42',
               },
               trail: {
                    strokeWidth:25,
                    stroke: '#d6d6d6',
               },
               }} />
              </div>
              <p className='font-bold mx-2'>93.86%</p>
             </div>
               </div>
               <div className='flex mt-8 w-64 justify-between'>
                    <p className='w-36 text-gray-500'>Rewards</p>
                    <div className="avatar-group -space-x-2 mx-4">
               <div className="avatar">
               <div className="w-12">
                    <img src={u1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={u2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={d3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2'></p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='w-36 text-gray-500'>APY</p>
                    <p className='mx-0 font-bold'> 94.08%</p>
               </div>
               <div className='flex mt-4 items-center'>
               <p className='px-2 w-full py-3 border-2 text-blue-500  flex items-center text-sm text-center border-blue-300  rounded-xl'><img className='w-4 inline-block h-4 mx-2' src={boost} alt="" />Get upto 200%</p>
                    <button className='mx-4 text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white delay-75 hover:shadow-2xl text-xl font-bold px-10 py-2 rounded-lg'> Stack</button>
               </div>
              </div>
              <div className='border p-4 rounded-lg'>
               <div className='flex'>
               <img src={ftx} alt="" />
               <div className='mx-4 mt-4'>
                    <p className='text-gray-500'>Cohort 29</p>
                    <p className='font-bold'> FTX</p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='text-gray-500 w-36'>Pool Filled</p>
                    <div className='flex items-center'>
             <div className='w-8'>
              <CircularProgressbar value={percentageuftx} styles={{
               root: {
                    borderRadius:50,
               },
               path: {
                    strokeWidth:25,
                    stroke: '#009F42',
               },
               trail: {
                    strokeWidth:25,
                    stroke: '#d6d6d6',
               },
               }} />
              </div>
              <p className='font-bold mx-2'>78.57%</p>
             </div>
               </div>
               <div className='flex mt-8 w-64 justify-between'>
                    <p className='w-36 text-gray-500'>Rewards</p>
                    <div className="avatar-group -space-x-2 mx-4">
               <div className="avatar">
               <div className="w-12">
                    <img src={a1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={a2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={a3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2'></p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='w-36 text-gray-500'>APY</p>
                    <p className='mx-0 font-bold'> 93.86%</p>
               </div>
               <div className='flex mt-4 items-center'>
               <p className='px-2 w-full py-3 border-2 text-blue-500  flex items-center text-sm text-center border-blue-300  rounded-xl'><img className='w-4 inline-block h-4 mx-2' src={boost} alt="" />Boosted</p>
                    <button className='mx-4 text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white delay-75 hover:shadow-2xl text-xl font-bold px-10 py-2 rounded-lg'> Stack</button>
               </div>
              </div>
              <div className='border p-4 rounded-lg'>
               <div className='flex'>
               <img src={link} alt="" />
               <div className='mx-4 mt-4'>
                    <p className='text-gray-500'>Cohort 29</p>
                    <p className='font-bold'> LINK</p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='text-gray-500 w-36'>Pool Filled</p>
                    <div className='flex items-center'>
             <div className='w-8'>
              <CircularProgressbar value={percentagelink} styles={{
               root: {
                    borderRadius:50,
               },
               path: {
                    strokeWidth:25,
                    stroke: '#C62828',
               },
               trail: {
                    strokeWidth:25,
                    stroke: '#d6d6d6',
               },
               }} />
              </div>
              <p className='font-bold mx-2'>24.90%</p>
             </div>
               </div>
               <div className='flex mt-8 w-64 justify-between'>
                    <p className='w-36 text-gray-500'>Rewards</p>
                    <div className="avatar-group -space-x-2 mx-4">
               <div className="avatar">
               <div className="w-12">
                    <img src={b1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={b2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={b3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2'></p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='w-36 text-gray-500'>APY</p>
                    <p className='mx-0 font-bold'> 22.97%</p>
               </div>
               <div className='flex mt-4 items-center'>
               <p className='px-2 w-full py-3 border-2 text-blue-500  flex items-center text-sm text-center border-blue-300  rounded-xl'><MdCalculate className='text-sky-500 mx-2' size={20} />Calculate APY</p>
                    <button className='mx-4 text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white delay-75 hover:shadow-2xl text-xl font-bold px-10 py-2 rounded-lg'> Stack</button>
               </div>
              </div>
              <div className='border p-4 rounded-lg'>
               <div className='flex'>
               <img src={uni} alt="" />
               <div className='mx-4 mt-4'>
                    <p className='text-gray-500'>UFARM-CTR DSAmpe...</p>
                    <p className='font-bold'> UNI</p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='text-gray-500 w-32'>Pool Filled</p>
                    <div className='flex items-center'>
             <div className='w-8'>
              <CircularProgressbar  value={percentageusdt} styles={{
               root: {
                    borderRadius:50,
               },
               path: {
                    strokeWidth:25,
                    stroke: '#009F42',
               },
               trail: {
                    strokeWidth:25,
                    stroke: '#d6d6d6',
               },
               }} />
              </div>
              <p className='font-bold mx-2'>93.86%</p>
             </div>
               </div>
               <div className='flex mt-8 w-64 justify-between'>
                    <p className='w-36 text-gray-500'>Rewards</p>
                    <div className="avatar-group -space-x-2 mx-4">
               <div className="avatar">
               <div className="w-12">
                    <img src={u1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={u2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={d3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2'></p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='w-36 text-gray-500'>APY</p>
                    <p className='mx-0 font-bold'> 94.08%</p>
               </div>
               <div className='flex mt-4 items-center'>
               <p className='px-2 w-full py-3 text-blue-500  border-2  flex items-center text-sm text-center border-blue-300  rounded-xl'><MdCalculate className='text-sky-500 mx-2' size={20} />Calculate APY</p>
                    <button className='mx-4 text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white delay-75 hover:shadow-2xl text-xl font-bold px-10 py-2 rounded-lg'> Stack</button>
               </div>
              </div>
              <div className='border p-4 rounded-lg'>
               <div className='flex'>
               <img src={ftx} alt="" />
               <div className='mx-4 mt-4'>
                    <p className='text-gray-500'>Cohort 29</p>
                    <p className='font-bold'> FTX</p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='text-gray-500 w-32'>Pool Filled</p>
                    <div className='flex items-center'>
             <div className='w-8'>
              <CircularProgressbar  value={percentageuftx} styles={{
               root: {
                    borderRadius:50,
               },
               path: {
                    strokeWidth:25,
                    stroke: '#009F42',
               },
               trail: {
                    strokeWidth:25,
                    stroke: '#d6d6d6',
               },
               }} />
              </div>
              <p className='font-bold mx-2'>78.57%</p>
             </div>
               </div>
               <div className='flex mt-8 w-64 justify-between'>
                    <p className='w-36 text-gray-500'>Rewards</p>
                    <div className="avatar-group -space-x-2 mx-4">
               <div className="avatar">
               <div className="w-12">
                    <img src={a1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={a2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={a3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2'></p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='w-36 text-gray-500'>APY</p>
                    <p className='mx-0 font-bold'> 93.86%</p>
               </div>
               <div className='flex mt-4 items-center'>
               <p className='px-2 w-full py-3 border-2  flex items-center text-sm text-center border-blue-300 text-blue-500  rounded-xl'><img className='w-4 inline-block h-4 mx-2' src={boost} alt="" />Get upto 254%</p>
                    <button className='mx-4 text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white delay-75 hover:shadow-2xl text-xl font-bold px-10 py-2 rounded-lg'> Stack</button>
               </div>
              </div>
              <div className='border p-4 rounded-lg'>
               <div className='flex'>
               <img src={pool} alt="" />
               <div className='mx-4 mt-4'>
                    <p className='text-gray-500'>Cohort 29</p>
                    <p className='font-bold'> LINK</p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='text-gray-500 w-32'>Pool Filled</p>
                    <div className='flex items-center'>
             <div className='w-8'>
              <CircularProgressbar  value={percentageylo} styles={{
               root: {
                    borderRadius:50,
               },
               path: {
                    strokeWidth:25,
                    stroke: '#FBB500',
               },
               trail: {
                    strokeWidth:25,
                    stroke: '#d6d6d6',
               },
               }} />
              </div>
              <p className='font-bold mx-2'>24.90%</p>
             </div>
               </div>
               <div className='flex mt-8 w-64 justify-between'>
                    <p className='w-36 text-gray-500'>Rewards</p>
                    <div className="avatar-group -space-x-2 mx-4">
               <div className="avatar">
               <div className="w-12">
                    <img src={p} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={p2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-12">
                    <img src={p3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2'></p>
               </div>
               </div>
               <div className='flex mt-8'>
                    <p className='w-36 text-gray-500'>APY</p>
                    <p className='mx-0 font-bold'> 94.08%</p>
               </div>
               <div className='flex mt-4 items-center'>
               <p className='px-2 w-full py-3 border-2 text-blue-500 flex items-center text-sm text-center border-blue-300  rounded-xl'><img className='w-4 inline-block h-4 mx-2' src={boost} alt="" />Boosted</p>
                    <button className='mx-4 text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white delay-75 hover:shadow-2xl text-xl font-bold px-10 py-2 rounded-lg'> Stack</button>
               </div>
              </div>
          </div>
     );
};

export default Gridview;