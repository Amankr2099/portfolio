import React, { useState } from "react";
import emailjs from "emailjs-com";

const socialLinks = [
  
  {
    id: 2,
    name: "Gmail",
    icon: <i className="fa-brands fa-google text-2xl" />,
    link: "mailto:imamankr2121@gmail.com",
  },
  {
    id: 3,
    name: "GitHub",
    icon: <i className="fa-brands fa-github text-2xl" />,
    link: "https://github.com/amankr2099",
  },
  {
    id: 4,
    name: "X (Twitter)",
    icon: <i className="fa-brands fa-x twitter text-2xl" />,
    link: "https://x.com/",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: <i className="fa-brands fa-linkedin text-2xl" />,
    link: "https://www.linkedin.com/in/aman-kumar-326342280/",
  },
  {
    id: 1,
    name: "Instagram",
    icon: <i className="fa-brands fa-instagram text-2xl" />,
    link: "https://www.instagram.com/amankr2099",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Used to show success or error messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",'0f05ac71-47d1-4c88-b270-8ab1ee5d308b');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Unable to send email at current moment");
      setResult(data.message);
    }
  };


  return (
  
    <div className="max-w-6xl  my-32" id="contact">
      <div className="mt-6">
        <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl rounded-md ">
          <div>
            <h1 className="text-gray-800 text-3xl font-bold">Let's Talk</h1>
            <p className="text-sm mt-4">
              Have some big idea or brand to develop and need help? Then reach out to me. I'd love to hear about your project and provide help.
            </p>

            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#007bff" viewBox="0 0 479.058 479.058">
                      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                    </svg>
                  </div>
                  <a href="mailto:imamankr2121@gmail.com" className="text-[#2e4eff] text-sm ml-4">
                    <small className="block">Mail</small>
                    <strong>imamankr2121@gmail.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>
              <div className="flex justify-start gap-7 my-6">
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="ml-auto space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="6"
              className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
            ></textarea>
            <button type="submit" className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-2.5 w-full !mt-6">
              Send
            </button>
          </form>

          {status && <p className="text-center mt-4 text-sm text-gray-600">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;

