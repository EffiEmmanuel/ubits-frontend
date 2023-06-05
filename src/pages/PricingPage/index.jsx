import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { MdCheck } from "react-icons/md";

// Images
import heroImage from "../../assets/images/hero-img2.png";
import heroImageAlternative from "../../assets/images/hero-img.svg";
import templateOne from "../../assets/images/template1.png";
import templateTwo from "../../assets/images/template2.png";
import templateThree from "../../assets/images/template3.png";
import radialGradientLeft from "../../assets/images/radial-bg.svg";
import radialGradientRight from "../../assets/images/radialbg-right.svg";

// Icons
import aiPoweredIcon from "../../assets/icons/ai-powered.svg";
import customizableTemplatesIcon from "../../assets/icons/c-templates.svg";
import easyToUseIcon from "../../assets/icons/easy-to-use.svg";
import FeatureCard from "../../components/ui/FeatureCard";
import HeadingAndSubtitle from "../../components/ui/HeadingAndSubtitle";

// Logos
import ubitsLogo from "../../assets/logos/ubits-logo.svg";
import twitterLogo from "../../assets/logos/twitter.svg";
import facebookLogo from "../../assets/logos/facebook.svg";
import instagramLogo from "../../assets/logos/instagram.svg";
import FAQSection from "../../components/ui/FAQSection";

function PricingPage() {
  return (
    <div className="text-white">
      {/* Navbar */}
      <nav className="flex flex-row justify-between px-7 lg:px-14 pt-3 items-center">
        {/* Company Logo */}
        <img
          src={ubitsLogo}
          alt="UBITS Logo"
          className="w-28 h-28"
          style={{ objectFit: "contain" }}
        />

        <ul className="text-white flex flex-row gap-x-10">
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li>
            <Link
              to="/auth/register"
              className="bg-ubtisDarkBlue border-[0.5px] px-7 py-3 rounded-lg text-ubtisLightBlue border-ubtisLightBlue hover:bg-[#B4CCFECC] hover:text-white"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero section */}
      <div className="min-h-screen px-7 lg:px-14 -mt-52 flex flex-row justify-between items-center relative">
        {/* Radial gradient asset */}
        <img
          src={radialGradientLeft}
          alt=""
          className="absolute left-0 top-0"
        />
        {/* Left part */}
        <div className="lg:w-1/2 flex flex-col">
          <Fade up duration={1000}>
            <h1 className="font-bold text-3xl lg:text-5xl lg:leading-[4rem] leading-[4rem]">
              Pricing
            </h1>
          </Fade>
          <Fade up duration={1000} delay={300}>
            <p className="mt-4 leading-[1.5rem] lg:leading-[1.5rem]">
              Unlock the Value of Exceptional Presentations: Find Your Ideal
              Plan on Our Pricing Page and Choose from a Range of Feature-Rich
              Options Tailored to Fit Your Unique Requirements.
            </p>
          </Fade>
        </div>
      </div>

      {/* Main section */}
      <main className="relative -mt-52 px-7 lg:px-14 text-ubtisDarkBlue">
        {/* Radial gradient asset */}
        <img
          src={radialGradientRight}
          alt=""
          className="absolute right-0 top-0 z-0"
        />
        {/* Feaatures */}
        <div className="">
          {/* Pricing packages */}
          <Fade duration={1200}>
            <div className="bg-white h-auto flex flex-col sm:flex-wrap lg:flex-nowrap gap-y-10 lg:flex-row lg:gap-x-10 rounded-lg p-10 relative z-10">
              {/* Free Package */}
              <div className="lg:w-1/4 relative h-[530px] p-10 hover:rounded-lg hover:bg-[#385575] hover:text-white">
                {/*Price  */}
                <div className="flex flex-row gap-x-5 items-center">
                  <h2 className="text-3xl font-bold">$0</h2>
                  <span>/month</span>
                </div>
                {/* Package name */}
                <h3 className="text-3xl font-semibold mt-4">Free</h3>
                {/* Package description */}
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                {/* Features */}
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40 flex flex-row justify-center items-center">
                    <MdCheck
                      size={20}
                      className="hover:text-white text-[#385575] "
                    />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>

                {/* Purchase plan */}
                <Link
                  to="/"
                  className="absolute bottom-0 px-7 py-3 w-52 mt-4 mb-10 rounded-lg bg-ubtisDarkBlue text-white"
                >
                  Purchase plan
                </Link>
              </div>
              {/* Basic Package */}
              <div className="lg:w-1/4 relative h-[530px] p-10 hover:rounded-lg hover:bg-[#385575] hover:text-white">
                {/*Price  */}
                <div className="flex flex-row gap-x-5 items-center">
                  <h2 className="text-3xl font-bold">$10</h2>
                  <span>/month</span>
                </div>
                {/* Package name */}
                <h3 className="text-3xl font-semibold mt-4">Basic</h3>
                {/* Package description */}
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                {/* Features */}
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40 flex flex-row justify-center items-center">
                    <MdCheck
                      size={20}
                      className="hover:text-white text-[#385575] "
                    />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>

                {/* Purchase plan */}
                <Link
                  to="/"
                  className="absolute bottom-0 px-7 py-3 w-52 mt-4 mb-10 rounded-lg bg-ubtisDarkBlue text-white"
                >
                  Purchase plan
                </Link>
              </div>
              {/* Pro Package */}
              <div className="lg:w-1/4 relative h-[530px] p-10 hover:rounded-lg hover:bg-[#385575] hover:text-white">
                {/*Price  */}
                <div className="flex flex-row gap-x-5 items-center">
                  <h2 className="text-3xl font-bold">$40</h2>
                  <span>/month</span>
                </div>
                {/* Package name */}
                <h3 className="text-3xl font-semibold mt-4">Pro</h3>
                {/* Package description */}
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                {/* Features */}
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40 flex flex-row justify-center items-center">
                    <MdCheck
                      size={20}
                      className="hover:text-white text-[#385575] "
                    />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>

                {/* Purchase plan */}
                <Link
                  to="/"
                  className="absolute bottom-0 px-7 py-3 w-52 mt-4 mb-10 rounded-lg bg-ubtisDarkBlue text-white"
                >
                  Purchase plan
                </Link>
              </div>
              {/* Enterprse Package */}
              <div className="lg:w-1/4 relative h-[530px] p-10 hover:rounded-lg hover:bg-[#385575] hover:text-white">
                {/*Price  */}
                <div className="flex flex-row gap-x-5 items-center">
                  <h2 className="text-3xl font-bold">$90</h2>
                  <span>/month</span>
                </div>
                {/* Package name */}
                <h3 className="text-3xl font-semibold mt-4">Enterprse</h3>
                {/* Package description */}
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                {/* Features */}
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40  flex flex-row justify-center items-center">
                    <MdCheck size={20} color="#385575" className="" />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>
                <div className="flex flex-row items-center gap-x-5 my-5">
                  <div className="h-6 w-6 rounded-full bg-[#FFF]/40 flex flex-row justify-center items-center">
                    <MdCheck
                      size={20}
                      className="hover:text-white text-[#385575] "
                    />
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                </div>

                {/* Purchase plan */}
                <Link
                  to="/"
                  className="absolute bottom-0 px-7 py-3 w-52 mt-4 mb-10 rounded-lg bg-ubtisDarkBlue text-white"
                >
                  Purchase plan
                </Link>
              </div>
            </div>
          </Fade>
        </div>

        {/* Templates */}
        <div className="mt-40">
          {/* QUESTIONS HERE */}
          <div className="text-white">
            <FAQSection />
          </div>
        </div>
      </main>

      {/* Footer - #061727 -> #154A80 */}
      {/* <footer className="flex pb-20 flex-row gap-x-32 px-7 lg:px-14 bg-gradient-to-b from-[#061727] to-[#154A80] mt-32"> */}
      <footer className="flex flex-col pb-20 lg:flex-row lg:justify-around px-7 lg:px-14 bg-gradient-to-b from-[#061727] to-[#154A80] mt-32">
        {/* Company, about and socials */}
        <div className="lg:w-1/4">
          {/* Company Logo */}
          <img
            src={ubitsLogo}
            alt="UBITS Logo"
            className="w-28 h-28"
            style={{ objectFit: "contain" }}
          />

          {/* Call to action */}
          <Link className="lg:hidden px-7 py-3 w-52 mt-4 rounded-lg bg-ubtisLightBlue text-ubtisDarkBlue">
            Create Slides Now
          </Link>

          <h3 className="text-xl font-semibold mt-12">About UBITS</h3>
          <p className="mt-2 leading-[1.5rem] lg:leading-[1.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          {/* Social icons */}
          <div className="flex flex-row gap-x-3 mt-4">
            {/* Twitter */}
            <img
              src={twitterLogo}
              alt="Follow UBITS on Twitter"
              className="w-5"
              style={{ objectFit: "contain" }}
            />
            {/* Facebook */}
            <img
              src={facebookLogo}
              alt="Follow UBITS on Facebook"
              className="w-5"
              style={{ objectFit: "contain" }}
            />
            {/* Instagram */}
            <img
              src={instagramLogo}
              alt="Follow UBITS on Instagram"
              className="w-5"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        {/* CTA and Nav links */}

        <div className="flex flex-col w-2/4">
          <div className="flex flex-row justify-end">
            {/* Call to action */}
            <Link className="hidden lg:inline-block px-7 py-3 w-52 mt-4 rounded-lg bg-ubtisLightBlue text-ubtisDarkBlue">
              Create Slides Now
            </Link>
          </div>
          {/* Links */}
          <div className="flex flex-col gap-y-10 lg:flex-row flex-wrap lg:justify-between mt-10">
            {/* Link group */}
            <div>
              <h3 className="text-xl font-semibold">Product</h3>
              <ul className="mt-2">
                <li className="my-3">
                  <Link to="/product/pricing">Pricing</Link>
                </li>
                <li className="my-3">
                  <Link to="/product/templates">Templates</Link>
                </li>
              </ul>
            </div>
            {/* Link group */}
            <div>
              <h3 className="text-xl font-semibold">Company</h3>
              <ul className="mt-2">
                <li className="my-3">
                  <Link to="/company/about">About Us</Link>
                </li>
                <li className="my-3">
                  <Link to="/company/services">Services</Link>
                </li>
                <li className="my-3">
                  <Link to="/company/faqs">FAQs</Link>
                </li>
              </ul>
            </div>
            {/* Link group */}
            <div>
              <h3 className="text-xl font-semibold">Support</h3>
              <ul className="mt-2">
                <li className="my-3">
                  <Link to="/support/contact">Contact Us</Link>
                </li>
                <li className="my-3">
                  <Link to="/support/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="my-3">
                  <Link to="/support/terms-of-service">Terms Of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PricingPage;
