import Button from './Button'
import Footer from './Footer'

export default function Main(){
    return (
        <div>
            
        <main>
            <p className="name"> Laura Smith </p>
            <p className="occupation"> Frontend Developer </p>
            <p className="website"> laurasmith.website </p>

            <Button />

            <section className='profile'>
                <h4 > About </h4>
                <p> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>

                <h4 className='spacing'> Interests </h4>
                <p> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. </p>
            </section>

        </main>
        <Footer />
        </div>
    )
}