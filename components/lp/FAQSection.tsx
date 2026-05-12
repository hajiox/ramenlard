"use client"
import { useState } from "react"

const faqs = [
  {
    q: "1袋50gですが、ラーメン1杯分にどれくらい入れていいのですか？",
    a: "本品は「こってり感」を存分に楽しんでいただくための量となっております。ラーメン1杯分に25～50gほど加えると、濃厚な仕上がりになります。",
  },
  {
    q: "常温保存が可能とのことですが、夏場の室内でも大丈夫でしょうか？",
    a: "未開封であればレトルト殺菌されているため、常温保存が可能です。袋を開けたラードは冷蔵保存し、お早めにお召し上がりください。",
  },
  {
    q: "市販のチューブ入りラードとは何が違うのですか？",
    a: "チャーシューを煮込んだ際に出る上質な油を使っているため、「味わいの深さ」が全く違います。お肉の旨味がスープに溶け込み、料理の美味しさが極限まで引き上げます。",
  },
  {
    q: "カップ麺に入れる場合、どのタイミングで入れればいいですか？",
    a: "お湯を注ぐ前ではなく、「召し上がる直前」に入れるのがベストです。\n食べる直前に本品を加えて軽く混ぜてください。食べる直前に入れることで、ラード特有の芳醇な香りがより一層引き立ち、スープの熱でじわっと溶け出す美味しさを堪能いただけます。",
  },
  {
    q: "チャーハンや野菜炒めに使っても良いのでしょうか？",
    a: "はい、炒め物に最適な商品です。使う際は25gをおすすめしておりますが、こってりに仕上げたい方は50g使用することもできます。",
  },
  {
    q: "原材料にアレルギー物質は含まれていますか？",
    a: "本品の原材料は、豚脂（国産）、ネギ、しょうが、（一部に豚肉を含む）のため、豚肉を含んでおります。豚肉アレルギーをお持ちの方はご注意ください。",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#FDF8F0] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#3D1C02] text-[#C8960C] text-xs font-bold px-4 py-1 rounded-full mb-3 tracking-widest">
            よくあるご質問
          </span>
          <h2 className="text-xl md:text-3xl font-black text-[#3D1C02] text-balance">
            FAQ
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow border border-[#C8960C]/20 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-[#3D1C02] text-sm pr-4 leading-relaxed">
                  <span className="text-[#C8960C] font-black mr-2">Q.</span>
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-[#C8960C] flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-[#3D1C02]/80 text-sm leading-relaxed whitespace-pre-line">
                    <span className="text-[#8B0000] font-bold mr-2">A.</span>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
