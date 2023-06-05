import React from "react";
import Trait from "../Components/Trait";

const traits = [
  {
    title: "Extensive Network",
    description:
      "We have cultivated strong relationships with top clients in the defense and space sector, giving us exclusive access to a wide range of job openings. Our vast network allows us to match talented professionals like you with the right opportunities that align with your skills and aspirations.",
  },
  {
    title: "Personalized Approach",
    description:
      "At DB Recruitment Group, we believe in taking a personalized approach to understand your career goals, strengths, and preferences. We'll work closely with you to find the perfect fit, ensuring a rewarding and fulfilling career journey.",
  },
  {
    title: "Industry Expertise",
    description:
      "Our team of experienced recruiters has in-depth knowledge of the defense and space industry. We stay up-to-date with the latest trends and requirements, enabling us to provide valuable insights and guidance throughout the hiring process.",
  },
  {
    title: "Confidentiality",
    description:
      "We understand the importance of discretion and confidentiality when it comes to security clearances. Rest assured that your information will be handled with the utmost care and professionalism.",
  },
];

const AboutUsPage = () => {
  const displayTraits = traits.map((trait) => (
    <Trait trait={trait} key={trait.title} />
  ));

  return (
    <div className="relative">
      <div
        id="about"
        className=" mx-auto mb-5 flex h-full flex-col items-center justify-center bg-white "
      >
        <div className=" mt-6 grid max-w-screen-xl py-1 md:flex">
          <div className="md:ml-10 ">
            <h1 className="mb-6 text-4xl font-bold">ABOUT US</h1>
            <p className="mb-8 text-lg text-gray-600">
              DB Recruiting Group was founded in 2022 by David Vacianna and Ben
              Puschett to focus on providing recruiting services to companies in
              the tech and IT industries. With the addition of Shelby Carter as
              lead recruiter, DB Recruiting is uniquely equipped to provide
              customized recruiting services to clients.
            </p>
            <p className="mb-8 text-lg text-gray-600">
              We are a team of skilled recruiters with a proven track record of
              success as top billers in previous roles. Through the use of RPO
              models, we are able to provide a more efficient and effective
              hiring process for our clients across a variety of industries.
            </p>
          </div>
          <div className=" mb-4 w-[1000px] md:mb-0 md:ml-10">
            <img
              className="mx-auto mt-2 h-[250px] w-[250px] "
              src="/dblogo-bluecircle.png"
              alt="DB Recruiting Logo"
            />
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl  justify-center text-center md:flex">
          <div className="grid sm:grid-cols-2 md:flex">{displayTraits}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
