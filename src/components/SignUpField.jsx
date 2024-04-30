import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SignUpField() {
	return (
		<div className="bg-[#1F5B55] py-1.5 px-1.5 rounded-full flex items-center has-[:focus-visible]:outline-4 has-[:focus-visible]:outline has-[:focus-visible]:outline-teal-200/40">
			<Input type="email" placeholder="Enter your email here..." className="bg-transparent border-none placeholder:text-foreground-inverted w-[396px] text-primary-foreground focus-visible:ring-0 focus-visible:ring-offset-0" />
			<Button className="h-12 bg-accent font-semibold hover:brightness-105">Sign up today</Button>
		</div>
	)
}