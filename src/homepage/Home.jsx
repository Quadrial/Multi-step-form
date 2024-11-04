import React, { useState, useEffect } from "react";
import Info from "./Info";
import Plan01 from "./Plan01";
import Plan02 from "./Plan02";
import End from "./End";
import Confirm from "./Confirm"; // You could also create a separate component for the confirmation message

const homes = [
  {
    figure: "1",
    step: "Step 1",
    info: "YOUR INFO",
    content: <Info />,
  },
  {
    figure: "2",
    step: "Step 2",
    info: "SELECT PLAN",
    content: <Plan01 />,
  },
  {
    figure: "3",
    step: "Step 3",
    info: "ADD-ONS",
    content: <Plan02 />,
  },
  {
    figure: "4",
    step: "Step 4",
    info: "SUMMARY",
    content: <End />,
  },
];

export const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [currentHome, setCurrentHome] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false); // state to control confirmation

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNextPage = () => {
    setCurrentHome(currentHome + 1);
  };

  const handleGoBack = () => {
    setCurrentHome(currentHome - 1);
  };

  const handleFinish = () => {
    setShowConfirmation(true); // Set to true when confirm button is clicked
  };

  const handleGoToPlan01 = () => {
    setCurrentHome(1);
  };

  return (
    <section className="element">
      <section className="container">
        <div className="bg-white fixed rounded-[20px] border h-[100vh] w-[100vw]">
          <figure
            className={`bg-cover bg-no-repeat fixed ${
              isDesktop
                ? "bg-desktop h-screen lg:w-[450px] top-0 left-0 md:w-[350px]"
                : "bg-mobile w-screen h-[300px] top-0"
            }`}
          >
            <div className="p-[50px] flex justify-center md:flex-col gap-10">
              {homes.map((home, index) => (
                <div className="flex gap-5" key={index}>
                  <button
                    onClick={() => {
                      setCurrentHome(index);
                      setShowConfirmation(false); // Reset confirmation view when switching steps
                    }}
                    className={`btn ${
                      index === currentHome ? "bg-Marineblue" : ""
                    }`}
                  >
                    {home.figure}
                  </button>
                  <div className="hidden md:block md:flex-row">
                    <h3 className="text-Coolgray">{home.step}</h3>
                    <h2 className="text-white">{home.info}</h2>
                  </div>
                </div>
              ))}
            </div>
          </figure>
          <main className="content">
            <div className="container">
              <div className="rounded-[30px] absolute z-10 -top-[80px] ml-9 mt-[200px] lg:h-auto md:ml-[350px] w-[300px] h-auto bg-white lg:w-auto lg:ml-[650px] lg:-top-[150px] md:-top-[200px] md:w-aut">
                <div className="p-6">
                  {/* Show End component or confirmation message */}
                  {showConfirmation ? (
                    <Confirm /> // Render a confirmation message or component here
                  ) : currentHome === 3 ? (
                    <End onChangePlan={handleGoToPlan01} />
                  ) : (
                    homes[currentHome].content
                  )}
                </div>
              </div>
            </div>
          </main>
          {currentHome > 0 && !showConfirmation && (
            <button
              onClick={handleGoBack}
              className="absolute bottom-0 md:left-[350px] lg:left-[500px] mb-4 ml-4 rounded-md h-10 w-40 cursor-pointer hover:text-Marineblue text-Coolgray bg-white"
            >
              Go Back
            </button>
          )}
          {currentHome < homes.length - 1 && !showConfirmation ? (
            <button
              onClick={handleNextPage}
              className="md:-right-50 md:bottom-0 absolute bottom-0 right-0 mb-4 mr-4 rounded-md h-10 w-40 text-Coolgray cursor-pointer hover:text-Marineblue bg-blue-700"
            >
              Next Page
            </button>
          ) : !showConfirmation ? (
            <button
              onClick={handleFinish} // Call handleFinish on confirm
              className="md:-right-50 md:bottom-0 absolute bottom-0 right-0 mb-4 mr-4 rounded-md h-10 w-40 text-Coolgray cursor-pointer hover:text-Marineblue bg-blue-700"
            >
              Confirm
            </button>
          ) : null}
        </div>
      </section>
    </section>
  );
};

export default Home;
