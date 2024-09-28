import React from "react";

export default function PaymentPage() {
  return (
    <div>
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-[40px] font-bold text-gray-800 mb-4">
          Billing details
        </h1>
        <form className="grid grid-cols-12 gap-8 mt-8">
          <div className="col-span-6 flex flex-col gap-8">
            <div className="flex justify-between gap-8">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="firstName"
                  className="text-[#262626] text-base font-medium leading-normal"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-2 h-[40px] border border-[#A3A3A3] bg-white"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="firstName"
                  className="text-[#262626] text-base font-medium leading-normal"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-2 h-[40px] border border-[#A3A3A3] bg-white"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[#262626] text-base font-medium leading-normal"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-2 h-[40px] border border-[#A3A3A3] bg-white"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[#262626] text-base font-medium leading-normal"
              >
                Company Name (Optional)
              </label>
              <select className="mt-2 p-2 h-[40px] text-[#A3A3A3] border border-[#A3A3A3] bg-white">
                <option>Sri Lanka</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[#262626] text-base font-medium leading-normal"
              >
                Street address
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-2 h-[40px] border border-[#A3A3A3] bg-white"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[#262626] text-base font-medium leading-normal"
              >
                Town / City
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-2 h-[40px] border border-[#A3A3A3] bg-white"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[#262626] text-base font-medium leading-normal"
              >
                Province
              </label>
              <select className="mt-2 p-2 h-[40px] text-[#A3A3A3] border border-[#A3A3A3] bg-white">
                <option>Western Province</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[#262626] text-base font-medium leading-normal"
              >
                ZIP code
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-2 h-[40px] border border-[#A3A3A3] bg-white"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[#262626] text-base font-medium leading-normal"
              >
                Phone
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-2 h-[40px] border border-[#A3A3A3] bg-white"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[#262626] text-base font-medium leading-normal"
              >
                Email address
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-2 h-[40px] border border-[#A3A3A3] bg-white"
              />
            </div>
          </div>
          <div className="col-span-6 ">
            <div>
              <div className="flex justify-between">
                <p className="text-[#262626] text-[24px] font-semibold leading-normal">
                  Product
                </p>
                <p className="text-[#262626] text-[24px] font-semibold leading-normal">
                  Subtotal
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex gap-3">
                  <p className="text-[#A3A3A3] text-base font-normal leading-normal">
                    Asgaard sofa
                  </p>
                  <span className="text-[#262626] text-base font-normal leading-normal">
                    X1
                  </span>
                </div>
                <span className="text-[#262626] text-xl font-medium leading-normal">
                  25.000.000đ
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-[#262626] text-base font-normal leading-normal">
                  Subtotal
                </span>
                <span className="text-[#262626] text-xl font-medium leading-normal">
                  25.000.000đ
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-[#262626] text-base font-normal leading-normal">
                  Subtotal
                </span>
                <span className="text-[#B88E2F] text-xl font-bold leading-normal">
                  250.00.000đ
                </span>
              </div>
            </div>
            <hr className="my-8" />
            <div>
              <div>
                <div className="text-[#262626] text-base font-medium">
                  <input type="radio" defaultChecked /> Direct Bank Transfer
                </div>
                <p className="text-[#A3A3A3] text-base font-normal leading-7 text-justify">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <div className="!text-[#A3A3A3] text-base font-medium">
                  <input type="radio" name="radio" className="mt-4" /> ATM Bank
                  Transfer
                  <br />
                  <input type="radio" name="radio" className="mt-4" /> Cash On
                  Delivery
                </div>
              </div>
              <div className="mt-8">
                <p className="text-[#262626] text-base font-normal leading-7 text-justify">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy.</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <button className="text-center w-[342px] mt-[40px] border-2 border-[#CA8A04] px-4 py-2 text-[#CA8A04] font-family['Poppins'] text-base font-semibold  leading-[150%] hover:bg-[#CA8A04] hover:text-white">
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
