import PageBanner from '../components/PageBanner'
import Navbar from '../components/Navbar'
const posts = [
  {
    title: 'New Arbitration Regulation in Turkey',
    date: 'March 20, 2023',
    excerpt: 'A new arbitration regulation has been introduced, bringing changes to dispute resolution practices...',
  },
  {
    title: 'Litigation Trends in Energy Sector',
    date: 'February 10, 2023',
    excerpt: 'The energy sector faces increased legal scrutiny. Here’s what to expect from 2023 onward...',
  },
  {
    title: 'Göksu Law Hosts International Legal Forum',
    date: 'January 15, 2023',
    excerpt: 'An event highlighting global legal insights, featuring leading arbitration experts...',
  },
]

export default function News() {
  return (
    <div>
    <Navbar />
      <PageBanner title="News & Insights" bg="/assets/images/blog.jpg" />

      <section className="py-16 px-6 max-w-4xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="mb-12 border-b pb-6">
            <p className="italic text-sm text-gray-500">{post.date}</p>
            <h2 className="text-xl font-serif font-semibold mt-2">{post.title}</h2>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
