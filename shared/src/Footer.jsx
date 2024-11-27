import { Link } from "react-router-dom";
import social1 from "../../shared/src/assets/socials/social1.png";
import social2 from "../../shared/src/assets/socials/social2.png";
import social3 from "../../shared/src/assets/socials/social3.png";
import social4 from "../../shared/src/assets/socials/social4.png";
import social5 from "../../shared/src/assets/socials/social5.png";

const Footer = () => {
  return (
    <footer className="bg-[#19525A] px-4 md:px-16 lg:px-32 text-white py-10 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl mb-2 underline">For Customer</h3>
          <span className="text-sm">Find a Practitioner</span>
          <span className="text-sm">Book an Appointment</span>
          <span className="text-sm">Make Payment</span>
          <span className="text-sm">Live Consultant</span>
          <span className="text-sm">Refund</span>
          <span className="text-sm">Shop</span>
          <span className="text-sm">Resources</span>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl mb-2 underline">
            For Practitioners
          </h3>
          <span className="text-sm">Profile Setup</span>
          <span className="text-sm">Organization Setup</span>
          <span className="text-sm">Create Schedule</span>
          <span className="text-sm">Collaboration</span>
          <span className="text-sm">Withdraw</span>
          <span className="text-sm">Paystuff</span>
          <span className="text-sm">QR Code</span>
          <span className="text-sm">Booking Page</span>
          <span className="text-sm">Business Tools</span>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl mb-2 underline">Resources</h3>
          <span className="text-sm">Plans</span>
          <span className="text-sm">Blogs</span>
          <span className="text-sm">Community</span>
          <span className="text-sm">FAQ</span>
          <span className="text-sm">Reviews</span>
          <span className="text-sm">Refund and Returns</span>
          <span className="text-sm">Documentation</span>
          <span className="text-sm">Roadmap</span>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl mb-2 underline">Company</h3>
          <span className="text-sm">About Us</span>
          <span className="text-sm">Contact Us</span>
          <span className="text-sm">Careers</span>
          <span className="text-sm">Support Center</span>
          <span className="text-sm">Affiliate Program</span>
          <span className="text-sm">Trust & Safety</span>
        </div>
      </div>
      <div className="flex gap-7 mt-7">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <Link to="/">
          <img src={social1} alt="social 1" />
        </Link>
        <Link to="/">
          <img src={social2} alt="social 2" />
        </Link>
        <Link to="/">
          <img src={social3} alt="social 3" />
        </Link>
        <Link to="/">
          <img src={social4} alt="social 4" />
        </Link>
        <Link to="/">
          <img src={social5} alt="social 5" />
        </Link>
      </div>

      <hr className="h-0 border-b-1 my-7 border-gray-300" />

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p>Copyright © 2022. Ambel. All rights reserved.</p>
        <div className="flex gap-7 mt-4 lg:mt-0">
          <span className="text-sm">Privacy Policy</span>
          <span className="text-sm">Cookies</span>
          <span className="text-sm">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
