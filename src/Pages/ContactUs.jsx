import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="mb-2 p-12">
        <div className="bg-white p-7 flex flex-col gap-6 rounded-3xl">
          <div className="p-4 text-3xl text-center font-bold border-b-2 border-gray-200 shadow-lg">
            <span>
              Contact Us
            </span>
          </div>
          <div className="flex flex-row gap-80">
            <div>
              <img
                src="./contactus.jpg"
                alt=""
                className="w-[500px] h-[300px] rounded-3xl"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
              <div>
                <div className="font-semibold text-xl">Call Us :-</div>
                <div>+91-1234567890</div>
              </div>

              <div>
                <div className="font-semibold text-xl">Email Us :-</div>
                <div>itshivamvyas@gmail.com</div>
              </div>

              <div>
                <div className="font-semibold text-xl">WhatsApp Us :-</div>
                <div>+91-1234567890</div>
              </div>

              <div>
                <div className="font-semibold text-xl">
                  Follow Us On Instagram :-
                </div>
                <div>itshivamvyas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
