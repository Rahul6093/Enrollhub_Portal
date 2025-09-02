import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Github,
  X as TwitterX
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-10 pb-10 text-sm space-y-16">

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto text-center space-y-4 border-t border-gray-300 pt-10">
        <h3 className="text-xl md:text-2xl font-semibold ">Subscribe to our newsletter</h3>
        <p className="text-sm text-gray-600">
          Get updates on new courses, workshops, and exclusive offers — straight to your inbox.
        </p>
        <form className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full border border-gray-300 text-black w-64"
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-25 *:px-5">

        {/* Get in Touch */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold">Get in Touch</h4>
          <div className="flex gap-3 *:text-gray-700">
            <MapPin className="min-w-10 ml-[-10px] mt-1 " />
            <p className='ml-[-5px]'>123 Enrollhub Avenue, Knowledge City, Bengaluru, 560070</p>
          </div>
          <div className="flex items-center gap-3 *:text-gray-700">
            <Phone className="min-w-5" />
            <a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a>
          </div>
          <div className="flex items-center gap-3 *:text-gray-700">
            <Mail className="min-w-5" />
            <a href="mailto:info@zenithlearn.com" className="hover:underline">info@enrollhub.com</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold">Quick Links</h4>
          <ul className="space-y-2 *:text-gray-700">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Our Programs</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold">Legal</h4>
          <ul className="space-y-2 *:text-gray-700">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
            <li><a href="/refund-policy" className="hover:underline">Refund Policy</a></li>
            <li><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className="space-y-3">
          <h4 className="text-xl font-bold">Help</h4>
          <ul className="space-y-2 *:text-gray-700">
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
            <li><a href="/support" className="hover:underline">Support Center</a></li>
            <li><a href="/feedback" className="hover:underline">Feedback</a></li>
            <li><a href="/community" className="hover:underline">Community Forum</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
        <p>© 2025 Enrollhub. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-pink-400" />
          </a>
          <a href="https://x.com" target="_blank" aria-label="X (formerly Twitter)">
            <TwitterX className="w-5 h-5 hover:text-gray-300" />
          </a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube">
            <Youtube className="w-5 h-5 hover:text-red-500" />
          </a>
          <a href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};