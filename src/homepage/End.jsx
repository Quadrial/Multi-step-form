import React from "react";

export const End = ({ onChangePlan }) => {
  const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan")) || {};
  const selectedAddons =
    JSON.parse(localStorage.getItem("selectedAddons")) || {};

  const isYearly = localStorage.getItem("isYearly") === "true";

  const addonsPrices = {
    "Online service": isYearly ? 10 : 9,
    "Larger storage": isYearly ? 20 : 12,
    "Customizable Profile": isYearly ? 20 : 15,
  };

  const totalAddonCost = Object.keys(selectedAddons).reduce((total, addon) => {
    return selectedAddons[addon] ? total + addonsPrices[addon] : total;
  }, 0);

  const planCost = isYearly
    ? parseFloat(selectedPlan.yprice.replace("$", "").replace("/yr", ""))
    : parseFloat(selectedPlan.mprice.replace("$", "").replace("/mo", ""));

  const totalCost = planCost + totalAddonCost;

  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-2 p-5">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>
        <main className="lg:mt-10 md:mt-10 mt-2">
          <section className="border border-solid rounded-md bg-blue-gray-50 p-5">
            <div className="flex justify-between">
              <p>
                {selectedPlan.title} ({isYearly ? "Yearly" : "Monthly"})
              </p>
              <div>{isYearly ? selectedPlan.yprice : selectedPlan.mprice}</div>
            </div>

            {/* Navigate to Plan01 when "Change" is clicked */}
            <a
              href="#"
              onClick={onChangePlan}
              className="text-Marineblue underline"
            >
              Change
            </a>

            <hr className="mt-5 border border-deep-purple-200" />

            <div className="lg:mt-10 md:mt-10 mt-5 flex flex-col gap-5">
              {Object.keys(selectedAddons).map((addon, index) => {
                return selectedAddons[addon] ? (
                  <div key={index} className="flex justify-between">
                    <div>{addon}</div>
                    <div>
                      ${addonsPrices[addon]} {isYearly ? "/yr" : "/mo"}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </section>
          <div className="lg:mt-10 md:mt-10 mt-5 flex justify-between">
            <div>Total ({isYearly ? "per year" : "per month"})</div>
            <div className="text-blue-900 font-bold">
              +${totalCost.toFixed(2)} {isYearly ? "/yr" : "/mo"}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default End;
