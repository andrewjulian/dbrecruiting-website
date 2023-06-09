import React from "react";
import Trait from "../Components/Trait";

const traits = [
  {
    title: "Extensive Network",
    description:
      "We maintain and establish strong relationships with top clients across various industries, providing us with exclusive access to a broad range of job opportunities. Our extensive network allows us to effectively match talented professionals with the right opportunities that align with their skills and career goals.",
    image: "url(./network.png)",
  },
  {
    title: "Personalized Approach",
    description:
      "At DB Recruitment Group, we believe in taking a personalized approach to understand your company or career goals, strengths, and preferences. We'll work closely with you to find the perfect fit, ensuring a rewarding and fulfilling career journey.",
    image: "url(./personalized.png)",
  },
  {
    title: "Industry Expertise",
    description:
      "Our team of experienced recruiters has in-depth knowledge across a wide range of industries. We stay up-to-date with the latest trends and requirements, enabling us to provide valuable insights and guidance throughout the hiring process.",
    image: "url(./industryexp.png)",
  },
  {
    title: "Confidentiality",
    description:
      "We recognize the significance of discretion and confidentiality throughout your job search. Be reassured that your proprietary information will be treated with the highest level of care and professionalism, ensuring your privacy and security.",
    image: "url(./confidential.png)",
  },
];

const AboutUsPage = () => {
  const displayTraits = traits.map((trait) => (
    <Trait
      trait={trait}
      key={trait.title}
    />
  ));

  return (
    <div className="relative">
      <div
        id="about"
        className="mt-10 bg-gradient-to-b from-white to-[#36b6ff25] px-10 "
      >
        <div className="mx-12 grid grid-cols-1 md:grid-cols-4">
          <div className="mb-8 sm:mb-0 md:col-span-3">
            <h1 className="mb-4 text-4xl font-bold">ABOUT US</h1>
            <p className="mb-4 text-lg text-gray-600">
              DB Recruitment Group was founded in 2022 by David Vacianna and Ben
              Puschett to focus on providing recruiting services to companies in
              the tech and IT industries. With the addition of Shelby Carter as
              lead recruiter, DB Recruiting is uniquely equipped to provide
              customized recruiting services to clients.
            </p>
            <p className="text-lg text-gray-600">
              We are a team of skilled recruiters with a proven track record of
              success as top billers in previous roles. Through the use of RPO
              models, we are able to provide a more efficient and effective
              hiring process for our clients across a variety of industries.
            </p>
          </div>
          <div className="mb-5 flex items-center justify-center md:col-span-1 ">
            <img
              className="h-[18vw] w-auto rounded-full"
              src="/dblogo-bluecircle.png"
              alt="DB Recruiting Logo"
            />
          </div>
        </div>

        <div className=" mx-auto justify-center  text-center md:flex">
          <div className="  grid  md:grid-cols-2 xl:flex">{displayTraits}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
