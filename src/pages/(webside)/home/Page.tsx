const HomePage = () => {
  const products = [
    {
      id: 1,
      imgSrc: "https://picsum.photos/id/237/296/301",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "2.500.000đ",
    },
    {
      id: 2,
      imgSrc: "https://picsum.photos/id/238/296/301",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "2.500.000đ",
    },
    {
      id: 3,
      imgSrc: "https://picsum.photos/id/227/296/301",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "2.500.000đ",
    },
    {
      id: 4,
      imgSrc: "https://picsum.photos/id/337/296/301",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "2.500.000đ",
    },
  ];

  const news = [
    {
      id: 1,
      imgSrc: "https://picsum.photos/id/1/296/211",
      date: "24/4/2024",
      title: "A bedroom must have something like this",
      link: "#",
    },
    {
      id: 2,
      imgSrc: "https://picsum.photos/id/1/296/211",
      date: "24/4/2024",
      title: "A bedroom must have something like this",
      link: "#",
    },
    {
      id: 3,
      imgSrc: "https://picsum.photos/id/1/296/211",
      date: "24/4/2024",
      title: "A bedroom must have something like this",
      link: "#",
    },
    {
      id: 4,
      imgSrc: "https://picsum.photos/id/1/296/211",
      date: "24/4/2024",
      title: "A bedroom must have something like this",
      link: "#",
    },
  ];

  return (
    <div>
      <img
        src="https://picsum.photos/id/1/1440/600"
        alt=""
        className="w-full"
      />
      <main className="max-w-6xl mx-auto">
        {/* New Products */}
        <section className="container max-w-screen-xl mx-auto mt-[64px]">
          <div className="flex justify-between">
            <h2 className="text-[#262626] text-4xl font-semibold leading-none">
              New Products
            </h2>
            <a
              href="#"
              className="border-2 border-[#CA8A04] px-4 py-2 text-[#CA8A04] font-family['Poppins'] text-base font-semibold  leading-[150%] hover:bg-[#CA8A04] hover:text-white"
            >
              View all products
            </a>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-[#F5F5F5]">
                <img src={product.imgSrc} className="w-full" />
                <div className="p-4">
                  <h3 className="text-[#262626] mb-1 text-lg font-semibold leading-[24px]">
                    {product.name}
                  </h3>
                  <p className="text-[#898989] mb-2 text-base font-normal leading-[28px]">
                    {product.description}
                  </p>
                  <p className="text-[#EF4444] mb-[12px] text-lg font-semibold leading-none">
                    {product.price}
                  </p>
                  <button className="border-2 w-full border-[#CA8A04] px-4 py-2 text-[#CA8A04] text-base font-semibold leading-[150%]">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* End New Products */}

        <div>
          <section className="container max-w-screen-xl mx-auto mt-[64px]">
            <div className="flex justify-between">
              <h2 className="text-[#262626] text-4xl font-semibold leading-none">
                Gallery
              </h2>
              <a
                href="#"
                className="border-2 border-[#CA8A04] px-4 py-2 text-[#CA8A04] font-family['Poppins'] text-base font-semibold  leading-[150%] hover:bg-[#CA8A04] hover:text-white"
              >
                View all gallery
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-4">
              <img
                src="https://picsum.photos/id/5/405/296"
                className="w-full"
              />
              <img
                src="https://picsum.photos/id/6/405/296"
                className="w-full"
              />
              <img
                src="https://picsum.photos/id/7/405/296"
                className="w-full"
              />
              <img
                src="https://picsum.photos/id/8/405/296"
                className="w-full"
              />
              <img
                src="https://picsum.photos/id/1/405/296"
                className="w-full"
              />
              <img
                src="https://picsum.photos/id/3/405/296"
                className="w-full"
              />
            </div>
          </section>
          {/* END  Gallery*/}
          <section className="container max-w-screen-xl mx-auto mt-[64px]">
            <div className="flex justify-between">
              <h2 className="text-[#262626] text-4xl font-semibold leading-none">
                News
              </h2>
              <a
                href="#"
                className="border-2 border-[#CA8A04] px-4 py-2 text-[#CA8A04] font-family['Poppins'] text-base font-semibold hover:bg-[#CA8A04] hover:text-white leading-[150%]"
              >
                View all news
              </a>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-8">
              {news.map((item) => (
                <div key={item.id}>
                  <div>
                    <img src={item.imgSrc} className="w-full" />
                  </div>
                  <div className="mt-4">
                    <p className="mb-1 text-[#9CA3AF] text-sm font-semibold leading-none flex items-center gap-2">
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                      {item.date}
                    </p>
                    <h3 className="text-[#262626] text-lg font-semibold leading-[28px]">
                      {item.title}
                    </h3>
                    <a
                      href={item.link}
                      className="mt-3 text-[#EF4444] text-base font-semibold leading-none flex items-center gap-2"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* END NEW */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
