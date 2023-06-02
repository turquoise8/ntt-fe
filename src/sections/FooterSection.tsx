import { Button } from "@mui/material";
import CompanyLogo from "../assets/CompanyLogo";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

const FooterSection = () => {
  return (
    <footer className="pt-9 mt-8 lg:mt-20 bg-brand">
      <div className="flex p-3 md:p-5 lg:p-8 lg:px-32 lg:justify-between">
        <div className="flex flex-col md:w-1/2">
          <div>
            <CompanyLogo fill="white" />
            <span className="text-white text-xs">Trusted Global Innovator</span>
          </div>

          <span className="hidden md:inline text-sm text-white my-4 lg:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          </span>

          <div className="my-6">
            <input
              className="py-1 px-2 placeholder-black"
              type="text"
              placeholder="Email"
            />
            <button className="bg-navy px-4 py-1 text-white">Sign Up</button>
          </div>
        </div>

        <div className="hidden md:flex lg:hidden flex-col ml-6">
          {Array.from({ length: 5 }).map(() => {
            return (
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "white",
                }}
              >
                Title
              </Button>
            );
          })}
        </div>

        <div className="hidden lg:flex gap-40">
          {Array.from({ length: 3 }).map(() => {
            return (
              <div className="flex flex-col">
                <span className="font-medium text-white mb-4 text-lg">
                  Title
                </span>
                <span className="text-sm text-white mb-2">Subtitle</span>
                <span className="text-sm text-white mb-2">Subtitle</span>
                <span className="text-sm text-white mb-2">Subtitle</span>
                <span className="text-sm text-white mb-2">Subtitle</span>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="border-white" />
      <div className="flex items-center justify-between text-white text-xs lg:text-sm p-3 lg:px-32">
        <span>contact@nttdata.com</span>
        <span>+3 9876 765 444</span>
        <span className="hidden md:flex">
          <Button
            onClick={() => window.open("https://www.instagram.com/nttdata/")}
          >
            <img src={instagram} alt="" />
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://www.facebook.com/NTTDATABusinessSolutionsTurkey/"
              )
            }
          >
            <img src={facebook} alt="" />
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/ntt-data-business-solutions-turkey"
              )
            }
          >
            <img src={linkedin} alt="" />
          </Button>
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
