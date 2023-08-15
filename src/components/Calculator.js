import React from "react";

const Card = () => {
    return (
        <div>
           <div className="calcard flex flex-col gap-10 place-content-evenly w-80 bg-base-100 shadow-xl p-10 rounded-t-3xl rounded-bl-3xl rounded-br-70">

            <div className="date flex flex-row place-content-evenly gap-5">
            <div className="day flex flex-col items-start">
            <span className="label-text text-smokey-grey">DAY</span>
            <input type="text" className="input input-bordered w-full max-w-xs rounded-lg" />
            </div>
            <div className="month flex flex-col items-start">
            <span className="label-text text-smokey-grey">MONTH</span>
            <input type="text" className="input input-bordered w-full max-w-xs rounded-lg" />
            </div>
            <div className="year flex flex-col items-start">
            <span className="label-text text-smokey-grey">YEAR</span>
            <input type="text" className="input input-bordered w-full max-w-xs rounded-lg" />
            </div>
            </div>

            <div className="line-with-logo flex flex-col items-center relative">
            <div className="logo w-16 h-16 rounded-full bg-purple flex items-center justify-center z-20">
                <svg width="46" height="44" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="white" strokeWidth="2">
                    <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
                </g>
                </svg>
            </div>
            <div className="w-1/2 h-0.5 bg-light-grey w-72 absolute top-8"></div>
            </div>


                
            <div className="age flex flex-col items-start font-poppins font-bold italic text-5xl">
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