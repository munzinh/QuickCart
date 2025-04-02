import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FiSmartphone, FiMonitor, FiHeadphones, FiCamera, FiHome, FiSettings, FiTv, FiRefreshCw, FiBox, FiTag, } from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa";

const categories = [
  { id: 1, name: "Điện thoại, Tablet", icon: <FiSmartphone /> },
  { id: 2, name: "Laptop", icon: <FiMonitor /> },
  { id: 3, name: "Âm thanh, Mic thu âm", icon: <FiHeadphones /> },
  { id: 4, name: "Đồng hồ, Camera", icon: <FiCamera /> },
  { id: 5, name: "Đồ gia dụng", icon: <FiHome /> },
  { id: 6, name: "Phụ kiện", icon: <FiSettings /> },
  { id: 7, name: "PC, Màn hình, Máy in", icon: <FiMonitor /> },
  { id: 8, name: "Tivi", icon: <FiTv /> },
  { id: 11, name: "Khuyến mãi", icon: <FiTag /> },
  { id: 12, name: "Tin công nghệ", icon: <FaNewspaper />, path: "/tin-cong-nghe" },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-4 shadow-md rounded-lg mt-0" style={{ padding: "0px" }}>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer" style={{ marginTop: "0px" }}>
            <span className="text-lg text-gray-700">{category.icon}</span>
            <span className="text-sm font-medium text-gray-800">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AdsBanners = () => {
  const banners = [
    { id: 1, imgSrc: assets.galaxyM55, alt: "Galaxy M55 5G" },
    { id: 2, imgSrc: assets.imac, alt: "iMac" },
    { id: 3, imgSrc: assets.laptop, alt: "Laptop S-Student" },
  ];

  return (
    <div className="flex flex-col gap-3">
      {banners.map((banner) => (
        <div key={banner.id} className="relative w-[258px] h-[115px]">
          <Image
            src={banner.imgSrc}
            alt={banner.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
};

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Trải nghiệm âm thanh thuần khiết - Tai nghe hoàn hảo đang chờ bạn!",
      offer: "Khuyến mại thời gian có hạn giảm giá 30%",
      buttonText1: "Mua ngay",
      buttonText2: "Tìm thêm",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Trải nghiệm chơi game đẳng cấp mới bắt đầu tại đây - Khám phá PlayStation 5 ngay hôm nay!",
      offer: "Nhanh tay lên, chỉ còn vài cái nữa thôi!",
      buttonText1: "Mua ngay",
      buttonText2: "Tìm thêm",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Sức mạnh kết hợp với sự thanh lịch - Apple MacBook Pro dành cho bạn!",
      offer: "Ưu đãi độc quyền giảm giá 40%",
      buttonText1: "Mua ngay",
      buttonText2: "Tìm thêm",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  return (
    <div className="overflow-hidden relative w-[675px] h-[370px] mx-auto" style={{ marginRight: "0px" }}>
      <div
        className="flex transition-transform duration-700 ease-in-out w-[675px] h-[320px]"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-4 px-6 rounded-xl min-w-full h-[295px]"
          >
            <div className="flex-1">
              <p className="text-orange-600 pb-1 text-sm">{slide.offer}</p>
              <h1 className="text-lg font-semibold">{slide.title}</h1>
              <div className="flex items-center mt-2">
                <button className="px-4 py-1.5 bg-orange-600 rounded-full text-white font-medium text-sm">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-1 px-4 py-1.5 font-medium text-sm">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="w-40 md:w-48 lg:w-56"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                width={150}
                height={150}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const HeaderWithAds = () => {
  return (
    <div className="flex items-start gap-4">
      <Sidebar />
      <HeaderSlider />
      <AdsBanners />
    </div>
  );
};

export default HeaderWithAds;
