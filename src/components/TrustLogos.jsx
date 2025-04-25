export default function TrustLogos() {
    const logos = [
      '/assets/images/legal500.png',
      '/assets/images/chambers.png',
      '/assets/images/wwl.png',
    ]
  
    return (
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto flex justify-center gap-12 flex-wrap items-center">
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Trust logo ${idx}`}
              className="h-12 opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </section>
    )
  }
  