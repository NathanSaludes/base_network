import { Button } from './ui/button';
import { Input } from './ui/input';

export default function SignUpField() {
  return (
    <div className="w-full md:w-auto flex flex-col sm:flex-row items-center rounded-3xl sm:rounded-full bg-[#1F5B55] px-1.5 py-1.5 has-[:focus-visible]:outline has-[:focus-visible]:outline-4 has-[:focus-visible]:outline-teal-200/40">
      <Input
        type="email"
        placeholder="Enter your email here..."
        className="w-full md:w-[396px] h-14 sm:h-auto border-none bg-transparent text-primary-foreground placeholder:text-foreground-inverted focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button className="h-12 w-full rounded-3xl sm:rounded-full sm:w-auto bg-accent font-semibold hover:brightness-105">
        Sign up today
      </Button>
    </div>
  );
}
