import Image from "next/image"

export default function PackagingSection() {
  return (
    <section className="bg-[#FDF8F0] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E3%81%AB%E9%A6%99%E5%91%B3%E6%B2%B9%E3%82%92%E3%81%8B%E3%81%91%E3%82%8B_202605051231-hGzOdSfO4DG8G3f7L925Fds4267xtl.jpg"
          alt="熱々に熱してジュッ。いつもの一杯が格別な味に。ラーメンに香味油をかけるだけ。"
          width={1080}
          height={1080}
          className="w-full"
        />
      </div>
    </section>
  )
}
