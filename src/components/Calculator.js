import React from "react";

const Card = () => {
    return (
        <div>
           <div className="calcard flex flex-col gap-10 place-content-evenly w-80 bg-base-100 shadow-xl p-10 rounded-t-3xl rounded-bl-3xl rounded-br-70 md w-10/12 mt-10 ml-10 ">

            <div className="date flex flex-row place-content-evenly gap-5 md w-2/3 gap-10">
            <div className="day flex flex-col items-start">
            <span className="label-text text-smokey-grey md pb-2">DAY</span>
            <input type="text" className="input input-bordered w-full max-w-m rounded-lg" />
            </div>
            <div className="month flex flex-col items-start">
            <span className="label-text text-smokey-grey md pb-2">MONTH</span>
            <input type="text" className="input input-bordered w-full max-w-m rounded-lg" />
            </div>
            <div className="year flex flex-col items-start">
            <span className="label-text text-smokey-grey md pb-2">YEAR</span>
            <input type="text" className="input input-bordered w-full max-w-m rounded-lg" />
            </div>
            </div>

            <div className="line-with-logo flex flex-col items-center relative">
            <div className="logo w-16 h-16 rounded-full bg-purple flex items-center justify-center z-20 md absolute right-0 w-20 h-20">
                <svg width="46" height="44" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="white" strokeWidth="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
                </g>
                </svg>
            </div>
            <div className="w-1/2 h-0.5 bg-light-grey w-72 absolute top-8 md w-11/12 absolute top-10 left-0"></div>
            </div>


                
            <div className="age flex flex-col items-start font-poppins font-bold italic text-5xl md text-8xl mt-10">
                    <div>
                    <span className="text-purple text-start pr-2">38</span>
                    years
                    </div>
                
                    <div>
                    <span className="text-purple text-start pr-2">3</span>
                    months
                    </div>
                
                    <div>
                    <span className="text-purple text-start pr-2">26</span>
                    days
                    </div>




            </div>

            </div> 

        </div>
    )
  }
  
  export default Card;