import Image from "next/image"

const shops = [
  {
    href: "https://store.shopping.yahoo.co.jp/aizubrandhall/4571318635254.html?sc_i=shopping-pc-web-category-storeitm-rsltlst-img&ea=",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyyahoo-ElYZ8ajtbNhInkUYQ6hnd1EU35hVWN.png",
    alt: "Yahoo!ショッピングで購入",
    name: "Yahoo!ショッピング",
    desc: "PayPayポイントが貯まる使えるショッピングモールはこちら",
    coupon: "初めて当店をご利用のお客様に\n300円クーポン進呈中!",
  },
  {
    href: "https://item.rakuten.co.jp/aizubrandhall/4571318635254/",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyrakutenn-BnD4kCZ5yvCzsv3CuSVBfkP2tIp3ZT.png",
    alt: "楽天市場で購入",
    name: "楽天市場",
    desc: "楽天ポイントが使える国内最大級のショッピングモールはこちら",
    coupon: "初めて当店をご利用のお客様に\n300円クーポン進呈中!",
  },
  {
    href: "https://www.amazon.co.jp/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E5%B0%82%E7%94%A8%E3%83%A9%E3%83%BC%E3%83%89-%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E5%B1%8B%E3%81%AEBUTA%E3%82%A2%E3%83%96%E3%83%A9-50g%C3%9710%E8%A2%8B-%E3%82%AB%E3%83%83%E3%83%97%E9%BA%BA-%E4%BC%9A%E6%B4%A5%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E9%A4%A8/dp/B0GZ71CMVD/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dib=eyJ2IjoiMSJ9.DQRk70ANtjvnsAs42Qwb4lI6y6Dft2pIlSYZ-pwIOxrGjHj071QN20LucGBJIEps.Fb-ry2Futsdbz5KFdf5O9W2U8V_OeiBpyKZCYt8A2Nk&dib_tag=se&keywords=%E3%83%A9%E3%83%BC%E3%83%89&m=A3VMLRMEP6XHU5&qid=1777796434&s=merchant-items&sr=1-1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyAmazon-vBMEMKKrhBPZLcpmulqaDVAytzomr5.png",
    alt: "Amazonで購入",
    name: "Amazon",
    desc: "世界最大のショッピングモールでのお買い物はこちら",
    coupon: null,
  },
]

export default function PurchaseSection() {
  return (
    <section id="purchase" className="bg-[#FDF8F0] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black text-[#3D1C02] mb-10 tracking-wide">
          ご購入はこちら
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {shops.map((shop) => (
            <a
              key={shop.name}
              href={shop.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={shop.alt}
              className="flex flex-col items-center bg-white hover:bg-gray-50 rounded-2xl p-4 shadow-lg transition-transform hover:scale-[1.02] text-center"
            >
              {/* EC logo image (the buyyahoo/buyrakutenn/buyAmazon images already contain logo + Buy button) */}
              <Image
                src={shop.src}
                alt={shop.alt}
                width={180}
                height={180}
                className="w-full max-w-[160px] h-auto object-contain mb-3"
              />
              <p className="font-bold text-black text-sm mb-1">{shop.name}</p>
              <p className="text-gray-600 text-xs leading-snug mb-1">{shop.desc}</p>
              {shop.coupon && (
                <p className="mx-auto mt-3 flex w-full max-w-[280px] flex-col items-center justify-center rounded border border-red-300 bg-white px-3 py-2.5 text-center font-sans text-[0.82rem] font-bold leading-snug text-red-700 shadow-sm">
                  <span>初めて当店をご利用のお客様に</span>
                  <span className="mt-0.5 text-[0.95rem] text-red-800">300円クーポン進呈中!</span>
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
