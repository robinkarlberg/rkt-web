import { HouseIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { getAllPostsMeta } from "../lib/posts";

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

const formatDate = (dateString) => {
  if (!dateString) return null;
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
};

const Home = async () => {
  const posts = (await getAllPostsMeta()).slice(0, 3);

  return (
    <div className="px-4 sm:px-6">
      <div className="page mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl sm:leading-12 font-bold me-2 tracking-tight">
            RKT makes useful websites.
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            {/* <h2 className="text-2xl font-bold mb-2">Websites</h2> */}
            <ul className="space-y-2">
              {LINKS.map(({ title, description, href }, i) => (
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
          {posts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Blog</h2>
              <ul className="space-y-2">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="block hover:bg-primary-50 hover:dark:bg-primary-700 rounded-xl py-3 -my-2 px-3 -mx-3">
                      <div className="w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h3 className="font-bold text-lg">{post.title}</h3>
                          {post.date && <time className="text-sm text-primary-500">{formatDate(post.date)}</time>}
                        </div>
                        <p className="text-justify text-primary-600 dark:text-primary-200">
                          {post.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
                {posts.length === 0 && (
                  <li className="text-primary-500">No posts just yet — check back soon.</li>
                )}
              </ul>
              <div className="text-sm mt-3">
                <Link href="/blog" className="hover:underline">
                  Read all posts &rarr;
                </Link>
              </div>
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold mb-2">About us</h2>
            <div className="space-y-2">
              <p className="text-justify">
                RKT was founded by <strong><Link target="_blank" href={"https://www.linkedin.com/in/robin-karlberg/"} className="hover:underline">Robin</Link></strong>.
              </p>
              <p className="text-justify">
                People like to say "us" to make the company seem bigger and more professional, but "we" are really just "me".
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
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
