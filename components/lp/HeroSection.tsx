import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-[#3D1C02] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%A6%99%E5%91%B3%E6%B2%B9_%E8%B1%9A%E3%81%AE%E6%97%A8%E5%91%B3_%E3%82%B3%E3%82%AF%E8%BF%BD%E5%8A%A0_202605051220.jpg_202605111736-FrbkCyZBmtfV150lxp0bmGOu2W9e3E.jpeg"
          alt="豚の旨味とコクをプラスする香味油（ラード）。50g、個包装、常温1年保存可能。"
          width={1080}
          height={1080}
          className="w-full"
          priority
        />
      </div>
    </section>
  )
}
