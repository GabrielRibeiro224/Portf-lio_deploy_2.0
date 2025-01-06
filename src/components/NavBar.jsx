import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import logo from "../assets/raviKumarLogo.webp";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          {/* <img src={logo} className="mx-2" width={50} height={33} alt="logo" /> */}
          <h1 className="pb-2 text-stone-50 tracking-tighter lg:text-6xl">
            Gabriel
          </h1>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/in/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/in/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
