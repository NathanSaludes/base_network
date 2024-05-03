import { Feature } from './FeatureCard';

export default function Features() {
  return (
    <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-max mx-auto">
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
}
