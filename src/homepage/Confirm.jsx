import React from 'react'

const Confirm = () => {
  return (
    <main className="py-[50px] md:py-[200px] lg:py-[200px] flex flex-col gap-3 content-center items-center justify-center text-center">
      <img src="images/icon-thank-you.svg" alt="" className="" />
      <div className="text-[32px] font-[700] text-Marineblue">Thank you!</div>
      <div className="text-[17px] font-[400] lg:px-[250px]">Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</div>
    </main>
  )
}

export default Confirm