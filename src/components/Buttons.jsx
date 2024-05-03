import { Button } from '@/components/ui/button';

const RoundedButton = ({ children }) => (
  <Button
    className="rounded-full font-semibold text-primary-foreground hover:opacity-95 transition duration-150 hover:scale-105"
    size="lg"
  >
    {children}
  </Button>
);

const LinkButton = ({ children }) => (
  <Button className="text-foreground" variant="link">
    {children}
  </Button>
);

export { RoundedButton, LinkButton };
