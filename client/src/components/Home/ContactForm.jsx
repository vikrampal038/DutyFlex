import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const [errors, setErrors] = useState({});

  // ----------- INIT EMAILJS -----------
  useEffect(() => {
    emailjs.init("wP9g3vuBVm1TPyfRX");
  }, []);

  // ----------- VALIDATION -----------
  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email";

    if (!phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Phone must be exactly 10 digits";

    if (!service) newErrors.service = "Please select a service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ----------- SUBMIT FUNCTION -----------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = {
      name,
      email,
      phone,
      service,
      date: new Date().toLocaleString(),
    };

    // Save to localStorage
    localStorage.setItem("contactForm", JSON.stringify(formData));

    // Send Email
    emailjs
      .send(
        "service_1n9880i",
        "template_b0xanhx",
        {
          user_name: name,
          user_email: email,
          user_phone: phone,
          user_service: service,
          sender_name: "Duty Flex",
        }
      )
      .then(() => {
        alert("Email Sent Successfully!");
      })
      .catch(() => {
        alert("Email sending failed!");
      });

    // Reset form after submit
    setName("");
    setEmail("");
    setPhone("");
    setService("");

    alert("Form Submitted Successfully!");
  };

  return (
    <div className="py-14 w-full flex justify-center items-center">
      <div className="w-[95%] md:w-[80%] lg:w-[75%] flex flex-col lg:flex-row justify-center items-center gap-10">

        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-8">
            <div className="bg-[#A1A1A1] w-[87px] h-[87px] flex justify-center items-center rounded-full">
              <img src="/Assets/All Images/Path.png" alt="contact icon" />
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40]  text-black font-bold font-Gilroy leading-10">
                Get a free consultancy from our expert right now!
              </h1>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium font-Gilroy leading-7 text-[#7a7a7a]">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 p-1 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="border border-[#E7E9ED] rounded-xl p-5 w-full"
          >
            <div className="flex flex-col gap-3">

              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[#161C2D] text-[15px] font-bold font-Gilroy">
                  Name
                </label>
                <input
                  className="border border-[#E7E9ED] outline-0 rounded-md py-2 px-3 font-Gilroy"
                  type="text"
                  placeholder="i.e. John Doe"
                  value={name}
                  onChange={(e) => {
                    if (/^[A-Za-z ]*$/.test(e.target.value)) setName(e.target.value);
                  }}
                />
                {errors.name && <small className="text-red-600">{errors.name}</small>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-[#161C2D] text-[15px] font-bold font-Gilroy">
                  Email
                </label>
                <input
                  className="border border-[#E7E9ED] outline-0 rounded-md py-2 px-3 font-Gilroy"
                  type="email"
                  placeholder="i.e. john@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <small className="text-red-600">{errors.email}</small>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[#161C2D] text-[15px] font-bold font-Gilroy">
                  Phone
                </label>
                <input
                  className="border border-[#E7E9ED] outline-0 rounded-md py-2 px-3 font-Gilroy"
                  type="tel"
                  maxLength="10"
                  placeholder="i.e. 1234567890"
                  value={phone}
                  onChange={(e) => {
                    if (/^\d{0,10}$/.test(e.target.value)) setPhone(e.target.value);
                  }}
                />
                {errors.phone && <small className="text-red-600">{errors.phone}</small>}
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1">
                <label className="text-[#161C2D] text-[15px] font-bold font-Gilroy">
                  Which service do you need?
                </label>

                <select
                  className="border border-[#E7E9ED] outline-0 rounded-md py-2 px-3 font-Gilroy"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>Security Guard</option>
                  <option>Gun Man</option>
                  <option>Body Guard</option>
                  <option>Bouncers</option>
                  <option>House Keeping Staff</option>
                </select>

                {errors.service && (
                  <small className="text-red-600">{errors.service}</small>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-5 bg-[#142965] p-3 rounded-lg cursor-pointer">
              <button className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold font-Gilroy" type="submit">
                Get Free Consultancy
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default ContactForm;
