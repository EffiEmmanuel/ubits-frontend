import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

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

function Homepage() {
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
      <div className="min-h-screen px-7 lg:px-14 flex flex-row justify-between items-start mt-40 relative">
        {/* Radial gradient asset */}
        <img
          src={radialGradientLeft}
          alt=""
          className="absolute left-0 top-0 z-[-1]"
        />
        {/* Left part */}
        <div className="lg:w-1/2 flex flex-col">
          <Fade up duration={1000}>
            <h1 className="font-bold text-3xl lg:text-5xl lg:leading-[4rem] leading-[4rem]">
              Ignite Your Presentations with AI Brilliance: Unleash the Power of
              Smart Slides!
            </h1>
          </Fade>
          <Fade up duration={1000} delay={300}>
            <p className="mt-4 leading-[1.5rem] lg:leading-[1.5rem]">
              Welcome to UBITS: Your Gateway to Transformative Presentations
              Enhanced by AI Brilliance! Discover the Power of Smart Slides and
              Captivate Audiences with Dynamic Visuals and Unforgettable
              Messages.
            </p>
          </Fade>
          {/* Call to action */}
          <Link className="px-7 py-3 w-52 mt-4 rounded-lg bg-ubtisLightBlue text-ubtisDarkBlue">
            Create Slides Now
          </Link>
        </div>
        {/* Right part */}
        <div className="lg:w-1/2 lg:flex justify-end hidden">
          <Fade delay={300} duration={1000}>
            <img
              src={heroImage}
              // src={heroImageAlternative}
              alt="Ignite Your Presentations with AI Brilliance: Unleash the Power of
            Smart Slides!"
              className="max-h-lg max-w-lg"
              style={{
                objectFit: "contain",
              }}
            />
          </Fade>
        </div>
      </div>

      {/* Main section */}
      <main className="relative">
        {/* Radial gradient asset */}
        <img
          src={radialGradientRight}
          alt=""
          className="absolute right-0 top-0"
        />
        {/* Feaatures */}
        <div className="">
          {/* Headline */}
          <div className="px-10 lg:px-0 -mt-52">
            <HeadingAndSubtitle
              heading="Features"
              subtitle="Explore our featured offerings below to unlock the full potential
              of our platform."
            />
          </div>

          {/* Features */}
          <div className="flex flex-row justify-center mt-10">
            <div className="flex flex-col gap-y-10 lg:flex-row justify-between items-center lg:gap-x-20">
              {/* Feature */}
              <FeatureCard image={aiPoweredIcon} text="AI Powered" />
              <FeatureCard
                image={customizableTemplatesIcon}
                text="Customizable Templates"
              />
              <FeatureCard image={easyToUseIcon} text="Easy to use" />
            </div>
          </div>
        </div>

        {/* Templates */}
        <div className="mt-40">
          <div className="px-10 lg:px-0">
            <HeadingAndSubtitle
              heading="Templates"
              subtitle="Browse through captivating presentations crafted with UBITS, showcasing the incredible possibilities of our platform."
            />
          </div>

          <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:justify-center mt-20 px-20 lg:px-0">
            {/* Image One */}
            <img
              src={templateOne}
              alt="Legacy and impact"
              className="w-full lg:max-w-lg relative lg:-right-32 hover:z-20"
              style={{ objectFit: "contain" }}
            />
            {/* Image One */}
            <img
              src={templateTwo}
              alt="Legacy and impact"
              className="w-full lg:max-w-2xl relative z-10"
              style={{ objectFit: "contain" }}
            />
            {/* Image One */}
            <img
              src={templateThree}
              alt="Legacy and impact"
              className="w-full lg:max-w-lg relative lg:-left-32 hover:z-20"
              style={{ objectFit: "contain" }}
            />
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

export default Homepage;
