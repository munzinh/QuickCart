import React from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { useClerk, UserButton } from "@clerk/nextjs";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { isSeller, router, user, cartItemCount } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-600 text-white shadow-md z-10">
      {/* Top Bar - Ẩn khi màn hình nhỏ hơn md */}
      <div className="hidden md:flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 max-w-[90rem] w-full mx-auto">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="text-white" /> 1900-123-456
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope className="text-white" /> mystore@email.com
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-white" /> 1734 Stonecoal Road
          </span>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span>{user.username}</span>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push("/cart")} />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push("/my-orders")} />
                </UserButton.MenuItems>
              </UserButton>
              <button onClick={() => router.push('/logout')} className="hover:text-gray-400"></button>
            </>
          ) : (
            <button onClick={openSignIn} className="inline-flex items-center gap-2 bg-orange-00 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
              <FaUser className="text-white text-xl" />
              <span className="text-base">Sign in</span>             
            </button>
          )}
        </div>
      </div>

      {/* Main Navbar - Luôn hiển thị, đặt các thành phần theo hàng ngang */}
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 max-w-[90rem] w-full mx-auto">
        {/* Logo */}
        <div 
          className="cursor-pointer text-2xl font-bold" 
          onClick={() => router.push('/')}
        >
          My Store
        </div>
        
        {/* Search Bar */}
        <div className="flex flex-grow items-center mx-6 bg-white rounded-full overflow-hidden">
          <select className="px-4 py-2 bg-gray-200 text-black">
            <option>All Categories</option>
            <option>Tin tức</option>
            <option>Liên hệ</option>
          </select>
          <input type="text" className="flex-grow px-4 py-2 text-black" placeholder="Search here" />
          <button className="bg-red-600 px-6 py-2 text-white">Search</button>
        </div>
      </div>

      {/* Navigation Links - Ẩn khi màn hình nhỏ hơn md */}
      <div className="hidden md:flex justify-center border-t border-red-600 py-2 bg-white">
        <div className="flex justify-center py-4 bg-white max-w-[110rem] pr-[23rem]">
          <Link href="/all-products" className="text-black px-4 hover:text-red-500">Tất cả</Link>
          <Link href="#" className="text-black px-4 hover:text-red-500">Điện thoại</Link>
          <Link href="#" className="text-black px-4 hover:text-red-500">Laptop</Link>
          <Link href="#" className="text-black px-4 hover:text-red-500">Âm thanh</Link>
          <Link href="#" className="text-black px-4 hover:text-red-500">Đồng hồ</Link>
          <Link href="#" className="text-black px-4 hover:text-red-500">Đồ gia dụng</Link>
          <Link href="#" className="text-black px-4 hover:text-red-500">Phụ kiện</Link>
          <Link href="#" className="text-black px-4 hover:text-red-500">PC, Màn hình</Link>
          <Link href="#" className="text-black px-4 hover:text-red-500">TV</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;