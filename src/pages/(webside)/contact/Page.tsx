import React from "react";

export default function ContactPage() {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto mt-[54px]">
        <section className="mb-[64px]">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div>
                <img src="./assets/img/contac1.png" />
              </div>
              <div>
                <h3 className="text-[#000] text-2xl font-bold uppercase">
                  address
                </h3>
                <p className="mt-[20px] text-[#71717A] text-xl leading-7 font-normal w-[317px]">
                  60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <img src="./assets/img/contac2.png" />
              </div>
              <div>
                <h3 className="text-[#000] text-2xl font-bold uppercase">
                  contact details
                </h3>
                <p className="mt-[20px] text-[#71717A] text-xl leading-7 font-normal w-[317px]">
                  info@furniro.com
                </p>
                <p className="mt-2 text-[#71717A] text-xl leading-7 font-bold w-[317px]">
                  02056278686
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <img src="./assets/img/contac3.png" />
              </div>
              <div>
                <h3 className="text-[#000] text-2xl font-bold uppercase">
                  social networks
                </h3>
                <div className="mt-[20px] text-[#71717A] w-[317px] flex justify-between ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M33.75 2.5H6.25C5.25544 2.5 4.30161 2.89509 3.59835 3.59835C2.89509 4.30161 2.5 5.25544 2.5 6.25L2.5 33.75C2.5 34.7446 2.89509 35.6984 3.59835 36.4016C4.30161 37.1049 5.25544 37.5 6.25 37.5H16.9727V25.6008H12.0508V20H16.9727V15.7312C16.9727 10.8758 19.8633 8.19375 24.2906 8.19375C26.4109 8.19375 28.6281 8.57188 28.6281 8.57188V13.3375H26.1852C23.7781 13.3375 23.0273 14.8312 23.0273 16.3633V20H28.4008L27.5414 25.6008H23.0273V37.5H33.75C34.7446 37.5 35.6984 37.1049 36.4016 36.4016C37.1049 35.6984 37.5 34.7446 37.5 33.75V6.25C37.5 5.25544 37.1049 4.30161 36.4016 3.59835C35.6984 2.89509 34.7446 2.5 33.75 2.5Z"
                      fill="#71717A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20.0078 11.0156C15.0391 11.0156 11.0312 15.0234 11.0312 19.9922C11.0312 24.9609 15.0391 28.9687 20.0078 28.9687C24.9766 28.9687 28.9844 24.9609 28.9844 19.9922C28.9844 15.0234 24.9766 11.0156 20.0078 11.0156ZM20.0078 25.8281C16.7969 25.8281 14.1719 23.2109 14.1719 19.9922C14.1719 16.7734 16.7891 14.1562 20.0078 14.1562C23.2266 14.1562 25.8438 16.7734 25.8438 19.9922C25.8438 23.2109 23.2188 25.8281 20.0078 25.8281ZM31.4453 10.6484C31.4453 11.8125 30.5078 12.7422 29.3516 12.7422C28.1875 12.7422 27.2578 11.8047 27.2578 10.6484C27.2578 9.49219 28.1953 8.55469 29.3516 8.55469C30.5078 8.55469 31.4453 9.49219 31.4453 10.6484ZM37.3906 12.7734C37.2578 9.96875 36.6172 7.48438 34.5625 5.4375C32.5156 3.39062 30.0313 2.75 27.2266 2.60937C24.3359 2.44531 15.6719 2.44531 12.7812 2.60937C9.98438 2.74219 7.5 3.38281 5.44531 5.42969C3.39063 7.47656 2.75781 9.96094 2.61719 12.7656C2.45312 15.6562 2.45312 24.3203 2.61719 27.2109C2.75 30.0156 3.39063 32.5 5.44531 34.5469C7.5 36.5938 9.97656 37.2344 12.7812 37.375C15.6719 37.5391 24.3359 37.5391 27.2266 37.375C30.0313 37.2422 32.5156 36.6016 34.5625 34.5469C36.6094 32.5 37.25 30.0156 37.3906 27.2109C37.5547 24.3203 37.5547 15.6641 37.3906 12.7734ZM33.6562 30.3125C33.0469 31.8438 31.8672 33.0234 30.3281 33.6406C28.0234 34.5547 22.5547 34.3438 20.0078 34.3438C17.4609 34.3438 11.9844 34.5469 9.6875 33.6406C8.15625 33.0312 6.97656 31.8516 6.35938 30.3125C5.44531 28.0078 5.65625 22.5391 5.65625 19.9922C5.65625 17.4453 5.45313 11.9688 6.35938 9.67188C6.96875 8.14062 8.14844 6.96094 9.6875 6.34375C11.9922 5.42969 17.4609 5.64062 20.0078 5.64062C22.5547 5.64062 28.0313 5.4375 30.3281 6.34375C31.8594 6.95312 33.0391 8.13281 33.6562 9.67188C34.5703 11.9766 34.3594 17.4453 34.3594 19.9922C34.3594 22.5391 34.5703 28.0156 33.6562 30.3125Z"
                      fill="#71717A"
                    />
                  </svg>
                  <img src="./assets/img/tiktokLogo.png" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M33.75 2.5H6.25C4.17969 2.5 2.5 4.17969 2.5 6.25V33.75C2.5 35.8203 4.17969 37.5 6.25 37.5H33.75C35.8203 37.5 37.5 35.8203 37.5 33.75V6.25C37.5 4.17969 35.8203 2.5 33.75 2.5ZM29.9297 14.9062C29.9453 15.125 29.9453 15.3516 29.9453 15.5703C29.9453 22.3438 24.7891 30.1484 15.3672 30.1484C12.4609 30.1484 9.76562 29.3047 7.5 27.8516C7.91406 27.8984 8.3125 27.9141 8.73438 27.9141C11.1328 27.9141 13.3359 27.1016 15.0938 25.7266C12.8438 25.6797 10.9531 24.2031 10.3047 22.1719C11.0938 22.2891 11.8047 22.2891 12.6172 22.0781C10.2734 21.6016 8.51562 19.5391 8.51562 17.0469V16.9844C9.19531 17.3672 9.99219 17.6016 10.8281 17.6328C10.1253 17.1653 9.5492 16.5311 9.15115 15.7868C8.75309 15.0425 8.54549 14.2113 8.54688 13.3672C8.54688 12.4141 8.79688 11.5391 9.24219 10.7812C11.7656 13.8906 15.5547 15.9219 19.8047 16.1406C19.0781 12.6641 21.6797 9.84375 24.8047 9.84375C26.2812 9.84375 27.6094 10.4609 28.5469 11.4609C29.7031 11.2422 30.8125 10.8125 31.7969 10.2266C31.4141 11.4141 30.6094 12.4141 29.5469 13.0469C30.5781 12.9375 31.5781 12.6484 32.5 12.25C31.8047 13.2734 30.9297 14.1797 29.9297 14.9062Z"
                      fill="#71717A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M17.0938 15.7891L24.5312 20.0156L17.0938 24.2422V15.7891ZM37.5 6.25V33.75C37.5 35.8203 35.8203 37.5 33.75 37.5H6.25C4.17969 37.5 2.5 35.8203 2.5 33.75V6.25C2.5 4.17969 4.17969 2.5 6.25 2.5H33.75C35.8203 2.5 37.5 4.17969 37.5 6.25ZM34.2188 20.0234C34.2188 20.0234 34.2188 15.3672 33.625 13.1328C33.2969 11.8984 32.3359 10.9297 31.1094 10.6016C28.8984 10 20 10 20 10C20 10 11.1016 10 8.89062 10.6016C7.66406 10.9297 6.70312 11.8984 6.375 13.1328C5.78125 15.3594 5.78125 20.0234 5.78125 20.0234C5.78125 20.0234 5.78125 24.6797 6.375 26.9141C6.70312 28.1484 7.66406 29.0781 8.89062 29.4062C11.1016 30 20 30 20 30C20 30 28.8984 30 31.1094 29.3984C32.3359 29.0703 33.2969 28.1406 33.625 26.9062C34.2188 24.6797 34.2188 20.0234 34.2188 20.0234Z"
                      fill="#71717A"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* and address */}
        <section className=" bg-[#F1F1F1]">
          <div className="grid grid-cols-12 gap-8 ">
            <div className="col-span-6">
              <img src="https://picsum.photos/id/704/704/485" />
            </div>
            <div className="col-span-6 pt-[73px]">
              <form action="#">
                <h3 className="text-[#000] font-semibold text-[20px] uppercase">
                  contact
                </h3>
                <h1 className="text-[#000] font-bold text-[48px] uppercase">
                  connect with us now
                </h1>
                <div className="flex flex-col mt-2">
                  <div className="grid grid-cols-12 gap-8">
                    <div className="relative z-0 w-full mb-5 group col-span-6">
                      <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group col-span-6">
                      <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-8">
                    <div className="relative z-0 w-full mb-5 group col-span-6">
                      <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group col-span-6">
                      <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group col-span-6">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Message
                    </label>
                  </div>
                </div>
                <button className="bg-[#CA8A04] text-white py-3 px-4 flex justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1294_197)">
                      <path
                        d="M15.4736 0.877191C15.6665 1.01754 15.7455 1.20468 15.7104 1.43859L13.4648 14.9123C13.4356 15.0819 13.342 15.2134 13.1841 15.307C13.1022 15.3538 13.0116 15.3772 12.9122 15.3772C12.8478 15.3772 12.7777 15.3626 12.7016 15.3333L8.07883 13.4474L5.46479 16.3158C5.35953 16.4386 5.2221 16.5 5.05251 16.5C4.97064 16.5 4.90339 16.4883 4.85076 16.4649C4.73965 16.424 4.65193 16.3553 4.5876 16.2588C4.52327 16.1623 4.49111 16.0556 4.49111 15.9386V11.9737L0.350757 10.2807C0.134383 10.1988 0.0174242 10.038 -0.000119703 9.79824C-0.0176636 9.57017 0.0759037 9.39766 0.280582 9.2807L14.8771 0.859647C15.0817 0.73684 15.2806 0.742688 15.4736 0.877191ZM12.4736 14.0263L14.4122 2.42105L1.83321 9.67544L4.78058 10.8772L12.3508 5.27193L8.15777 12.2632L12.4736 14.0263Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1294_197">
                        <rect
                          width="15.7193"
                          height={16}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                  Send Infomation
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
