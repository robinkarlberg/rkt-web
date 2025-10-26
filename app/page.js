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
          <p className="inline mb-2">
            develops, provides and sells IT systems and cloud-based services (SaaS) as well as offers support and consulting services within IT, and activities compatible therewith.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <ul className="space-y-2">
            {LINKS.map(({ link, title, description, href }, i) => (
              <li key={i}>
                <Link href={href} className="block w-full hover:bg-primary-50 hover:dark:bg-primary-700 rounded-xl py-2 px-3 -my-2 -mx-3">
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
      </div>
    </div>
  );
};

export default Home;
