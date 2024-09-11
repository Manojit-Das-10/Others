import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className= "bg-dark-bg w-[100vw] h-[100vh] flex justify-center items-center">

      <div className='flex items-center justify-center text-white border-none bg-slate-500  h-[90%] w-[95%] rounded-[20px] '>
        

        {/* Left Empty Section */}
        <div className="hidden w-1/2 lg:flex bg-ultra-gray h-[85%] ml-5 rounded-2xl">
        
        </div>

        {/* Right Section */}
        <div className="w-full p-8 lg:w-1/2">

          {/* Navbar section */}
          <div className='bg-gray w-[90%] ml-7 rounded-2xl p-3 relative' >
            
            <img className='absolute ' src='Question.png'></img>
            
            <img className='absolute right-1 top-[30%]' src='Line.png'></img>

            <img className='absolute left-1 top-[45%]' src='Frame.png'></img>
            
            {/* Tabs Section */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-around border-none h-[40px] w-[70%] rounded-2xl bg-dark-bg">
                <button
                  onClick={() => setActiveTab("about")}
                  className={` text-[16px] font-normal h-8 -ml-3 rounded-2xl bg-gray w-[30%] ${activeTab === "about"}`}>
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab("experiences")}
                  className={`text-[16px] font-normal ${activeTab === "experiences"}`}>
                  Experiences
                </button>
                <button
                  onClick={() => setActiveTab("recommended")}
                  className={`text-[16px] font-normal -mr-2 ${activeTab === "recommended"}`}>
                  Recommended
                </button>
              </div>
            </div>

            {/* Content based on active tab */}
            <div className="pl-7">
              {activeTab === "about" && (
                <div className='w-[93%]'>
                  <p className="text-light-gray">
                    Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                  </p>
                  <p className="mt-4 text-light-gray">
                    I was born and raised in Albany, NY & have been living in Santa Carla for
                    the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.
                  </p>
                </div>
              )}
              {activeTab === "experiences" && (
                <div>
                <p className="text-light-gray">
                  This is Experiences section
                  Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                </p>
                <p className="mt-4 text-light-gray">
                  I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.
                </p>
              </div>
              )}
              {activeTab === "recommended" && (
                <div>
                <p className="text-light-gray">
                  This is Recommended section
                  Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                </p>
                <p className="mt-4 text-light-gray">
                  I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.
                </p>
              </div>
              )}
            </div>
            
          </div>
          

          {/* Gallery Section */}
          <div className=" flex flex-col bg-gray w-[90%] ml-7 rounded-2xl p-3 relative mt-5">
            
            <img className='absolute w-6 h-6 top-6' src='Question.png'></img>

            <img className='absolute w-4 h-6 top-[50%]' src='Frame.png'></img>
            
            <div className="flex items-center justify-between ml-10">
              
              <h2 className="w-24 h-10 pt-2 font-semibold text-center w-text-lg rounded-xl bg-dark-bg">Gallery</h2>
              
              <div className='flex items-center'>
                <button className="h-10 px-4 py-2 text-sm font-semibold uppercase rounded-full btn-shadow bg-zinc-600 custom-shadow hover:bg-gray-600">+ Add Image</button>
                <div className='flex'>
                  <img className='h-20 cursor-pointer' src='Left Arrow.png'></img>
                  <img className='h-20 cursor-pointer' src='Right Arrow.png'></img>            
                  
                </div>
              </div> 
              
            </div>

            {/* Image Thumbnails Row */}
            <div className="flex mt-4 justify-evenly">
              <img className='h-[150px] ' src='Gallery img.png'></img>
              <img className='h-[150px]' src='Gallery img.png'></img>
              <img className='h-[150px]' src='Gallery img.png'></img>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default App;
