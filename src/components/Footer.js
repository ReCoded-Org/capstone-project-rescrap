import React from "react"


function Footer() {
  return (
    <div className="main-footer font-body  bg-gradient-to-t from-green-100 via-transparent  to-transparent my-2 py-2">
      <div className="container">
        <div className="flex mx-5 my-5">
           {/* Column1 */}
           <div className="flex-1 pr-10">
            <img className="w-24 mb-3" src="..\images\logo.png"/>
            <p className="text-sm text-gray-700"><span className="text-black font-semibold">ReScrap</span> is a Silicon Valley-based company 
              that is revolutionizing plastics recyclables trading 
              industry by promoting a free and open market through use of technology.</p>
                     </div>
          {/* Column2 */}
          <div className="flex-1">
          <h4 className="font-semibold">Product</h4>
            <ui className="list-none">
              <li className="text-gray-700 py-2 text-xs">Categories</li>
              <li className="text-gray-700 py-2 text-xs">Pricing</li>
              <li className="text-gray-700 py-2 text-xs">Locations</li>
              <li className="text-gray-700 py-2 text-xs">Countries</li>
                          </ui>
                     </div>
          {/* Column3 */}
          <div className="flex-1">
          <h4 className="font-semibold">Engage</h4>
            <ui className="list-none">
              <li className="text-gray-700 py-2 text-xs"><a herf="#">ReScarp?</a></li>
              <li className="text-gray-700 py-2 text-xs">FAQ</li>
              <li className="text-gray-700 py-2 text-xs">About Us</li>
              </ui>
            
          </div>
          {/* Column4 */}
          <div className="flex-1">
            <ui className="list-none ">
            <h4 className="font-semibold">Earn Money</h4>
              <li className="  text-gray-700 py-2 text-xs"><a herf="#">Sell?</a></li>
              <li className=" text-gray-700 py-2 text-xs">Become a partner</li>
                          </ui>
          </div>
        </div>
          <div className="row">
          <p className="my-4 text-sm text-gray-700 mx-5 my-5">
            &copy;{new Date().getFullYear()} ReScrap | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
