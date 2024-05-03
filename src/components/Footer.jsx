export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-8 bg-white pb-2 pt-10">
      {/* logo */}
      <img
        src="img_base-network-logo.png"
        alt="basenetwork logo"
        class="mx-auto h-[40px]"
      />
      {/* links */}
      <nav className="flex justify-center gap-x-10 text-sm">
        <a href="#features" className="hover:underline hover:underline-offset-4">Features</a>
        <a href="#use-cases" className="hover:underline hover:underline-offset-4">Use cases</a>
        <a href="#pricing" className="hover:underline hover:underline-offset-4">Pricing</a>
      </nav>
      {/* copyright and socials */}
      <div className="flex justify-between px-5 text-xs">
        <p>&copy;2024 Base Network. All Rights Reserved</p>
        <div className="flex gap-x-1">
          <a href="#" className="rounded-lg p-2 hover:bg-black/5">
            <img src="/img_twitter.png" alt="base network twitter" />
          </a>
          <a href="#" className="rounded-lg p-2 hover:bg-black/5">
            <img
              src="/img_facebook-square.png"
              alt="base network facebook"
            />
          </a>
          <a href="#" className="rounded-lg p-2 hover:bg-black/5">
            <img
              src="/img_linkedin-square.png"
              alt="base network linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
