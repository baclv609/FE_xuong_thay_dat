import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    imgSrc: "https://picsum.photos/id/1011/296/300",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "2.500.000đ",
    link: "#",
  },
  {
    id: 2,
    imgSrc: "https://picsum.photos/id/1012/296/300",
    title: "Leviosa",
    description: "Comfortable sofa",
    price: "5.000.000đ",
    link: "#",
  },
  {
    id: 3,
    imgSrc: "https://picsum.photos/id/1013/296/300",
    title: "Lumos",
    description: "Modern lamp",
    price: "1.200.000đ",
    link: "#",
  },
  {
    id: 4,
    imgSrc: "https://picsum.photos/id/1014/296/300",
    title: "Nox",
    description: "Elegant carpet",
    price: "3.000.000đ",
    link: "#",
  },
  {
    id: 5,
    imgSrc: "https://picsum.photos/id/1015/296/300",
    title: "Alohomora",
    description: "Spacious cabinet",
    price: "4.500.000đ",
    link: "#",
  },
  {
    id: 6,
    imgSrc: "https://picsum.photos/id/1016/296/300",
    title: "Expelliarmus",
    description: "Stylish tea table",
    price: "2.800.000đ",
    link: "#",
  },
  {
    id: 7,
    imgSrc: "https://picsum.photos/id/1018/296/300",
    title: "Expecto Patronum",
    description: "Comfortable armchair",
    price: "3.200.000đ",
    link: "#",
  },
  {
    id: 8,
    imgSrc: "https://picsum.photos/id/1019/296/300",
    title: "Wingardium Leviosa",
    description: "Modern bookshelf",
    price: "2.900.000đ",
    link: "#",
  },
  {
    id: 9,
    imgSrc: "https://picsum.photos/id/1020/296/300",
    title: "Obliviate",
    description: "Elegant dining table",
    price: "6.000.000đ",
    link: "#",
  },
];

const ListCartegory = [
  {
    id: 1,
    name: "Cafe Chair",
    link: "#",
  },
  {
    id: 2,
    name: "Sofa",
    link: "#",
  },
  {
    id: 3,
    name: "Lamp",
    link: "#",
  },
  {
    id: 4,
    name: "Carpet",
    link: "#",
  },
  {
    id: 5,
    name: "Cabinet",
    link: "#",
  },
  {
    id: 6,
    name: "Tea table",
    link: "#",
  },
];

const ShopPage = () => {
  return (
    <div>
      <div>
        <div>
          <img
            src="https://picsum.photos/id/1/1440/600"
            alt=""
            className="w-full"
          />
        </div>
        <section className="container max-w-screen-xl mx-auto mt-[64px]">
          <h3 className="text-[#262626] text-[20px] font-semibold leading-normal">
            Categories
          </h3>
          <div className="grid grid-cols-12 gap=8 mt-4">
            <div className="col-span-3">
              <ul>
                {ListCartegory.map((cartegory) => (
                  <li>
                    <Link
                      to={cartegory.link}
                      className="hover:text-[#CA8A04] text-[#737373] font-poppins
                      text-[16px] font-medium leading-[28px]"
                    >
                      {cartegory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-9">
              <div className="mt-4 grid grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="bg-[#F5F5F5]">
                    <Link to={product.link}>
                      <img src={product.imgSrc} className="w-full" />
                    </Link>
                    <div className="p-4">
                      <Link to={product.link}>
                        <h3 className="text-[#262626] mb-1 text-lg font-semibold leading-[24px]">
                          {product.title}
                        </h3>
                      </Link>
                      <p className="text-[#898989] mb-2 text-base font-normal leading-[28px]">
                        {product.description}
                      </p>
                      <p className="text-[#EF4444] mb-[12px] text-lg font-semibold leading-none">
                        {product.price}
                      </p>
                      <button className="border-2 w-full border-[#CA8A04] px-4 py-2 text-[#CA8A04] text-base font-semibold leading-[150%] hover:bg-[#CA8A04] hover:text-white">
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* pagination  */}
              <div>
                <div className="container max-w-screen-xl mx-auto flex gap-4 mt-8">
                  <span className="bg-[#CA8A04] rounded-lg py-4 px-6 text-white">
                    1
                  </span>
                  <span className="bg-[#A3A3A3] rounded-lg py-4 px-6 text-white">
                    2
                  </span>
                  <span className="bg-[#A3A3A3] rounded-lg py-4 px-6 text-white">
                    3
                  </span>
                  <span className="bg-[#A3A3A3] rounded-lg py-4 px-6 text-white">
                    Next
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopPage;
