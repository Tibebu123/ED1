import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Construct the mailto link
    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    const mailtoLink = `mailto:tibe13d2144@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Gradient Divider */}
      <div className="w-full h-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-white max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Call Me
                  </h3>
                  <a
                    href="tel:+251920267834"
                    className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +253 +920 3476+45
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Email Me
                  </h3>
                  <a
                    href="mailto:tibe13d2144@gmail.com"
                    className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Edenn@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
