import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section
      className="w-full py-20 sm:py-40 justify-center flex items-center z-20"
      id="contact"
    >
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2>
            Contact{" "}
            <span className=" bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
              me.
            </span>
          </h2>
        </Reveal>
        <p className="mt-5 text-xl">Ready to bring your ideas to life?</p>

        <a className="mt-10 mb-20" href="mailto:sobayotoby@gmail.com">
          <Button
            title="Let's connect"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm p-6 md:p-8 lg:p-12 w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="text-white text-sm font-medium"
              >
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 h-12"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-white text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 h-12"
                placeholder="Enter your email address"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-white text-sm font-medium"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {/* Submit Button */}
            {/* <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 h-12 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02]"
            >
              Let's connect
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </Button> */}
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
