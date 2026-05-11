import Image from "next/image"

export default function UpgradeSection() {
  return (
    <section className="bg-[#3D1C02] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AE%B6%E5%BA%AD%E6%96%99%E7%90%86%E3%81%8C%E3%83%AF%E3%83%B3%E3%83%A9%E3%83%B3%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97_202605051228-VNYopXq05fm5sTpxen9DMEFo3G30U1.jpg"
          alt="いつもの料理をワンランク上の美味しさへ。プロの味！チャーハン、焼きそば、煮物に。いつもの料理に加えるだけ。コクと香りが劇的に変わります。"
          width={1080}
          height={1080}
          className="w-full"
        />
      </div>
    </section>
  )
}
