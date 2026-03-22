'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const highlights = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: '送餐機器人',
    desc: '全台首創住宅送餐送貨機器人，智慧生活新體驗',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
    title: '全棟WiFi',
    desc: '全棟無死角WiFi覆蓋，隨時隨地暢快連網',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: '電子門鎖',
    desc: '智慧電子門鎖，安全便利一把搞定',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: '全平面車位',
    desc: '地下三層全平面車位，停車輕鬆無壓力',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '安全防災',
    desc: '火警・漏水・地震・用電異常，全方位智慧監控',
  },
];

const quickInfo = [
  { label: '建築型態', value: '10層電梯大樓' },
  { label: '總戶數', value: '45住家＋7店面' },
  { label: '基地面積', value: '455坪' },
  { label: '地下樓層', value: '地下3層' },
  { label: '車位規劃', value: '68個全平面' },
  { label: '學區', value: '上楓國小正對面' },
];

const galleryImages = [
  { src: '/images/building-aerial.jpg', alt: '大樓全景鳥瞰圖', title: '全景鳥瞰' },
  { src: '/images/building-front.jpg', alt: '大樓正面渲染圖', title: '建築外觀' },
  { src: '/images/building-top.jpg', alt: '大樓頂部特寫', title: '頂部設計' },
  { src: '/images/storefront.jpg', alt: '一樓店面街景', title: '街面店鋪' },
  { src: '/images/entrance.jpg', alt: '入口光廊', title: '迎賓光廊' },
];

const lifestyleImages = [
  { src: '/images/entrance.jpg', alt: '入口光廊', title: '迎賓光廊', desc: '挑高迎賓大廳，光影交織的回家儀式感' },
  { src: '/images/walkway.jpg', alt: '街道家具步道', title: '街道家具步道', desc: '人行友善設計，安全舒適的社區步道' },
  { src: '/images/family-path.jpg', alt: '家庭友善步道', title: '家庭友善步道', desc: '親子同行的綠意空間，享受散步時光' },
  { src: '/images/playground.jpg', alt: '放學後遊戲場', title: '兒童遊戲場', desc: '放學後的歡樂天地，孩子安心玩耍' },
  { src: '/images/art-path.jpg', alt: '文教藝徑', title: '文教藝徑', desc: '藝術與文化的步道體驗，涵養人文氣息' },
];

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      <div className="relative aspect-[16/9]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Title */}
        <div className="absolute bottom-6 left-6 z-10">
          <div className="text-white text-2xl md:text-3xl font-bold">{images[current].title}</div>
          <div className="text-white/70 text-sm mt-1">{images[current].alt}</div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
        aria-label="上一張"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
        aria-label="下一張"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-6 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`切換到第 ${i + 1} 張`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — gradient + ghosted building + geometric gold accents */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1726] via-primary to-[#162038]" />
        {/* Ghosted building image for texture (very low opacity) */}
        <div className="absolute inset-0">
          <Image
            src="/images/building-aerial.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08] mix-blend-luminosity"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1726]/60 via-transparent to-[#162038]/80" />
        </div>

        {/* Animated gold geometric decorations + floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* CSS animated floating particles */}
          <style>{`
            @keyframes floatUp { 0%{transform:translateY(0) scale(1);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(-100vh) scale(0.5);opacity:0} }
            @keyframes floatDrift { 0%{transform:translate(0,0)} 50%{transform:translate(20px,-30px)} 100%{transform:translate(0,0)} }
            .particle{position:absolute;width:2px;height:2px;background:rgba(201,168,76,0.3);border-radius:50%;animation:floatUp linear infinite}
            .glow-dot{position:absolute;width:4px;height:4px;background:rgba(201,168,76,0.15);border-radius:50%;filter:blur(1px);animation:floatDrift ease-in-out infinite}
          `}</style>
          <div className="particle" style={{left:'10%',bottom:0,animationDuration:'12s',animationDelay:'0s'}} />
          <div className="particle" style={{left:'20%',bottom:0,animationDuration:'15s',animationDelay:'2s'}} />
          <div className="particle" style={{left:'35%',bottom:0,animationDuration:'11s',animationDelay:'4s'}} />
          <div className="particle" style={{left:'50%',bottom:0,animationDuration:'14s',animationDelay:'1s'}} />
          <div className="particle" style={{left:'65%',bottom:0,animationDuration:'13s',animationDelay:'3s'}} />
          <div className="particle" style={{left:'80%',bottom:0,animationDuration:'16s',animationDelay:'5s'}} />
          <div className="particle" style={{left:'90%',bottom:0,animationDuration:'12s',animationDelay:'7s'}} />
          <div className="particle" style={{left:'45%',bottom:0,animationDuration:'10s',animationDelay:'6s'}} />
          <div className="glow-dot" style={{left:'15%',top:'25%',animationDuration:'8s'}} />
          <div className="glow-dot" style={{left:'70%',top:'40%',animationDuration:'10s',animationDelay:'2s'}} />
          <div className="glow-dot" style={{left:'85%',top:'20%',animationDuration:'7s',animationDelay:'4s'}} />
          <div className="glow-dot" style={{left:'30%',top:'65%',animationDuration:'9s',animationDelay:'1s'}} />
          {/* Diagonal gold lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              {/* Fine grid pattern */}
              <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="0.5"/>
              </pattern>
              {/* Radial glow */}
              <radialGradient id="glow" cx="50%" cy="45%" r="40%">
                <stop offset="0%" stopColor="rgba(201,168,76,0.08)" />
                <stop offset="100%" stopColor="rgba(201,168,76,0)" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
            <rect width="100%" height="100%" fill="url(#glow)" />
            {/* Architectural diagonal lines */}
            <line x1="0" y1="100%" x2="35%" y2="0" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
            <line x1="10%" y1="100%" x2="45%" y2="0" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
            <line x1="65%" y1="100%" x2="100%" y2="0" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
            <line x1="75%" y1="100%" x2="100%" y2="15%" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
            {/* Horizontal accent lines */}
            <line x1="0" y1="30%" x2="20%" y2="30%" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
            <line x1="80%" y1="70%" x2="100%" y2="70%" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
          </svg>

          {/* Gold corner frames — architectural motif */}
          {/* Top-left corner */}
          <div className="absolute top-[15%] left-[8%] w-32 h-32 md:w-48 md:h-48">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/20 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold/20 to-transparent" />
          </div>
          {/* Bottom-right corner */}
          <div className="absolute bottom-[15%] right-[8%] w-32 h-32 md:w-48 md:h-48">
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/20 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold/20 to-transparent" />
          </div>

          {/* Floating gold diamond shapes */}
          <div className="absolute top-[20%] right-[15%] w-3 h-3 rotate-45 border border-gold/15 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[60%] left-[12%] w-2 h-2 rotate-45 border border-gold/10 animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-[35%] left-[25%] w-1.5 h-1.5 rotate-45 bg-gold/10 animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute bottom-[30%] right-[20%] w-2 h-2 rotate-45 bg-gold/8 animate-pulse" style={{ animationDuration: '7s' }} />

          {/* Subtle light beam from top-right */}
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-gold/[0.03] via-transparent to-transparent rounded-full" />
          {/* Subtle light beam from bottom-left */}
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-gold/[0.02] via-transparent to-transparent rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Gold badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 border border-gold/30 rounded-full backdrop-blur-sm bg-gold/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm tracking-[0.2em] font-medium">智慧建築・候選銀級認證</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-5 tracking-[0.15em] leading-tight">
            宇泰楓雲
          </h1>

          {/* Gold divider line */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-gold/80 text-base md:text-lg tracking-[0.4em] font-light">
              YUTAI FENGYUN
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          {/* Subtitle */}
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            台中大雅・上楓國小正對面<br />
            鄰近中科園區・交通便利生活圈
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-lg px-10 py-4">
              立即預約賞屋
            </Link>
            <Link href="/about" className="btn-outline text-lg px-10 py-4">
              了解更多
            </Link>
          </div>
        </div>

        {/* Bottom gold line accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gold/40 text-xs tracking-widest">SCROLL</span>
          <svg className="w-5 h-5 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Building Gallery Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">建築美學</h2>
            <p className="section-subtitle">匠心獨具的建築設計，打造城市新地標</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <ImageCarousel images={galleryImages} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">五大智慧亮點</h2>
            <p className="section-subtitle">創新科技融入居家生活，打造智慧宜居新標準</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlights.map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Scenes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">生活情境</h2>
            <p className="section-subtitle">從迎賓大廳到社區步道，每一處都是生活的美好風景</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifestyleImages.map((img, i) => (
              <AnimateOnScroll key={i}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-lg mb-1">{img.title}</h3>
                    <p className="text-white/80 text-sm">{img.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">建案快覽</h2>
            <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">宇泰開發建設 精心規劃每一個細節</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickInfo.map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="text-center p-4">
                  <div className="text-gold text-2xl md:text-3xl font-bold mb-2">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Location Maps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">基地位置</h2>
            <p className="section-subtitle">台中大雅核心地段，生活機能一應俱全</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Site location */}
            <AnimateOnScroll>
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md">
                <div className="aspect-[4/3] relative">
                  <iframe
                    src="https://www.google.com/maps?q=台中市大雅區楓林街233號&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="基地位置"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg">基地位置</h3>
                      <p className="text-gray-500 text-sm">臺中市大雅區楓林街233號附近</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Reception center */}
            <AnimateOnScroll>
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md">
                <div className="aspect-[4/3] relative">
                  <iframe
                    src="https://www.google.com/maps?q=台中市大雅區雅潭路四段717號&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="接待中心位置"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg">接待中心</h3>
                      <p className="text-gray-500 text-sm">臺中市大雅區雅潭路四段717號</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              把握預售優惠，搶先入主智慧宅
            </h2>
            <p className="text-primary/70 mb-8 text-lg">
              台中大雅｜上楓國小正對面｜鄰近中科園區
            </p>
            <Link href="/contact" className="inline-block bg-primary text-gold font-bold text-lg px-10 py-4 rounded-md hover:bg-primary-dark transition-colors shadow-xl">
              立即預約賞屋
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
