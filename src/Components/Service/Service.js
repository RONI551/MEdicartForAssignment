
import React from 'react';
import {  Link, useNavigate } from 'react-router-dom';



import img from '../../images/medicart carousel image/Service1.png'
import img2 from '../../images/medicart carousel image/Service2.png'
import img3 from '../../images/medicart carousel image/Service3.png'
import img4 from '../../images/medicart carousel image/Service4.png'
import img5 from '../../images/medicart carousel image/Service5.png'
import img6 from '../../images/medicart carousel image/Service6.png'
const Service = () => {




    return (
        <div>
            <div>
                {// Services Section Start 
                }
                <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] container">
                    <div class="container">
                        <div class="flex flex-wrap -mx-4">
                            <div class="w-full px-4">
                                <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                                    <span class="font-extrabold text-4xl text-primary mb-2 block text-indigo-900 font-mono">
                                        Our Services
                                    </span>
                                    <h2
                                        class="
                    
                    text-2xl
                    sm:text-6xl
                    md:text-[40px]
                    lg:text-6xl
                    text-dark
                    mb-4
                    text-red-600 font-extrabold font-sans "
                                    >
                                        What We Offer
                                    </h2>
                                    <p class="text-xl text-body-color text-slate-700 font-serif">
                                        We are dedicated to providing best-in-class services and outcomes through Respiratory and Sleep Therapy
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-4">
                            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    class="
                 p-10
                 md:px-7
                 xl:px-10
                 rounded-[20px]
                 bg-white
                 shadow-md
                 hover:shadow-lg
                 mb-8
                 "
                                >
                                    <div
                                        class="
                    
                    flex
                    items-center
                    justify-center
                    bg-primary
                    rounded-2xl
                    mb-8
                    "
                                    >
                                        <img src={img} alt="" />
                                    </div>
                                    <h4 class="font-semibold text-xl text-dark mb-3 text-blue-800 ">
                                        Cardiology
                                    </h4>
                                    <p class="text-body-color text-slate-700 font-serif">
                                        Our cardiology department is highly dedicated exclusively to patients.Cardiology is the study and treatment of disorders of the heart and the blood.
                                    </p>

      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-2 border border-blue-500 hover:border-transparent rounded"><Link to="/servicedetails">Read More</Link></button>

                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    class="
                 p-10
                 md:px-7
                 xl:px-10
                 rounded-[20px]
                 bg-white
                 shadow-md
                 hover:shadow-lg
                 mb-8
                 "
                                >
                                    <div
                                        class="
                 
                    flex
                    items-center
                    justify-center
                    bg-primary
                    rounded-2xl
                    mb-8
                    "
                                    >
                                        <img src={img2} alt="" />
                                    </div>
                                    <h4 class="font-semibold text-xl text-dark mb-3 text-blue-800">
                                        Surgery
                                    </h4>
                                    <p class="text-body-color text-slate-700 font-serif">
                                        Our experience and volumes of treatment are considerable, providing a valuable base for development of new treatments and basic research
                                    </p>
                                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-2 border border-blue-500 hover:border-transparent rounded">Read More</button>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    class="
                 p-10
                 md:px-7
                 xl:px-10
                 rounded-[20px]
                 bg-white
                 shadow-md
                 hover:shadow-lg
                 mb-8
                 "
                                >
                                    <div
                                        class="
                 
                    flex
                    items-center
                    justify-center
                    bg-primary
                    rounded-2xl
                    mb-8
                    "
                                    >
                                        <img src={img3} alt="" />
                                    </div>
                                    <h4 class="font-semibold text-xl text-dark mb-3 text-blue-800">
                                        Psychiatry
                                    </h4>
                                    <p class="text-body-color text-slate-700 font-serif">
                                        Our Psychiatrists are qualified and experienced to give you the best level of care. Being able to be your true self is one of the strongest components of good health.
                                    </p>
                                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-2 border border-blue-500 hover:border-transparent rounded"><Link to="/servicedetails">Read More</Link></button>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    class="
                 p-10
                 md:px-7
                 xl:px-10
                 rounded-[20px]
                 bg-white
                 shadow-md
                 hover:shadow-lg
                 mb-8
                 "
                                >
                                    <div
                                        class="
                 
                    flex
                    items-center
                    justify-center
                    bg-primary
                    rounded-2xl
                    mb-8
                    "
                                    >
                                        <img src={img4} alt="" />
                                    </div>
                                    <h4 class="font-semibold text-xl text-dark mb-3 text-blue-800">
                                        Orthopedics
                                    </h4>
                                    <p class="text-body-color text-slate-700 font-serif">
                                        Our Orthopaedics doctor are fully capable in serving the best medical treatment.overuse and sports injuries, including tendinitis, meniscus tears.
                                    </p>
                                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-2 border border-blue-500 hover:border-transparent rounded"><Link to="/servicedetails">Read More</Link></button>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    class="
                 p-10
                 md:px-7
                 xl:px-10
                 rounded-[20px]
                 bg-white
                 shadow-md
                 hover:shadow-lg
                 mb-8
                 "
                                >
                                    <div
                                        class="
                   
                    flex
                    items-center
                    justify-center
                    bg-primary
                    rounded-2xl
                    mb-8
                    "
                                    >
                                        <img src={img5} alt="" />
                                    </div>
                                    <h4 class="font-semibold text-xl text-dark mb-3 text-blue-800">
                                        Endocrinology
                                    </h4>
                                    <p class="text-body-color text-slate-700 font-serif">
                                        Our team of endocrinologists and endocrine surgeons work together to provide the most comprehensive care for our patients.
                                    </p>
                                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-2 border border-blue-500 hover:border-transparent rounded"><Link to="/servicedetails">Read More</Link></button>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    class="
                 p-10
                 md:px-7
                 xl:px-10
                 rounded-[20px]
                 bg-white
                 shadow-md
                 hover:shadow-lg
                 mb-8
                 "
                                >
                                    <div
                                        class="
                  
                    flex
                    items-center
                    justify-center
                    bg-primary
                    rounded-2xl
                    mb-8
                    "
                                    >
                                        <img src={img6} alt="" />
                                    </div>
                                    <h4 class="font-semibold text-xl text-dark mb-3 text-blue-800">
                                        Oncology
                                    </h4>
                                    <p class="text-body-color text-slate-700 font-serif">
                                        Our oncologist specializes in the most current methods to diagnosis and treat cancer while striving to preserve an excellent quality of life for the patient
                                    </p>
                                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 my-2 border border-blue-500 hover:border-transparent rounded"><Link to="/servicedetails">Read More</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                { //!-- ====== Services Section End -->
                }
            </div>
        </div>
    );
};

export default Service;