import { LinkButton, RoundedButton } from './Buttons';
import { Button } from './ui/button';

export default function Header() {
  return (
    <>
      <header className="p-5">
        <div class="container flex max-w-[1100px] justify-between">
          <div className="flex items-center gap-10">
            <img
              src="img_base-network-logo.png"
              alt="basenetwork logo"
              class="h-[40px]"
            />
            <nav className="flex-wrap gap-x-10 text-sm hidden lg:flex">
              <a
                href="#features"
                className="hover:underline hover:underline-offset-4"
              >
                Features
              </a>
              <a
                href="#use-cases"
                className="hover:underline hover:underline-offset-4"
              >
                Use cases
              </a>
              <a
                href="#pricing"
                className="hover:underline hover:underline-offset-4"
              >
                Pricing
              </a>
            </nav>
          </div>

          {/* buttons */}
          <div className="hidden gap-2 lg:flex">
            <LinkButton variant="link" className="text-foreground">
              Link text
            </LinkButton>
            <RoundedButton>Get started today</RoundedButton>
          </div>

          <button className='before:content-menu-icon h-10 w-10 before:inline-block lg:hidden ' />
        </div>
      </header>
      <nav className='flex lg:hidden bg-primary overflow-hidden'>
        <ul className='w-full'>
          <li className='flex'><a href="#features" className='h-14 pl-12 pr-4 w-full flex items-center hover:bg-white/5 text-primary-foreground font-medium text-sm hover:underline hover:underline-offset-4'>Features</a></li>
          <li className='flex'><a href="#use-cases" className='h-14 pl-12 pr-4 w-full flex items-center hover:bg-white/5 text-primary-foreground font-medium text-sm hover:underline hover:underline-offset-4'>Use cases</a></li>
          <li className='flex'><a href="#pricing" className='h-14 pl-12 pr-4 w-full flex items-center hover:bg-white/5 text-primary-foreground font-medium text-sm hover:underline hover:underline-offset-4'>Pricing</a></li>
        </ul>
      </nav>
    </>
  );
}
