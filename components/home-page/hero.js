import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/hamad.png"
                    alt="An image showing hamad"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I am Hamad Zia</h1>
            <p>I blog about web development - especially frontend frameworks like Reactjs or Nextjs.</p>
        </section>
    )
}
export default Hero;