import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Dialog } from "@headlessui/react";

import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z8fm6dk",
        "template_nizwzft",
        form.current,
        "KhjGVvVM0L4qPBTsh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16 ">
      <div className="max-w-6xl mx-auto  p-10   grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-9">
        <div>
          <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-10">
            We'd love to hear from you. Please fill out the form below.
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="border border-gray-400 p-4 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="border border-gray-400 p-4 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="whatsapp_number"
              placeholder="WhatsApp Number"
              className="border border-gray-400 p-4 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 md:col-span-2"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="border border-gray-400 p-4 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 md:col-span-2"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300 md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Address:
          </h3>

          {/* China Address */}
          <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-2">China Address:</p>
            <p className="text-gray-600">
              China warehouse 仓库地址： 广东省广州市白云区白云湖街道
              夏花二路961号恒河沙617仓 :Globit 18665713153
            </p>
            <p className="text-gray-600">Postal Code: 510000</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=广州市白云区白云湖街道夏花二路961号"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 underline mt-2"
            >
              <FaMapMarkerAlt className="mr-2" /> View on Google Maps
            </a>
          </div>

          {/* Ghana Address */}
          <div>
            <p className="font-semibold text-gray-700 mb-2">Ghana Address:</p>
            <p className="text-gray-600">Accra: 15th Sun Street, Ring Road</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=15th+Sun+Street+Ring+Road+Accra+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 underline mt-2"
            >
              <FaMapMarkerAlt className="mr-2" /> Accra - View on Google Maps
            </a>

            <p className="text-gray-600 mt-4">
              Kumasi: WR3 Vole Street, Tanoso - Topre
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=WR3+Vole+Street+Tanoso+Topre+Kumasi+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 underline mt-2"
            >
              <FaMapMarkerAlt className="mr-2" /> Kumasi - View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white rounded-lg max-w-sm mx-auto p-6 relative z-10 shadow-xl">
            <FaCheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <Dialog.Title className="text-lg font-medium text-gray-800 text-center">
              Message Sent Successfully!
            </Dialog.Title>
            <p className="text-center text-gray-600 mt-2 mb-4">
              We will get back to you shortly.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default ContactSection;
