import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { CredentialsBar } from '@/components/CredentialsBar'
import { WhySafety } from '@/components/WhySafety'
import { Services } from '@/components/Services'
import { Approach } from '@/components/Approach'
import { Industries } from '@/components/Industries'
import { About } from '@/components/About'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function App() {
  return (
    <div className="bg-white">
      <Nav />
      <main>
        <Hero />
        <CredentialsBar />
        <WhySafety />
        <Services />
        <Approach />
        <Industries />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
