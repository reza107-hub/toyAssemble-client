import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="flex items-center mb-4">
        <img
          src="https://i.ibb.co/1vm9nDn/OIG-removebg-preview.png"
          alt="Website Logo"
          className="h-20 mr-2"
        />
        <h2 className="text-xl text-primary font-bold">ToyAssemble</h2>
      </div>
      <div>
        <span className="footer-title text-primary opacity-100">Services</span>
        <Link to="#" className="link link-hover link-accent">
          Branding
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Design
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Marketing
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Advertisement
        </Link>
      </div>
      <div>
        <span className="footer-title text-primary opacity-100">
          Information
        </span>
        <Link to="#" className="link link-hover link-accent">
          About us
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Contact
        </Link>

        <Link to="#" className="link link-hover link-accent">
          Returns & Exchanges
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Shipping & Delivery
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Shipping
        </Link>
      </div>
      <div>
        <span className="footer-title text-primary opacity-100">Legal</span>
        <Link to="#" className="link link-hover link-accent">
          Terms of use
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Privacy policy
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Cookie policy
        </Link>
      </div>
      <div className="">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ToyAssemble. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          Made with love by{" "}
          <Link to="#" className="underline">
            ToyAssemble Team
          </Link>
        </p>
        <p className="flex items-center justify-center gap-3 mt-3">
          <MdLocationOn /> Charkhai, BeaniBazar, Sylhet
        </p>
        <p className="flex items-center justify-center gap-3 mt-3">
          <MdOutlineMailOutline /> rashidaminur104@gmail.com
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
