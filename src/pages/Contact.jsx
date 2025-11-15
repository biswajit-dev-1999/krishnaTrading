import React, { useState } from "react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import InputField from "../components/ui/InputField";
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Get In Touch"
          subtitle="Reach out to Krishna Trading Company for inquiries or bulk orders"
          theme="light"
        />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 rounded-2xl shadow-lg"
          >
            <InputField
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-4"
            />
            <TextArea
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="mt-4"
              required
            />
            <Button type="submit" variant="primary" className="mt-6 w-full">
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-700 space-y-5">
            <div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3">
                Contact Details
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-orange-500" />
                  7506077743
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-orange-500" />
                  salesktc74@gmail.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-orange-500 mt-1" />
                  Machhua Bazar, Near BOB ATM, Infront of LIC Office,  
                  Cuttack – 753001, Odisha
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg mt-6">
              <iframe
                title="Krishna Trading Company Location"
                src="https://www.google.com/maps?q=Machhua%20Bazar%20Cuttack&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
