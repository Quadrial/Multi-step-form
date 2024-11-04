import React from "react";

export const Info = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col gap-1 md:gap-3 lg:gap-5 p-3 md:p-5 lg:p-7">
            <h1 className="">Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <main>
              <div className="mt-1  flex flex-col">
                <label className="text-Marineblue">Name</label>
                <input
                  className="border border-solid h-12 rounded-[10px] placeholder:p-4"
                  placeholder="e.g. Stephen King"
                />
              </div>

              <div className="mt-5  flex flex-col">
                <label className="text-Marineblue">Email Address</label>
                <input
                  className="border border-solid h-12 rounded-[10px] placeholder:p-4"
                  placeholder="e.g. stephenking@lorem.com"
                />
              </div>

              <div className="mt-5  flex flex-col">
                <label className="text-Marineblue">Phone Number</label>
                <input
                  className="border border-solid h-12 rounded-[10px] placeholder:p-5"
                  placeholder="e.g. +1 234 567 890"
                />
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};
export default Info;
