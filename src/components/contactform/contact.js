import React, { useState, useEffect, useRef } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { TbMessageChatbot } from "react-icons/tb";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-left'); // Left Section
        } else {
          entry.target.classList.remove('animate-slide-in-left');
        }
      });
    });

    const observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-right'); // Right Section
        } else {
          entry.target.classList.remove('animate-slide-in-right');
        }
      });
    });

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      observerRight.observe(rightSectionRef.current);
    }

    return () => {
      if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
      if (rightSectionRef.current) observerRight.unobserve(rightSectionRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row mx-4 md:mx-24 shadow-lg w-full">
        
        {/* Left Section - Contact Info */}
        <div
          ref={leftSectionRef}
          className="w-full lg:w-1/2 p-10 bg-white opacity-0 transition-opacity duration-700"
        >
          <h2 className="text-[16px] font-marko mb-4">Let's get in touch</h2>
          <p className="text-gray-600 text-[16px] font-katibeh mb-6">We're open for any suggestion or just to have a chat.</p>
          
          <div className="font-katibeh mt-14 text-[#676565] space-y-14">
            <div className="flex items-center">
              <IoCallOutline className="text-[20px] mx-4" />
              <div className='text-[20px]'>
                <p>+91 8754768231</p>
                <p>04633 271620</p>
              </div>
            </div>

            <div className="flex items-center">
              <TfiEmail className="text-[20px] text-[#676565] mx-4" />
              <p className='text-[20px]'>contact@psectech.in</p>
            </div>

            <div className="flex items-start">
              <div className="relative group w-10 h-10">
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <SlLocationPin className="w-[25px] h-[25px]" />
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-full transition-all duration-300 transform group-hover:w-[300px] group-hover:h-[200px] group-hover:rounded-lg group-hover:top-[-95px] group-hover:left-[-95px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.94318423471!2d77.42009917314327!3d8.977375689798766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b069d817c205895%3A0x4c4a020fc70a1c3b!2sPavitha%20Consultancy%20Services%20(PCS)%20OPC%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1729489276840!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <p className="text-[20px] text-[#676565] ml-4">
                P.M Complex,14-1-123/7,Sankarankovil Road,<br />
                Sangeetha Mobiles Upstairs,<br />
                Surandai-627 859, Tenkasi(Dt)
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div
          ref={rightSectionRef}
          className="w-full lg:w-1/2 p-10 bg-gradient-to-b from-gray-200 to-blue-300 opacity-0 transition-opacity duration-700"
        >
          <h2 className="text-[20px] font-bold mb-6 font-marko text-center">Contact with us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="relative">
              <CiUser className="absolute left-5 top-1/2 h-[15px] w-[15px] transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="FULL NAME"
                className={`pl-12 pr-4 py-3 w-full text-[12px] rounded-full  ${errors.fullName ? 'border-red-500' : ''}`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div className="relative">
              <TfiEmail className="absolute left-5 top-1/2 transform h-[15px] w-[15px] -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className={`pl-12 pr-4 py-3 w-full text-[12px] rounded-full  ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="relative w-full">
              <TbMessageChatbot className="absolute left-4 h-[15px] w-[15px] top-6 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                rows="5"
                className={`pl-10 pr-4 pt-4 w-full rounded-xl  text-[12px] ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-950 font-marko text-white text-[16px] rounded-full transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
