import Hero from '../components/ui/section/hero';
import Features from '../components/ui/section/features';
import Footer from '../components/ui/section/footer';

export default function Home() {
  return (
    <main className="h-screen w-full bg-gray-100">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
