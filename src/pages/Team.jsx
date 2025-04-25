import PageBanner from '../components/PageBanner'
import Navbar from '../components/Navbar'
import FadeInSection from '../components/FadeInSection'

const teamMembers = [
  { name: 'Selin Göksu', role: 'Founding Partner', img: '/assets/images/people.png' },
  { name: 'Ali Karan', role: 'Senior Associate', img: '/assets/images/people.png' },
  { name: 'Zeynep Yılmaz', role: 'Counsel', img: '/assets/images/people.png' },
]

export default function Team() {
  return (
    <div>
    <Navbar />
      <PageBanner title="The Team" bg="/assets/images/team.jpg" />
      <FadeInSection>
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover shadow"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeInSection>
    </div>
  )
}
