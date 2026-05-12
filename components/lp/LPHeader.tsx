import Image from "next/image"

export default function LPHeader() {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rogo-ZiOZQ8QjHhghKzah67lxuZd5mVu409.jpg"
          alt="AIZU BRAND HALL ロゴ"
          width={67}
          height={67}
          className="rounded"
        />
      </div>
    </header>
  )
}
