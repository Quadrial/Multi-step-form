import { useState, useEffect } from "react";

const Pick = [
  {
    name: "Online service",
    title: "Access to multiplayer games",
    mprice: "+$1/mo",
    yprice: "+$10/yr",
  },
  {
    name: "Larger storage",
    title: "Extra 1TB of cloud save",
    mprice: "+$2/mo",
    yprice: "+$20/yr",
  },
  {
    name: "Customizable Profile",
    title: "Custom theme on your profile",
    mprice: "+$2/mo",
    yprice: "+$20/yr",
  },
];

export const Plan02 = ({ isYearly }) => {
  const [selectedAddons, setSelectedAddons] = useState({});

  useEffect(() => {
    // Load selected add-ons from local storage when the component mounts
    const storedAddons = JSON.parse(localStorage.getItem("selectedAddons"));
    if (storedAddons) {
      setSelectedAddons(storedAddons);
    }
  }, []);

  const handleAddonSelect = (addon) => {
    // Update the selected add-ons and store in local storage immediately
    setSelectedAddons((prevAddons) => {
      const updatedAddons = {
        ...prevAddons,
        [addon.name]: !prevAddons[addon.name], // Toggle the selected state
      };

      // Store the updated add-ons in local storage
      localStorage.setItem("selectedAddons", JSON.stringify(updatedAddons));

      return updatedAddons;
    });
  };

  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-2 p-5">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </div>
        <main>
          {Pick.map((addon, index) => (
            <div
              key={index}
              className="mt-1 border-[3px] border-solid rounded-[20px] p-"
            >
              <div className="flex gap-2">
                <input
                  className="ml-2 w-6"
                  type="checkbox"
                  checked={selectedAddons[addon.name] || false}
                  onChange={() => handleAddonSelect(addon)}
                />
                <div>
                  <div className="text-Marineblue font-[600]">{addon.name}</div>
                  <p>{addon.title}</p>
                </div>
                <div>
                  <div
                    className={`mt-7 md:mt-4 ${
                      selectedAddons[addon.name]
                        ? "text-Marineblue"
                        : "text-blue-gray-600"
                    }`}
                  >
                    {isYearly ? addon.mprice : addon.yprice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Plan02;
