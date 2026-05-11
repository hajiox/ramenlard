import Image from "next/image"

export default function LPFooter() {
  return (
    <footer className="bg-[#0d1117] text-white">

      {/* Manufacturer notice */}
      <div className="max-w-3xl mx-auto px-4 pt-12 pb-8 text-center">
        <p className="text-white text-sm md:text-base mb-8">
          この商品は「会津ブランド館」が製造・販売・発送を行っています。
        </p>

        {/* Store info: photo left, text right */}
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center mb-8">
          <div className="w-full md:w-auto md:flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brandkan-Vz5F0IXZD0DbZ4miIVeqIAYAIe0EwT.jpg"
              alt="会津ブランド館 外観"
              width={420}
              height={280}
              className="rounded-xl w-full md:w-[320px] object-cover"
            />
          </div>

          <div className="text-left">
            <p className="text-gray-400 text-sm mb-1">店舗案内</p>
            <p className="font-bold text-white text-lg mb-3">会津ブランド館</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              〒965-0044<br />
              福島県会津若松市七日町6-15<br />
              営業時間: 11時〜16時<br />
              定休日: 12月31日・1月1日<br />
              <span className="text-gray-400">（発送もお休みさせて頂きます）</span>
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full rounded-xl overflow-hidden mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.30388931034!2d139.9208079!3d37.5007502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5535cf0cdc5a7%3A0xc1e02afb913c2084!2z5Lya5rSl44OW44Op44Oz44OJ6aSoIEFpenUgQnJhbmQgSGFsbA!5e0!3m2!1sja!2sjp!4v1776916725128!5m2!1sja!2sjp"
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="会津ブランド館の地図"
            className="w-full h-64 md:h-80"
          />
        </div>

        {/* Google Map link */}
        <a
          href="https://maps.google.com/?q=会津ブランド館+福島県会津若松市七日町6-15"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C8960C] text-sm hover:underline"
        >
          Google Mapで見る
        </a>
      </div>

      {/* SNS icons */}
      <div className="border-t border-white/10 py-6">
        <div className="flex justify-center gap-7">
          {/* Facebook */}
          <a href="https://www.facebook.com/aizubrandkan/?locale=ja_JP" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[#C8960C] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/aizubrandhall/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#C8960C] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* X (Twitter) */}
          <a href="https://x.com/Aizu_Brand_Kan" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white hover:text-[#C8960C] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com/channel/UCpusPn2NlWyrgkIMbacH4-w" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-[#C8960C] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0d1117" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-4 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} 会津ブランド館 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
