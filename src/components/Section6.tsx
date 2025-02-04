import Header1b from './Header1b'
import Header2 from './Header2'


const Section6 = () => {
  return (
    <div className="">
       <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      <Header1b/>
      <Header2/>


       {/* Category Section */}
       <div className="flex justify-center bg-[#FAFAFA]">
        <div className="flex max-sm:flex-col gap-[18px] max-sm:py-6 sm:gap-[15px] pb-12">
          {[
            {
              image: "/images/card-item-1 (1).png",
              title: "CLOTHS",
              items: "5 Items"
            },
            {
              image: "/images/card-item-2 (2).png",
              title: "CLOTHS",
              items: "5 Items"
            },
            {
              image: "/images/card-item-3 (3).png",
              title: "CLOTHS",
              items: "5 Items"
            },
            {
              image: "/images/card-item-4(4).png",
              title: "CLOTHS",
              items: "5 Items"
            },
            {
              image: "/images/card-item-5 (5).png",
              title: "CLOTHS",
              items: "5 Items"
            }
          ].map((category, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-[205px] h-[223px] object-cover"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h6 className="text-[16px] font-bold text-white">
                  {category.title}
                </h6>
                <h6 className="text-[14px] font-medium text-white">
                  {category.items}
                </h6>
                  </div>
                </div>
              
              ))}
            </div>
          </div>
        </div>
  );
}
        
        
        export default Section6;
      

