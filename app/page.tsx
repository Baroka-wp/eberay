import Hero from '../components/ui/section/hero';
import Features from '../components/ui/section/features';
import Footer from '../components/ui/section/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
