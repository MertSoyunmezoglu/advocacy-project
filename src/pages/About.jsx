import PageBanner from '../components/PageBanner'
import Navbar from '../components/Navbar'
export default function About() {
  return (
    <div>
      <PageBanner title="The Firm" bg="/assets/images/library.jpg" />
      <Navbar />
      <section className="max-w-3xl mx-auto p-6 text-gray-700 leading-relaxed">
      <p>Göksu Law is an Istanbul-based dispute resolution specialist practice, handling international and domestic disputes before a variety of courts and arbitral tribunals.  Our team comprises experienced litigators and arbitration/mediation lawyers with a wealth of experience in dispute management. 

      As a disputes-oriented practice, we provide strategic legal advice and representation in Turkey and the larger region in infrastructure, construction, energy, transportation, mining, healthcare, manufacturing and banking sectors. Göksu Law also provides legal consultancy across the asset lifecycle, ranging from commercial and construction disputes to compliance and regulation on major infrastructure projects.</p> Our team of experienced professionals provide innovative, practical and commercially focused legal advice, to the highest standard.
      
      Our experience, expertise and connections mean we have the resources and know-how to work with our clients to meet their commercial objectives, wherever they may be.  We work in a collaborative and flexible way.  This means we can work alongside other law firms on multijurisdictional matters, resulting in our clients getting a consistent level of service and commercially focused legal advice.
      
      Our strategy is always to develop long-term relationships to help clients manage projects to a successful and profitable conclusion. Where a dispute is unavoidable, we are always by our clients’ side to help them achieve the best possible result.  We have obtained many positive judgments and awards in local and international litigations and arbitrations for our clients involved in various projects in Turkey.
   
        <p className="mt-4">
          The firm combines deep industry knowledge with international standards to achieve exceptional results for its clients.
        </p>
      </section>
    </div>
  )
}
