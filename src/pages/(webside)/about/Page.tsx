export default function AboutPage() {
  const services = [
    { id: 1, title: "flooring", imgSrc: "https://picsum.photos/296/396" },
    { id: 2, title: "refinishing", imgSrc: "https://picsum.photos/296/396" },
    { id: 3, title: "installation", imgSrc: "https://picsum.photos/296/396" },
    {
      id: 4,
      title: "warming the floor",
      imgSrc: "https://picsum.photos/296/396",
    },
  ];
  return (
    <div>
      <div>
        <img
          src="https://picsum.photos/id/1/1440/600"
          alt=""
          className="w-full"
        />
        <main className="max-w-6xl mx-auto"></main>
      </div>

      <div className="max-w-screen-xl mx-auto mt-[54px]">
        <section className="my-[64px]">
          <div className="grid grid-cols-12 gap-8">
            {/* item1 */}
            <div className="col-span-4 flex justify-center items-center flex-col">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1294_346)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M82.0356 2.70719C81.8833 2.09312 81.5706 1.53053 81.1294 1.077C80.6883 0.623465 80.1346 0.29526 79.525 0.125962C78.9153 -0.0433363 78.2717 -0.0476505 77.6599 0.113461C77.048 0.274572 76.49 0.595325 76.0428 1.0429L61.7571 15.3286C61.3214 15.7652 61.0062 16.3072 60.8423 16.9018C60.6783 17.4964 60.6711 18.1233 60.8214 18.7215L63.3928 29.0358C63.359 29.0686 63.3257 29.102 63.2928 29.1358L46.2142 46.2143C45.2679 47.2299 44.7528 48.5731 44.7773 49.9609C44.8017 51.3488 45.364 52.673 46.3455 53.6545C47.327 54.636 48.6512 55.1982 50.0391 55.2227C51.4269 55.2472 52.7701 54.732 53.7857 53.7858L70.8785 36.7143C70.9123 36.6791 70.9456 36.6433 70.9785 36.6072L81.2857 39.1858C81.8838 39.336 82.5108 39.3288 83.1053 39.1649C83.6999 39.0009 84.2419 38.6857 84.6785 38.25L98.9642 23.9643C99.4137 23.5173 99.736 22.9588 99.8982 22.346C100.06 21.7332 100.057 21.0883 99.8872 20.4775C99.7178 19.8667 99.3888 19.312 98.9341 18.8703C98.4795 18.4286 97.9154 18.1159 97.2999 17.9643L85.0928 14.9215L82.0356 2.70719ZM52.2642 5.42148C52.3624 6.8384 51.8938 8.23631 50.9615 9.30786C50.0293 10.3794 48.7097 11.0369 47.2928 11.1358C39.8299 11.6529 32.6724 14.3017 26.6707 18.7673C20.669 23.2329 16.0754 29.3276 13.4357 36.3272C10.7961 43.3268 10.2214 50.937 11.7799 58.2536C13.3384 65.5703 16.9646 72.2857 22.2276 77.602C27.4906 82.9182 34.1692 86.6118 41.4698 88.2439C48.7704 89.876 56.386 89.3779 63.4118 86.8089C70.4377 84.2399 76.5783 79.7079 81.104 73.7514C85.6298 67.795 88.3505 60.6645 88.9428 53.2072C89.0555 51.7902 89.7265 50.476 90.8082 49.5537C91.8899 48.6314 93.2936 48.1766 94.7106 48.2893C96.1277 48.4021 97.4419 49.0731 98.3641 50.1547C99.2864 51.2364 99.7412 52.6402 99.6285 54.0572C98.8726 63.5587 95.4051 72.6436 89.6379 80.2324C83.8707 87.8213 76.0462 93.5951 67.0941 96.8679C58.1421 100.141 48.4386 100.775 39.1367 98.6951C29.8348 96.6154 21.3254 91.9092 14.6195 85.1356C7.91355 78.362 3.29301 69.8057 1.3068 60.4834C-0.679409 51.1611 0.052206 41.4645 3.41472 32.5457C6.77724 23.627 12.6293 15.8609 20.2757 10.1702C27.922 4.47948 37.0413 1.10335 46.5499 0.442904C47.9669 0.344771 49.3648 0.813336 50.4363 1.74559C51.5079 2.67783 52.1654 4.0046 52.2642 5.42148ZM47.4642 28.9858C47.7209 29.6409 47.846 30.3403 47.8323 31.0438C47.8187 31.7474 47.6666 32.4413 47.3846 33.0861C47.1027 33.7308 46.6966 34.3137 46.1894 34.8014C45.6821 35.2892 45.0838 35.6722 44.4285 35.9286C42.086 36.8475 40.0093 38.3357 38.3863 40.2586C36.7633 42.1815 35.645 44.4786 35.1326 46.9422C34.6202 49.4058 34.7298 51.9583 35.4515 54.3689C36.1732 56.7795 37.4843 58.9722 39.2662 60.7489C41.0481 62.5257 43.2447 63.8303 45.6574 64.545C48.0701 65.2597 50.6228 65.3618 53.0849 64.8423C55.547 64.3227 57.8408 63.1978 59.759 61.5691C61.6772 59.9405 63.1593 57.8595 64.0714 55.5143C64.3265 54.8587 64.7083 54.2597 65.1949 53.7515C65.6816 53.2434 66.2635 52.8361 66.9075 52.5529C67.5516 52.2697 68.2451 52.1161 68.9485 52.1009C69.6519 52.0857 70.3514 52.2092 71.0071 52.4643C71.6628 52.7195 72.2617 53.1013 72.7699 53.5879C73.278 54.0745 73.6853 54.6565 73.9685 55.3005C74.2517 55.9446 74.4053 56.6381 74.4205 57.3415C74.4357 58.0449 74.3122 58.7444 74.0571 59.4C72.4992 63.4049 69.9678 66.9584 66.6917 69.7392C63.4156 72.52 59.4981 74.4405 55.2934 75.3271C51.0886 76.2136 46.7292 76.0382 42.6093 74.8168C38.4893 73.5954 34.7387 71.3664 31.6966 68.3314C28.6545 65.2964 26.4167 61.551 25.1856 57.434C23.9545 53.3169 23.7689 48.9579 24.6456 44.7511C25.5222 40.5443 27.4335 36.6223 30.2066 33.3396C32.9798 30.057 36.5273 27.5173 40.5285 25.95C41.8509 25.4339 43.3241 25.4637 44.6245 26.0329C45.9249 26.602 46.9463 27.6641 47.4642 28.9858Z"
                      fill="#CA8A04"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1294_346">
                      <rect width={100} height={100} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="mt-5 text-[#000] font-bold text-[32px] uppercase">
                OUR mission
              </h3>
              <p className="mt-3 text-center text-xl font-normal leading-7 text-[#000]">
                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </p>
            </div>
            {/* item2 */}
            <div className="col-span-4 flex justify-center items-center flex-col">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M41.6668 8.33337L33.3335 33.3334H45.8335V8.33337H41.6668ZM54.1668 8.33337V33.3334H66.6668L58.3335 8.33337H54.1668ZM8.3335 37.5V41.6667H16.6668V45.8334H25.0002V41.6667H75.0002L75.2502 45.8334H83.3335V41.6667H91.6668V37.5H8.3335ZM29.1668 45.8334L13.9168 91.6667H45.8335V45.8334H29.1668ZM54.1668 45.8334V91.6667H86.0835L70.8335 45.8334H54.1668Z"
                    fill="#CA8A04"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-[#000] font-bold text-[32px] uppercase">
                OUR mission
              </h3>
              <p className="mt-3 text-center text-xl font-normal leading-7 text-[#000]">
                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </p>
            </div>
            {/* item3*/}
            <div className="col-span-4 flex justify-center items-center flex-col">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M16.6665 81.25V18.75C16.6665 15.9874 17.764 13.3378 19.7175 11.3843C21.671 9.43084 24.3205 8.33337 27.0832 8.33337H83.3332V91.6667H27.0832C24.3205 91.6667 21.671 90.5692 19.7175 88.6157C17.764 86.6622 16.6665 84.0127 16.6665 81.25ZM16.6665 81.25C16.6665 78.4874 17.764 75.8379 19.7175 73.8844C21.671 71.9308 24.3205 70.8334 27.0832 70.8334H83.3332"
                    stroke="#CA8A04"
                    strokeWidth={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M66.6663 34.1667C66.6663 29.1667 62.4997 25 57.4997 25C54.1663 25 51.6663 26.25 49.9997 28.75C48.333 26.25 45.833 25 42.4997 25C37.4997 25 33.333 29.1667 33.333 34.1667C33.333 36.6667 34.583 39.1667 36.2497 40.8333C41.6663 46.25 49.9997 54.1667 49.9997 54.1667C49.9997 54.1667 58.333 46.25 63.7497 41.25C65.4163 39.5833 66.6663 37.0833 66.6663 34.1667Z"
                    stroke="#CA8A04"
                    strokeWidth={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-[#000] font-bold text-[32px] uppercase">
                OUR mission
              </h3>
              <p className="mt-3 text-center text-xl font-normal leading-7 text-[#000]">
                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </section>

        <section className="mt-[64px]">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <img
                src="https://picsum.photos/600/400"
                className="w-full h-full"
              />
            </div>
            <div className="col-span-6 mt-[35px]">
              <h2 className="uppercase text-[#000] text-[32px] font-bold">
                ABOUT FURNIRO COMPANY
              </h2>
              <p className="mt-[20px] text-[18px] font-normal leading-7">
                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
              <p className="mt-[20px] text-[18px] font-normal leading-7">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </section>
        {/* WE CREATE NATURAL WOOD FURNITURE
AS WELL AS HIGH-QUALITY */}
        <section className="mt-[64px]">
          <div className="flex justify-center">
            <h1 className="text-[#000] text-[32px] font-bold leading-[48px] uppercase w-[644px] text-center">
              WE CREATE NATURAL WOOD FURNITURE AS WELL AS HIGH-QUALITY
            </h1>
          </div>
          <div className="mt-8 grid grid-cols-12 gap-8">
            {services.map((service) => (
              <div key={service.id} className="relative col-span-3">
                <img src={service.imgSrc} />
                <p className="absolute left-[20px] bottom-[20px] text-white text-[16px] uppercase font-semibold">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
