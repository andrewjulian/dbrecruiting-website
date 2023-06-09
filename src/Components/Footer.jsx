import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [user_email, setEmail] = useState("");
  const [user_name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const form = useRef();

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        // Your function to be executed after the delay
        setSuccess(false);
      }, 3000);
    }
  }, [success]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!user_email || !message) {
      setError("Please fill in all fields");
      return;
    } else {
      setError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      setError("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm(
        "service_hlgfgbz",
        "template_kzyj8ih",
        form.current,
        "0AoACuAncAwV4gUSt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log("email sent");

    setEmail("");
    setMessage("");
    setName("");
    setSuccess(true);
  };

  return (
    <div
      id="footer"
      className=" text-base-content bg-black px-5 text-[#36b6ff]"
    >
      <footer className="border-t-2 px-3 pt-4 lg:px-9">
        <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a className="inline-flex items-center">
              <img
                className="my-4 h-16 w-16"
                src="/dblogo-whitecircle.png"
                alt="DB Recruiting Logo"
              />
              <span className=" ml-4 text-2xl font-bold tracking-wide">
                DB Recruitment Group
              </span>
            </a>
            <div className=" lg:max-w-xl">
              <p className=" text-sm text-white">
                DB Recruitment Group is a team of skilled recruiters with a
                proven track record of success as top billers in previous roles.
                Through the use of RPO models, weare able to provide a more
                efficient and effective hiring process for our clients across a
                variety of industries.
              </p>
            </div>
            <div>
              <p className="mt-4 text-lg font-bold tracking-wide text-[#36b6ff]">
                Connect with Us!
              </p>
              <div className="flex items-center gap-1 pr-2">
                <div className="flex items-center gap-1 pr-2">
                  <a
                    className="mt-2"
                    href="https://www.linkedin.com/company/db-recruitment-group/"
                    target="_blank"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                      alt="linkedin"
                      className="h-16 w-16"
                    />
                  </a>
                </div>
                <div className="mt-2 grid items-center gap-1 px-2">
                  <div className=" flex">
                    <a
                      href="#"
                      title="send email"
                    >
                      <p className="mr-1 text-white">
                        Email: info@dbrecruitmentgroup.com
                      </p>
                    </a>
                  </div>
                  <div className="flex">
                    <p className="mr-1 text-white">Phone: (347)-915-5404</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:mt-6">
            <p className="text-lg font-bold tracking-wide text-[#36b6ff]">
              Industries Served
            </p>
            <a className="text-gray-400">Defense</a>
            <a className="text-gray-400">Cybersecurity</a>
            <a className="text-gray-400">MSP</a>
            <a className="text-gray-400">SaaS</a>

            <p className="text-lg font-bold tracking-wide text-[#36b6ff]">
              Services Offered
            </p>
            <a className="text-gray-400">Direct Hire</a>
            <a className="text-gray-400">Contract Staffing</a>
            <a className="text-gray-400">Recruitment Process Outsourcing </a>
            <a className="text-gray-400">Executive Search</a>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:mt-5">
            <p className=" text-lg font-bold tracking-wide text-[#36b6ff]">
              Send Us a Message
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-2"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-300 p-2 text-black"
                type="text"
                placeholder="Email:"
                name="user_email"
                id="user_email"
                value={user_email}
              />
              <input
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-gray-300 p-2 text-black"
                type="text"
                placeholder="Name:"
                name="user_name"
                id="user_name"
                value={user_name}
              />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="h-[12vh] border-2 border-gray-300 p-2 text-black"
                name="message"
                id="message"
                placeholder="Message content..."
                value={message}
              />
              <button
                type="submit"
                className=" bg-gray-800 p-2 text-[#36b6ff] hover:bg-[#36b6ff] hover:text-white"
              >
                Send Message
              </button>
              {success ? (
                <div
                  className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400"
                  role="alert"
                >
                  <span className="font-medium">Email Sent!</span> I will get
                  back to you as soon as I can. Thanks for connecting!
                </div>
              ) : null}

              {error ? (
                <div
                  class="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span className="font-medium">Error!</span> {error}
                </div>
              ) : null}
            </form>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between border-t pb-10 pt-5 lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright DB Recruitment Group 2023. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
