import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/images/company-logo.svg"
                alt="宇泰開發建設 Logo"
                className="h-12 w-auto"
              />
              <div className="w-16 h-px bg-gradient-to-r from-gold/40 to-transparent mt-3 mb-3" />
              <p className="text-gold/70 text-sm italic tracking-wider">
                讓生活，更有智慧
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              智慧建築・候選銀級認證<br />
              宇泰開發建設 用心打造理想家園
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-4">快速導覽</h3>
            <div className="w-8 h-px bg-gold/30 mb-4" />
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">建案介紹</Link></li>
              <li><Link href="/products" className="hover:text-gold transition-colors">產品規劃</Link></li>
              <li><Link href="/lifestyle" className="hover:text-gold transition-colors">生活機能</Link></li>
              <li><Link href="/news" className="hover:text-gold transition-colors">最新消息</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">預約賞屋</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-bold mb-4">聯絡資訊</h3>
            <div className="w-8 h-px bg-gold/30 mb-4" />
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <strong className="text-gray-200">基地位置</strong><br />
                  臺中市大雅區楓林街233號附近
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <strong className="text-gray-200">接待中心</strong><br />
                  台中市大雅區雅潭路四段717號
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>04-25658666</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>接待中心開放時間<br />10:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-gold font-bold mb-4">關注我們</h3>
            <div className="w-8 h-px bg-gold/30 mb-4" />
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors" aria-label="LINE">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
              </a>
            </div>
            <Link href="/contact" className="btn-gold text-sm">
              立即預約賞屋
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 text-center text-sm text-gray-500">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent mb-8" />
          <p>&copy; {new Date().getFullYear()} 宇泰開發建設 All Rights Reserved.</p>
          <p className="mt-1">本網站僅供參考，實際以合約內容為準。</p>
        </div>
      </div>
    </footer>
  );
}
