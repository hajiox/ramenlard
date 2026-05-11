import Image from "next/image"

const testimonials = [
  {
    title: "カップ麺が完全に別物に化けました！",
    body: "深夜の背徳感を楽しみに購入。いつものカップ麺にこのラードを入れるだけで、スープに深みと脂の甘みが加わって、まるで専門店で食べているような満足感になります。もうラードなしのカップ麺には戻れません。",
    rating: 5,
  },
  {
    title: "家でジロリアン気分が味わえる幸せ",
    body: "とにかくガッツリしたラーメンが好きなので、家で作る時、どうしても『脂』が足りないと感じていました。このラードをプラスすると、求めていたパンチのあるこってり感が実現します。常温で1年も持つ大変便利です。",
    rating: 5,
  },
  {
    title: "50gの個包装で使いやすい！",
    body: "チューブタイプや缶のラードだと使いきれないのが悩みでしたが、これは50gずつの使い切りなのが最高です。いつもの料理に加えて、さらに旨味がアップします。",
    rating: 5,
  },
  {
    title: "袋麺のクオリティが爆上がりします",
    body: "袋麺をよく食べますが、このラードを加えるだけで香りがぐっと引き立ちます。動物性の旨みが加わることで、ごちそうの一杯に変わるのが嬉しいですね。保存もしやすいのです。",
    rating: 5,
  },
  {
    title: "野菜炒めが『プロの味』に変わって驚きました",
    body: "私は野菜炒めに使ってみました。普段の油をこのラードに変えるだけで、野菜のシャキシャキ感と香ばしさが格段にアップします。少量でしっかりコクが出るので、本格的な味付けができます。",
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count}つ星`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#C8960C] fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#C8960C] text-black text-xs font-bold px-4 py-1 rounded-full mb-3 tracking-widest">
            お客様の声
          </span>
          <h2 className="text-xl md:text-3xl font-black text-[#3D1C02] text-balance">
            使ったら、もう戻れない。
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {testimonials.map((t) => (
            <article
              key={t.title}
              className="bg-[#FDF8F0] rounded-2xl p-6 shadow border border-[#C8960C]/20 flex gap-4"
            >
              <div className="flex-shrink-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/customerdansei-sivVG5aXrOEQcV07s5CI5s1cQYN4Za.jpg"
                  alt="レビュアーのイラスト"
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-2 border-[#C8960C]/40"
                />
              </div>
              <div className="flex-1 min-w-0">
                <StarRating count={t.rating} />
                <p className="font-bold text-[#3D1C02] mt-1 text-sm">{t.title}</p>
                <p className="text-[#3D1C02]/70 text-xs leading-relaxed mt-2">{t.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
