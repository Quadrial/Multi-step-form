import React, { useState, useEffect } from "react";
import { Switch } from "@material-tailwind/react";

const plans = [
  {
    image: "images/icon-arcade.svg",
    title: "Arcade",
    mprice: "$9/mo",
    yprice: "$90/yr",
    free: "2 months free",
  },
  {
    image: "images/icon-advanced.svg",
    title: "Advanced",
    mprice: "$12/mo",
    yprice: "$120/yr",
    free: "2 months free",
  },
  {
    image: "images/icon-pro.svg",
    title: "Pro",
    mprice: "$15/mo",
    yprice: "$150/yr",
    free: "2 months free",
  },
];

export const Plan01 = () => {
  const [isYearly, setisYearly] = useState(() => {
    const savedState = localStorage.getItem("isYearly");
    return savedState ? JSON.parse(savedState) : true;
  });

  const [selectedPlan, setSelectedPlan] = useState(() => {
    const savedPlan = localStorage.getItem("selectedPlan");
    return savedPlan ? JSON.parse(savedPlan) : plans[0];
  });

  useEffect(() => {
    localStorage.setItem("isYearly", JSON.stringify(isYearly));
  }, [isYearly]);

  useEffect(() => {
    localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
  }, [selectedPlan]);

  const handleChange = (event) => {
    setisYearly(event.target.checked);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-2 p-2">
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <figure className="-mt-10 flex flex-col md:flex-col md:gap- lg:gap-16 lg:flex-row">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => handlePlanSelect(plan)}
              className={`p-2 gap-2 border-[3px] border-solid rounded-[20px] h-auto w-auto md:w-[150px] mt-10 flex md:gap-2 lg:flex-col md:flex-col ${
                selectedPlan.title === plan.title
                  ? "bg-slate-500 border-[3px] border-solid border-Marineblue"
                  : "border-gray-300"
              }`}
            >
              <img
                className="w-[8vw] lg:w-[2.5vw] md:w-[10vw]"
                src={plan.image}
                alt={plan.title}
              />
              <div className="flex-col">
                <div className="text-Marineblue font-[600]">{plan.title}</div>
                <p>{isYearly ? plan.yprice : plan.mprice}</p>
                <div className="text-Marineblue font-[600]">
                  {isYearly ? plan.free : ``}
                </div>
              </div>
            </button>
          ))}
        </figure>
      </div>
      <main className="flex justify-center border-[3px] border-solid rounded-[20px] p-2 bg-blue-gray-200 mt-[5vw] ring-offset-blue-gray-200 items-center">
        <div className="flex items-center">
          <span
            className={`mr-2 ${
              isYearly ? "text-blue-gray-600" : "text-Marineblue"
            }`}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onChange={handleChange}
            color="Marineblue"
            label=""
          />
          <span
            className={`ml-2 ${isYearly ? "text-Marineblue" : "text-gray-600"}`}
          >
            Yearly
          </span>
        </div>
      </main>
    </section>
  );
};

export default Plan01;
