import About from '@/components/Home/About'
import Hero from '@/components/Home/Hero'
import HomeHashScroller from '@/components/Home/HomeHashScroller'
import Projects from '@/components/Home/Projects'

const Home = () => {
  return (
    <div>
        <HomeHashScroller />
        <Hero />
        <About />
        <Projects />
    </div>
  )
}

export default Home
