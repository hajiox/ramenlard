import Image from "next/image"

export default function ShippingBannerSection() {
  return (
    <section className="bg-[#FDF8F0] px-4 py-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-IUk1mPIkWxTgGmjecBYr6cPYAyt1B4.jpg"
            alt="送料無料（沖縄・離島地域除く）"
            width={640}
            height={360}
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-x6YBwQdJuv8fCaeUS87EkxIeLCcVWP.jpg"
            alt="１４時までのご注文で即日発送（12月31日-1月1日は発送をお休みさせて頂いております）"
            width={640}
            height={360}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
