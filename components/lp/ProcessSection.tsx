import Image from "next/image"

export default function ProcessSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%A6%99%E5%91%B3%E6%B2%B9%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9_3%E3%82%B9%E3%83%86%E3%83%83%E3%83%97_202605051257-zuezn4lNf572k5xQDzTqwNefwA5wGd.jpg"
          alt="プロの味を家庭で。チャーシューを煮込む、香味を抽出、いつもの料理が一味違う。チャーシューの煮込みから生まれた調理油。"
          width={1080}
          height={1080}
          className="w-full"
        />
      </div>
    </section>
  )
}
