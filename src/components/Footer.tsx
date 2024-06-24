import facebookLogo from "../assets/socials/facebook.svg";
import instagramLogo from "../assets/socials/instagram.svg";
import twitterLogo from "../assets/socials/twitter.svg";

const Footer = () => {
  const socialsMedia = [facebookLogo, instagramLogo, twitterLogo];

  return (
    <footer className="py-12 w-full bg-black">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-y-6 px-4">
        <p className="text-white font-mono text-sm">
          © {new Date().getFullYear()} The Sprite Company. All rights reserved.
        </p>
        <div className="flex items-center gap-x-8">
          {socialsMedia.map((item, index) => (
            <a
              key={index}
              className="border-2 border-gray-400 p-2 rounded-full cursor-pointer hover:bg-gray-400"
            >
              <img src={item} alt={item} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
