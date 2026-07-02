import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { MembershipPlans } from "@/components/sections/membership-plans";
import { Gallery } from "@/components/sections/gallery";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
        <MembershipPlans />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
