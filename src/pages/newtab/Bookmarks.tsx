import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialReddit,
  SlSocialGithub,
  SlSocialSoundcloud,
  SlMagnet,
} from "react-icons/sl";
import {
  SiGrafana,
  SiHelm,
  SiKubernetes,
  SiSpotify,
  SiOpenai,
  SiZalando,
  SiJellyfin,
  SiProbot,
  SiFlipkart,
  SiServerless,
  SiPlex,
  SiUptimekuma,
  SiGithub,
  SiReplit,
  SiProtonmail,
  SiBitwarden,
} from "react-icons/si";
import { AiFillCloud, AiOutlineRead, AiOutlineYoutube , AiOutlineAmazon, AiFillMediumSquare, AiOutlineGithub} from "react-icons/ai";
import { BiBookmark, BiRss } from "react-icons/bi";
import { BsTwitch } from "react-icons/bs";
import { TbBrandGmail, TbCurrencyBitcoin, TbServer } from "react-icons/tb";
import { GiClothes, GiComputerFan, GiFireWave } from "react-icons/gi";
import { IoLogoReddit } from "react-icons/io";
import { RiOpenSourceLine, RiVisaFill } from "react-icons/ri";
import { RxClipboardCopy } from "react-icons/rx";

export default function Bookmarks(): JSX.Element {
  const socialLinks = [
    {
      href: "https://github.com/Arunava-K",
      icon: <SlSocialGithub className="hidden md:block" size={20} />,
      text: "github",
    },
    {
      href: "https://www.instagram.com/",
      icon: <SlSocialInstagram className="hidden md:block" size={20} />,
      text: "instagram",
    },
    {
      href: "https://twitter.com/home",
      icon: <SlSocialTwitter className="hidden md:block" size={20} />,
      text: "twitter",
    },
    {
      href: "https://www.reddit.com/",
      icon: <SlSocialReddit className="hidden md:block" size={20} />,
      text: "reddit",
    },
  ];

  const newsLinks = [
    {
      href: "https://noted.lol/",
      icon: <SiServerless className="hidden md:block" size={20} />,
      text: "Noted",
    },
    {
      href: "https://medium.com",
      icon: <AiFillMediumSquare className="hidden md:block" size={20} />,
      text: "Medium",
    }
  ];

  const mediaLinks = [
    {
      href: "https://www.youtube.com/",
      icon: <AiOutlineYoutube className="hidden md:block" size={20} />,
      text: "Youtube",
    },
    {
      href: "https://www.soundcloud.com/",
      icon: <SlSocialSoundcloud className="hidden md:block" size={20} />,
      text: "Soundcloud",
    },
    {
      href: "https://open.spotify.com/",
      icon: <SiSpotify className="hidden md:block" size={20} />,
      text: "Spotify",
    },
    {
      href: "https://www.twitch.com/",
      icon: <BsTwitch className="hidden md:block" size={20} />,
      text: "Twitch",
    },
  ];

  const productivityLinks = [
    {
      href: "https://replit.com/~",
      icon: <SiReplit className="hidden md:block" size={20} />,
      text: "Replit",
    },
    {
      href: "https://gmail.com/",
      icon: <TbBrandGmail className="hidden md:block" size={20} />,
      text: "Gmail",
    },
    {
      href: "https://mail.proton.me/u/0/",
      icon: <SiProtonmail className="hidden md:block" size={20} />,
      text: "Proton-Mail",
    },
    {
      href: "https://chat.openai.com/",
      icon: <SiOpenai className="hidden md:block" size={20} />,
      text: "chatgpt",
    },    
  ];

  const shopLinks = [
    {
      href: "https://www.amazon.in/",
      icon: <AiOutlineAmazon className="hidden md:block" size={20} />,
      text: "Amazon",
    },
    {
      href: "https://www.robu.in",
      icon: <SiProbot className="hidden md:block" size={20} />,
      text: "Robu",
    },
    {
      href: "https://www.flipkart.com/",
      icon: <SiFlipkart className="hidden md:block" size={20} />,
      text: "Flipkart",
    },
  ];

  const redditLinks = [
    {
      href: "https://www.reddit.com/r/homelab/",
      icon: <IoLogoReddit className="hidden md:block" size={20} />,
      text: "r/HomeLab",
    },
    {
      href: "https://www.reddit.com/r/selfhosted/",
      icon: <IoLogoReddit className="hidden md:block" size={20} />,
      text: "r/SelfHosted",
    },    
    {
      href: "https://www.reddit.com/r/gachagaming/",
      icon: <IoLogoReddit className="hidden md:block" size={20} />,
      text: "r/GachaGaming",
    },
  ];

  const homelabLinks = [
    {
      href: "http://192.168.31.89:7575/",
      icon: <TbServer className="hidden md:block" size={20} />,
      text: "Main-Dashboard",
    },
    {
      href: "http://192.168.31.32:8096/",
      icon: <SiJellyfin className="hidden md:block" size={20} />,
      text: "Jellyfin",
    },
    {
      href: "http://192.168.31.32:32400/",
      icon: <SiPlex className="hidden md:block" size={20} />,
      text: "Plex",
    },
    {
      href: "http://192.168.31.89:3001/",
      icon: <SiUptimekuma className="hidden md:block" size={20} />,
      text: "UptimeKuma",
    },
  ];

  const otherLinks = [
    {
      href: "https://linkding.arunavahomelab.xyz/",
      icon: <BiBookmark className="hidden md:block" size={20} />,
      text: "Linkding",
    },
    {
      href: "https://fireshare.arunavahomelab.xyz/",
      icon: <GiFireWave className="hidden md:block" size={20} />,
      text: "Fireshare",
    },
    {
      href: "https://vaultwarden.arunavahomelab.xyz/",
      icon: <SiBitwarden className="hidden md:block" size={20} />,
      text: "VaultWarden",
    },
  ];

  const shortcutsLinks = [
    {
      href: "https://github.com/awesome-selfhosted/awesome-selfhosted",
      icon: <AiOutlineGithub className="hidden md:block" size={20} />,
      text: "Awesome-SelfHosted",
    },
    {
      href: "https://github.com/awesome-foss/awesome-sysadmin",
      icon: <AiOutlineGithub className="hidden md:block" size={20} />,
      text: "Awesome-SysAdmin",
    },
    {
      href: "https://awesomeopensource.com/",
      icon: <RiOpenSourceLine className="hidden md:block" size={20} />,
      text: "Awesome-Open-Source",
    },
  ];
  const renderLinks = (
    links: { href: string; icon: JSX.Element; text: string }[]
  ) => {
    return (
      <ul className="mt-6 Link-list list-none">
        {links.map((link, index) => (
          <li key={index}>
            <a
              role="button"
              className="btn btn-ghost btn-sm gap-2 truncate  lowercase font-medium text-base"
              href={link.href}
            >
              {link.icon}
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="col-start-2 text-center">
        <h3 className="text-accent text-xl font-semibold">Social</h3>
        {renderLinks(socialLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">News</h3>
        {renderLinks(newsLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">Media</h3>
        {renderLinks(mediaLinks)}
      </div>
      {/* row #2 */}
      <div className="col-start-2 text-center">
        <h3 className="text-accent text-xl font-semibold">Productivity</h3>
        {renderLinks(productivityLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">Shops</h3>
        {renderLinks(shopLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">r/eddit</h3>
        {renderLinks(redditLinks)}
      </div>
      {/* row #3 */}
      <div className="col-start-2 text-center">
        <h3 className="text-accent text-xl font-semibold">Homelab</h3>
        {renderLinks(homelabLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">Other</h3>
        {renderLinks(otherLinks)}
      </div>
      <div className="text-center">
        <h3 className="text-accent text-xl font-semibold">Shortcuts</h3>
        {renderLinks(shortcutsLinks)}
      </div>
    </>
  );
}
