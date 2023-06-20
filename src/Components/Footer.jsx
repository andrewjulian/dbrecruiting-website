import React from "react";

const Footer = () => {
  return (
    <div className=" text-base-content bg-black px-5 text-[#36b6ff]">
      <footer className="border-t-2 px-3 pt-4 lg:px-9">
        <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a className="inline-flex items-center">
              <img
                className="m-4 h-16 w-16"
                src="/dblogo-whitecircle.png"
                alt="DB Recruiting Logo"
              />
              <span className="ml-2 text-xl font-bold tracking-wide">
                DB Recruitment Group
              </span>
            </a>
            <div className=" lg:max-w-xl">
              <p className="text-sm text-white">
                DB Recruitment Group is a team of skilled recruiters with a
                proven track record of success as top billers in previous roles.
                Through the use of RPO models, weare able to provide a more
                efficient and effective hiring process for our clients across a
                variety of industries.
              </p>
            </div>
            <div>
              <p className="mt-4 text-base font-bold tracking-wide text-[#36b6ff]">
                Connect with Us!
              </p>
              <div className="flex items-center gap-1 px-2">
                <div className="flex items-center gap-1 px-2">
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
                <div className="mt-4 grid items-center gap-1 px-2">
                  <div className=" flex">
                    <a href="#" title="send email">
                      <p className="mr-1 text-gray-800">
                        Email: info@dbrecruitmentgroup.com
                      </p>
                    </a>
                  </div>
                  <div className="flex">
                    <p className="mr-1 text-gray-800">Phone: (347)-915-5404</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:mt-10">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Industries Served
            </p>
            <a className="text-orange-500">Defense</a>
            <a className="text-orange-500">Cybersecurity</a>
            <a className="text-orange-500">MSP</a>
            <a className="text-orange-500">SaaS</a>

            <p className="text-base font-bold tracking-wide text-gray-900">
              Services Offered
            </p>
            <a className="text-orange-500">Direct Hire</a>
            <a className="text-orange-500">Contract Staffing</a>
            <a className="text-orange-500">Recruitment Process Outsourcing </a>
            <a className="text-orange-500">Executive Search</a>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:mt-10">
            <p className="text-base font-bold tracking-wide text-gray-900">
              About Us
            </p>
            <a className="text-orange-500">Our Team</a>

            <p className="text-base font-bold tracking-wide text-gray-900">
              Contact Us
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between border-t pb-10 pt-5 lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2023 DB Recruitment Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
