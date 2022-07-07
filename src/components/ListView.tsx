import React from 'react';
import boost from '../images/boost.png'
import ftx from '../images/ftx.png'
import link from '../images/link.png'
import dai from '../images/dai.png'
import uni from '../images/uni.png'
import dot from '../images/dot.png'
import a1 from '../images/a1.png'
import a2 from '../images/a2.png'
import a3 from '../images/a3.png'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import b3 from '../images/b3.png'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import d1 from '../images/d1.png'
import d2 from '../images/d2.png'
import d3 from '../images/d3.png'
import { MdLocalFireDepartment } from 'react-icons/md';
import { MdCalculate } from 'react-icons/md';
const ListView = () => {
     return (
        <div>
          <div className='flex border-b-2 mt-4 py-4'>
          <div className="avatar">
          <div className="w-20 rounded-full">
          <img src={ftx} alt="people" />
          </div>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500'>Cohort 29 <MdLocalFireDepartment className='mx-4 text-amber-400' size={20} /></p>
               <p className='font-bold text-md mt-4'>FTX</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 text-gray-500'>Pool Filled</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>Rewards</p>
               <div className="avatar-group -space-x-2">
               <div className="avatar">
               <div className="w-8">
                    <img src={a1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={a2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={a3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2 text-md text-gray-500'>+2</p>
               </div>
</div>
<div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>APY</p>
               <p className='font-bold text-xl'>93.86%</p>
          </div>
          <div className='flex items-center text-center'>
              <p className='px-2 border-2 flex items-center text-sm text-center border-blue-300 h-8 rounded-xl'><img className='w-4 inline-block h-4 mx-2' src={boost} alt="" />Get Upto 200%</p>
          </div>
          </div>
          <div className='flex border-b-2 mt-4 py-4'>
          <div className="avatar">
          <div className="w-20 rounded-full">
          <img src={link} alt="" />
          </div>
          </div>
          <div className='mx-8 w-28'>
               <p className='text-sm mt-2 flex text-gray-500'>Cohort 29</p>
               <p className='font-bold text-md mt-4'>LINK</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 text-gray-500'>Pool Filled</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>Rewards</p>
               <div className="avatar-group -space-x-2">
               <div className="avatar">
               <div className="w-8">
                    <img src={b1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={b2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={b3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2 text-gray-500 text-md'>+4</p>
               </div>
</div>
<div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>APY</p>
               <p className='font-bold text-xl'>22.97%</p>
          </div>
          <div className='flex items-center text-center'>
              <p className='px-2 border-2 flex items-center bg-sky-100 text-sm text-center border-blue-300 h-8 rounded-xl'><img className='w-4 inline-block h-4 mx-2' src={boost} alt="" />Boosted</p>
          </div>
          </div>
          <div className='flex border-b-2 mt-4 py-4'>
          <div className="avatar">
          <div className="w-20 rounded-full">
          <img src={dai} alt="" />
          </div>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500'>Cohort 29 <MdLocalFireDepartment className='mx-4 text-amber-400' size={20} /></p>
               <p className='font-bold text-md mt-4'>Dai</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 text-gray-500'>Pool Filled</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>Rewards</p>
               <div className="avatar-group -space-x-2">
               <div className="avatar">
               <div className="w-8">
                    <img src={c1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={c2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={c3} alt="people"/>
               </div>
               </div>
               </div>
</div>
<div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>APY</p>
               <p className='font-bold text-xl'>39.28%</p>
          </div>
          <div className='flex items-center text-center'>
              <p className='px-4 border-2 flex items-center mx-4 text-sm text-center border-blue-300 h-8 rounded-xl'><MdCalculate className='text-sky-500 mx-2' size={20} />Calculate APY</p>
          </div>
          </div>
          <div className='flex border-b-2 mt-4 py-4'>
          <div className="avatar">
          <div className="w-20 rounded-full">
          <img src={uni} alt="" />
          </div>
          </div>
          <div className='mx-4'>
               <p className='text-sm mt-2 flex text-gray-500'>UFARM-CTR DSAmpe...</p>
               <p className='font-bold text-md mt-4'>UNI</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 text-gray-500'>Pool Filled</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>Rewards</p>
               <div className="avatar-group -space-x-2">
               <div className="avatar">
               <div className="w-8">
                    <img src={d1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={d2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={d3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2'></p>
               </div>
               </div>
<div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>APY</p>
               <p className='font-bold text-xl'>96.41%</p>
          </div>
          <div className='flex items-center text-center'>
          <p className='px-2 border-2 bg-sky-100 flex items-center text-sm text-center border-blue-300 h-8 rounded-xl'><img className='w-4 inline-block h-4 mx-2' src={boost} alt="" />Get Upto 265%</p>
          </div>
          </div>
          <div className='flex border-b-2 mt-4 py-4'>
          <div className="avatar">
          <div className="w-20 rounded-full">
          <img src={dot} alt="" />
          </div>
          </div>
          <div className='mx-8 w-28'>
               <p className='text-sm mt-2 flex text-gray-500'>Cohort 31</p>
               <p className='font-bold text-md mt-4'>DOT</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 text-gray-500'>Pool Filled</p>
          </div>
          <div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>Rewards</p>
               <div className="avatar-group -space-x-2">
               <div className="avatar">
               <div className="w-8">
                    <img src={d1} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={d2} alt="people"/>
               </div>
               </div>
               <div className="avatar">
               <div className="w-8">
                    <img src={d3} alt="people"/>
               </div>
               </div>
               <p className='px-2 mt-2'></p>
               </div>
               </div>
<div className='mx-8'>
               <p className='text-sm mt-2 flex text-gray-500 mb-2'>APY</p>
               <p className='font-bold text-xl'>96.41%</p>
          </div>
          <div className='flex items-center text-center'>
          <p className='px-4 border-2 flex items-center mx-4 text-sm text-center border-blue-300 h-8 rounded-xl'><img className='w-4 inline-block h-4 mx-2' src={boost} alt="" />Get Upto 200%</p>
          </div>
          </div>
        </div>
     );
};

export default ListView;