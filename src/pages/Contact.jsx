import PageBanner from '../components/PageBanner'
import Navbar from '../components/Navbar'
export default function Contact() {
  return (
    <div>
      <PageBanner title="Contact"   bg="/assets/images/13.jpg" />
      <Navbar />
      <section className="py-16 px-6 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>Address:</strong><br />
            Göksu Building, Sarayarkası No:27<br />
            Gümüşsuyu, İstanbul
          </p>

          <p>
            <strong>Email:</strong><br />
            <a href="mailto:info@goksulaw.com" className="text-purple-600 hover:underline">
              info@goksulaw.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong><br />
            +90 212 123 45 67
          </p>
        </div>
      </section>
    </div>
  )
}
