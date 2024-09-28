const Footer = () => {
  return (
    <div>
      <footer className=" bg-black text-white mt-[64px]">
        <div className="max-w-6xl mx-auto pt-[64px]">
          <div className="grid grid-cols-4 gap-8 ">
            <div>
              <img src="/footer_logo.png" className="mb-4" />
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div>
              <div className="font-semibold text-[28px] mb-4">Sitemap</div>
              <ul>
                <li className="mb-4">
                  <a href="#">Home</a>
                </li>
                <li className="mb-4">
                  <a href="#">Shop</a>
                </li>
                <li className="mb-4">
                  <a href="#">About</a>
                </li>
                <li className="mb-4">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[28px] mb-4">Help</div>
              <ul>
                <li className="mb-4">
                  <a href="#">Payment Options</a>
                </li>
                <li className="mb-4">
                  <a href="#">Returns</a>
                </li>
                <li className="mb-4">
                  <a href="#">Privacy Policies</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[28px] mb-4">Location</div>
              <ul>
                <li className="mb-4">
                  <a href="#">support@euphoria.in</a>
                </li>
                <li className="mb-4">
                  <a href="#">Ahmedabad Main Road</a>
                </li>
                <li className="mb-4">
                  <a href="#">Udaipur, India- 313002</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-[64px]" />
          <p className="text-center py-8 ">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
