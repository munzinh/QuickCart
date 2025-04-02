import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 border-t">
      {/* Nội dung chính */}
      <div className="max-w-[90rem] mx-auto py-10 px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Hỗ trợ khách hàng */}
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-lg mb-3">Tổng đài hỗ trợ miễn phí</h3>
            <p>Mua hàng - bảo hành: <strong>1800.2097</strong> (7h30 - 22h00)</p>
            <p>Khiếu nại: <strong>1800.2063</strong> (8h00 - 21h30)</p>
            <h3 className="font-semibold text-lg mt-5 mb-3">Phương thức thanh toán</h3>
            <div className="flex gap-2">
              <Image className="cursor-pointer" src={assets.applepay} alt="Apple Pay" width={60} height={25} />
              <Image className="cursor-pointer" src={assets.vnpay} alt="VNPAY" width={60} height={25} />
              <Image className="cursor-pointer" src={assets.momo} alt="MoMo" width={60} height={25} />
              <Image className="cursor-pointer" src={assets.onepay} alt="OnePay" width={60} height={25} />
              <Image className="cursor-pointer" src={assets.zalopay} alt="ZaloPay" width={60} height={25} />
            </div>
          </div>

          {/* Đăng ký nhận tin khuyến mãi */}
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-lg mb-3">ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</h3>
            <p className="text-red-500">(*) Nhận ngay voucher 10%</p>
            <input type="email" placeholder="Email *" className="w-full p-2 border rounded-md mt-2" />
            <input type="text" placeholder="Số điện thoại" className="w-full p-2 border rounded-md mt-2" />
            <div className="mt-2">
              <input type="checkbox" id="agree" className="mr-2" />
              <label htmlFor="agree">Tôi đồng ý với điều khoản</label>
            </div>
            <button className="bg-orange-600 text-white w-full py-2 mt-3 rounded-md hover:bg-orange-700">ĐĂNG KÝ NGAY</button>
          </div>

          {/* Chính sách & Dịch vụ */}
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-lg mb-3">Thông tin và chính sách</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Mua hàng và thanh toán Online</a></li>
              <li><a href="#" className="hover:underline">Mua hàng trả góp Online</a></li>
              <li><a href="#" className="hover:underline">Chính sách giao hàng</a></li>
              <li><a href="#" className="hover:underline">Chính sách bảo hành</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Kết nối mạng xã hội */}
      <div className="w-full bg-gray-100">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center py-5 px-6 md:px-16 lg:px-32">
          <div className="flex gap-4">
            <Image className="cursor-pointer" src={assets.twitter_icon} alt="Twitter" width={44} height={32} />
            <Image className="cursor-pointer" src={assets.facebook_icon} alt="Facebook" width={44} height={32} />
            <Image className="cursor-pointer" src={assets.instagram_icon} alt="Instagram" width={44} height={32} />
          </div>
          <p className="text-sm">Copyright 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;