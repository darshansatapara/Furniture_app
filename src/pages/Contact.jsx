import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Home,
  Building,
  Briefcase,
  Send,
  Star,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const stats = [
    { icon: Home, label: "Homes Built", value: "150+", color: "text-blue-500" },
    { icon: Building, label: "Offices", value: "85+", color: "text-green-500" },
    {
      icon: Briefcase,
      label: "Commercial",
      value: "60+",
      color: "text-purple-500",
    },
    {
      icon: Clock,
      label: "Years Experience",
      value: "12+",
      color: "text-orange-500",
    },
  ];

 return (
  <div className="min-h-screen bg-gray-100">
    {/* Hero Section */}
    <div className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-gray-700">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your next
            project and create something extraordinary together.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent" />
    </div>

    {/* Stats Section */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 -mt-10 relative z-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`p-3 rounded-full bg-gray-100 mb-4 ${stat.color}`}
              >
                <stat.icon size={28} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-700 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
            Send Us a Message
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-base font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none"
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none"
              />
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-400 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Phone className="text-blue-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Phone</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    +91-9876543210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="p-3 bg-green-100 rounded-full">
                  <Mail className="text-green-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    info@company.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default Contact;
