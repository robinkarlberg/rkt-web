import { HouseIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const LINKS = [
  {
    title: "Transfer.zip",
    description: "Ultrafast, Reliable and Secure file transfers. No throttling. No size limits.",
    href: "https://transfer.zip"
  },
  {
    title: "SponsorApp",
    description: "Reward your supporters for donating to you - it's like BuyMeACoffee, but smarter.",
    href: "https://sponsorapp.io"
  },
  {
    title: "Sigma SEO",
    description: "Coming soon.",
    href: "#"
  },
]

const Home = () => {
  return (
    <div className="px-4 sm:px-6">
      <div className="page mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold inline me-2 tracking-tight">RKT</h1>
          <p className="inline">
            develops, provides and sells IT systems and cloud-based services (SaaS) as well as offers support and consulting services within IT, and activities compatible therewith.
          </p>
        </div>
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ul className="space-y-2">
              {LINKS.map(({ link, title, description, href }, i) => (
                <li key={i}>
                  <Link href={href} className="block hover:bg-primary-50 hover:dark:bg-primary-700 rounded-xl py-2 -my-2 px-3 -mx-3">
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">{title}</h3>
                        {href != "#" && <span>&rarr;</span>}
                      </div>
                      <p className="text-justify">
                        {description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">About us</h2>
            <div className="space-y-2">
              <p className="text-justify">
                RKT was founded by <strong><Link target="_blank" href={"https://www.linkedin.com/in/robin-karlberg/"} className="hover:underline">Robin</Link></strong>, a hacker, web developer, and music producer.
              </p>
              <p className="text-justify">
                People like to say "us" to make the company seem bigger and more professional, but "we" are really just "me".
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MailIcon size={16} /> robin [at] rkt.dev
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon size={16} /> +46 79 332 10 [fifty-seven]
              </p>
              <p className="flex items-center gap-2">
                <MapPinIcon size={16} /> Malakitgatan 6, 224 88 Lund, Sweden
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
