import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-lg text-green-100">
            We'd love to hear from you. Send us a message anytime.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FiMapPin className="text-green-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiPhone className="text-green-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">
                    +94 71 234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiMail className="text-green-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">
                    support@freshmarket.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiClock className="text-green-600 text-2xl" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-600">
                    Mon - Sat : 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;