import React from 'react';
import image from '../../images/medicart carousel image/admission.jpg'
const Guide = () => {
    return (
        <div>
     
       <div className='flex justify-end'>
       <div className='pl-10'>
       <h1 className='  text-5xl font-bold text-pink-600 pt-28 leading-tight  pt-64'>Hospital Admission Introductions:</h1>
       <p className='text-slate-700 font-serif pt-10  text-base'>There may come a time when you or a loved one may need to be  admitted to a hospital. Today's large urbans<br /> hospital can be confusing and somewhat frightening for someone not familiar with how they work.<br /> In general, there are two major types of hospital admissions, emergent and elective.

       Emergent hospital admissions <br />usually happen when a patient seen in the emergency department is subsequently admitted to the hospital.<br /> Elective hospital admissions occur when a doctor requests a bed to be reserved for a patient on a specific day.<br /> The patient then checks in at the admissions office and does not go to the emergency department.<br /> Elective admissions make up the majority of hospital admissions, but this percentage varies markedly with some <br /> hospitals.
       
       To get the most out of your hospital stay, the following article provides you information on these vital issues:</p>

       <ol className='pt-10 text-lg font-bold'>
      <li>1. Factors that influence whether you will be admitted to the hospital</li>
      <li>2. What happens once you are admitted</li>
      <li>3.  Your rights as a patient</li>
      <li>4. How to improve your or a family member's care during and after the admission process</li>
       
       </ol>
       
       </div>
       
       <div className='p-16 pb-10 pt-64  w-3/6 inline-block'><img className=' justify-end items-end rounded-xl  ' src={image} alt="" /></div>
            
      
       </div>
       <div class="copyright-text text-center p-28">
       <p>Copyright &copy; 2018, All Right Reserved <a href="https://www.fiverr.com/users/ronii45">MediCare</a></p>
   </div>
        </div>
    );
};

export default Guide;