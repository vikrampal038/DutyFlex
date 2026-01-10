import { useState } from "react";
import toast from "react-hot-toast";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ----------- VALIDATION -----------
  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!phone.match(/^[0-9]{10}$/)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ----------- SUBMIT FUNCTION -----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    const formData = {
      name,
      email,
      phone,
      message: "Contact request from DutyFlex website",
    };

    try {
      const response = await fetch("https://formspree.io/f/mlgdqavb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Formspree error");
      }

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setErrors({});

      toast.custom(
        (t) => (
          <div
            className={`rounded-lg px-4 py-3 bg-green-600 text-white shadow-lg ${
              t.visible ? "animate-enter" : "animate-leave"
            }`}
          >
            <p className="font-semibold text-base">Form Submitted</p>
            <p className="text-sm opacity-90">
              Our team will contact you shortly.
            </p>
          </div>
        ),
        { duration: 4000 }
      );
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-10 pb-20 w-full flex justify-center items-center gap-10">
      <div className="w-[95%] md:w-[80%] lg:w-[75%] flex flex-col lg:flex-row gap-25 justify-center items-center">
        {/* Left Side */}
        <div className="w-full lg:w-1/3">
          <div className="flex flex-col gap-5">
            <div className="bg-[#eeeeee] w-[65px] h-[65px] flex justify-center items-center rounded-full">
              <img
                src="/Assets/All Images/Path.png"
                alt="contact icon"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <h1 className="text-[24px] md:text-[32px] font-bold text-black">
              Get a free consultancy from our expert right now!
            </h1>

            <p className="text-[16px] text-[#7a7a7a]">
              With lots of unique blocks, you can easily build a page without
              coding.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 p-1 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="border border-[#E7E9ED] rounded-xl p-5 w-110"
          >
            <div className="flex flex-col gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="font-bold">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full border rounded-md py-2 px-3"
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    if (/^[A-Za-z ]*$/.test(e.target.value)) {
                      setName(e.target.value);
                    }
                  }}
                />
                {errors.name && (
                  <small className="text-red-600">{errors.name}</small>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full border rounded-md py-2 px-3"
                  type="email"
                  name="email"
                  placeholder="john@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <small className="text-red-600">{errors.email}</small>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="font-bold">
                  Phone
                </label>
                <input
                  id="phone"
                  className="w-full border rounded-md py-2 px-3"
                  type="tel"
                  name="phone"
                  maxLength="10"
                  placeholder="1234567890"
                  value={phone}
                  onChange={(e) => {
                    if (/^\d{0,10}$/.test(e.target.value)) {
                      setPhone(e.target.value);
                    }
                  }}
                />
                {errors.phone && (
                  <small className="text-red-600">{errors.phone}</small>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-4 p-3 rounded-lg text-white font-semibold ${
                  isSubmitting ? "bg-gray-400" : "bg-[#142965]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Get Free Consultancy"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
