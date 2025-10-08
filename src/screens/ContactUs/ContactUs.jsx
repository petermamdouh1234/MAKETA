import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Textarea } from "../../components/ui/textarea";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const ContactUs = () => {
  useScrollReveal();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  const navigationItems = [
    { label: "HOME", href: "/", active: false },
    { label: "OUR WORK", href: "/our-work", active: false },
    { label: "ABOUT US", href: "/about-us", active: false },
    { label: "SERVICES", href: "/our-services-u45-main", active: false },
    { label: "CONTACT US", href: "/contact-us", active: true },
  ];

  const subjectOptions = [
    { id: "General Inquiry", label: "General Inquiry" },
    { id: "Project Proposal", label: "Project Proposal" },
    { id: "Support", label: "Support" },
    { id: "Other", label: "Other" },
  ];

  const contactInfo = [
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/bxs-phone-call.svg",
      text: "+201020828280",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/ic-sharp-email.svg",
      text: "Info@maketaagency.com",
    },
    {
      icon: "https://c.animaapp.com/mg7bpj7aUsX0qj/img/carbon-location-filled.svg",
      text: "South Lotus, 8th district, 1st Settlement, Cairo, Egypt.",
    },
  ];

  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="[font-family:'Bebas_Neue',Helvetica] font-normal text-white text-[120px] md:text-[180px] lg:text-[240px] tracking-[0] leading-[normal] whitespace-nowrap reveal-fade">
          get in touch
        </div>
      </div>

      {/* Header Navigation */}
      <header className="flex w-full items-center justify-between px-8 py-6 relative reveal-fade">
        <Link to="/" className="reveal-left">
          <img
            className="w-[120px] h-[100px] object-cover hover:scale-105 transition-transform duration-300"
            alt="Logo copy"
            src="https://c.animaapp.com/mg7bpj7aUsX0qj/img/logo-copy-1-8.png"
          />
        </Link>

        <nav className="flex items-center gap-[60px] reveal-right">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              className={`w-fit [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-sm tracking-[0] leading-[normal] block transition-colors hover:text-[#ffcc04] ${
                item.active ? "text-[#ffcc04]" : "text-white"
              }`}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="reveal-left">
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* First Row - Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-4"
                  >
                    First Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="bg-transparent border-0 border-b border-white rounded-none px-0 pb-2 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:border-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5"
                  >
                    Last Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="bg-transparent border-0 border-b border-white rounded-none px-0 pb-2 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:border-white"
                    />
                  </div>
                </div>
              </div>

              {/* Second Row - Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-0 border-b border-white rounded-none px-0 pb-2 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:border-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-5"
                  >
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-transparent border-0 border-b border-white rounded-none px-0 pb-2 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:border-white"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Selection */}
              <div className="space-y-4">
                <Label className="[font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-sm tracking-[0] leading-5">
                  Select Subject?
                </Label>
                <RadioGroup
                  value={subject}
                  onValueChange={setSubject}
                  className="flex flex-wrap gap-x-[18px] gap-y-2"
                >
                  {subjectOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={option.id}
                        id={option.id}
                        className="border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-black"
                      />
                      <Label
                        htmlFor={option.id}
                        className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-xs tracking-[0] leading-5 cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="[font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-white text-xs tracking-[0] leading-5"
                >
                  Message
                </Label>
                <div className="relative">
                  <Textarea
                    id="message"
                    placeholder="Write your message.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-transparent border-0 border-b border-white rounded-none px-0 pb-2 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:border-white resize-none min-h-[40px] [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-sm"
                  />
                </div>
              </div>

              {/* Send Message Button */}
              <Button 
                type="submit"
                className="bg-[#ffcc04] hover:bg-[#ffcc04]/90 text-black px-8 py-3 rounded-[15px] h-auto [font-family:'Poppins',Helvetica] font-medium text-sm transition-colors duration-300"
                onClick={() => {
                  const phoneNumber = "+201020828280"; // WhatsApp number
                  const whatsappMessage = encodeURIComponent(
                    `Hello Maketa Agency,\n\n` +
                    `I'd like to get in touch regarding: ${subject}\n\n` +
                    `My details are:\n` +
                    `Name: ${firstName} ${lastName}\n` +
                    `Email: ${email}\n` +
                    `Phone: ${phone}\n\n` +
                    `Message:\n${message}`
                  );
                  window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
                }}
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information Card */}
          <div className="reveal-right">
            <Card className="w-full bg-white rounded-[20px] border-0">
              <CardHeader className="px-[20px] pt-[28px] pb-4">
                <CardTitle className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal]">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="px-[20px] pb-[28px]">
                <div className="space-y-6 mt-[30px]">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 reveal-stagger">
                      <img
                        className="w-5 h-5 flex-shrink-0"
                        alt="Contact icon"
                        src={info.icon}
                      />
                      <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                        {info.text}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Profile Download Button */}
            <div className="mt-8 reveal-up">
              <a 
                href="/static/Maketa_Company_Profile.pdf" // Placeholder PDF path
                download="Maketa_Company_Profile.pdf"
                className="block w-full"
              >
                <Button 
                  className="w-full bg-[#ffcc04] hover:bg-[#ffcc04]/90 text-black px-8 py-3 rounded-[15px] h-auto [font-family:'Poppins',Helvetica] font-medium text-sm transition-colors duration-300"
                >
                  Download Company Profile
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
