import { Button } from '@mui/material';
import React from 'react';
import img from '../../images/medicart carousel image/Team1.png'
import img2 from '../../images/medicart carousel image/Team2.png'
import img3 from '../../images/medicart carousel image/Team3(2).png'

const Team = () => {
    var sectionStyle = {  
        backgroundImage: "url(' + 'https://images.unsplash.com/photo-1616110123973-dc6d1d44ed9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' + ')",
        backgroundPosition: 'center',
        backgroundSize: '',
        backgroundRepeat: 'no-repeat'
      };
    return (
        <section style={sectionStyle}>
        <div className='container'>
        <h1 className='   text-2xl
        sm:text-6xl
        md:text-[40px]
        lg:text-6xl
        text-dark
        mb-4
        text-red-800 underline font-extrabold font-serif text-center p-10'>Our Team</h1>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
     {  // <!--Card 1-->
     }
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img class=" w-full" src={img} alt="Mountain"/>
          <div class="px-6 py-4">
            <div className='bg-gray-200 rounded-full'><p class="font-bold text-blue-800 text-2xl mb-2 text-center">Dr. Sara Gray</p>
            <p className='text-center text-blue-600 font-bold'>SERGEON</p>
            </div>

          <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">saturday-Sunday <span className='ml-24 '> 8.00-17.00</span></p>
          <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">saturday-Monday <span className='ml-24 '> 10.00-16.00</span></p>
          <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">Monday-Sunday <span className='ml-24 '> 12.00-14.00</span></p>
          </div>
          <div class="px-6 pt-4 pb-2 text-red-400 text-center">
         <Button className='text-red-400 text-center'>Read Profile</Button>
          </div>
        </div>
       { //<!--Card 2-->
     }
     <div class="rounded overflow-hidden shadow-lg bg-white">
     <img class=" w-full" src={img3} alt="Mountain"/>
     <div class="px-6 py-4">
       <div className='bg-gray-200 rounded-full'><p class="font-bold text-blue-800 text-2xl mb-2 text-center">Dr. Kamal Miah</p>
       <p className='text-center text-blue-600 font-bold'>THERAPIST</p>
       </div>

     <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">saturday-Sunday <span className='ml-24 '> 9.00-15.00</span></p>
     <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">saturday-Monday <span className='ml-24 '> 7.00-16.00</span></p>
     <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">Monday-Sunday <span className='ml-24 '> 8.00-14.00</span></p>
     </div>
     <div class="px-6 pt-4 pb-2 text-red-400 text-center">
    <Button className='text-red-400 text-center'>Read Profile</Button>
     </div>
   </div>
    
        {//<!--Card 3-->
        }
        <div class="rounded overflow-hidden shadow-lg bg-white">
          <img class=" w-full" src={img2} alt="Mountain"/>
          <div class="px-6 py-4">
            <div className='bg-gray-200 rounded-full'><p class="font-bold text-blue-800 text-2xl mb-2 text-center">Dr. Lisa Weilder</p>
            <p className='text-center text-blue-600 font-bold'>DENTIST</p>
            </div>

          <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">saturday-Sunday <span className='ml-24 '> 7.00-11.00</span></p>
          <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">saturday-Monday <span className='ml-24 '> 10.00-13.00</span></p>
          <p class="text-gray-700 text-base p-5 pb-2 border-b-2 ">Monday-Sunday <span className='ml-24 '> 12.00-19.00</span></p>
          </div>
          <div class="px-6 pt-4 pb-2 text-red-400 text-center">
         <Button className='text-red-400 text-center'>Read Profile</Button>
          </div>
        </div>
      </div>
    </div>
    </section>
      
    );
};

export default Team;