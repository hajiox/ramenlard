import Image from "next/image"

export default function AuthoritySection() {
  return (
    <section className="bg-[#FDF8F0] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ranking_cards_with_text_202605051223-kyVqZcdyQYQ8UGwI2Hy6rbkWFtH7Rn.jpg"
          alt="チャーシューの名店が本気で作った香味油。会津ブランド館のチャーシューは数々の楽天1位を獲得。油の旨さには理由がある。"
          width={1080}
          height={1080}
          className="w-full"
        />
      </div>
    </section>
  )
}
