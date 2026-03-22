'use client';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const smartFeatures = [
  {
    number: '01',
    title: '送餐送貨機器人',
    desc: '全台首創住宅導入送餐送貨機器人服務，從社區大廳到您家門口，外送餐點、包裹宅配自動送達，省去等電梯、跑大廳的麻煩。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: '全棟WiFi聯網',
    desc: '從地下停車場到頂樓公設，全棟無死角WiFi覆蓋。搭配智慧家居系統，讓您的生活全面連網，享受真正的智慧住宅體驗。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
  },
  {
    number: '03',
    title: '電子門鎖',
    desc: '全戶配備智慧電子門鎖，支援密碼、卡片、手機APP多重開鎖方式。遠端授權訪客進出，即時掌握門戶安全狀態。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: '安全防災智慧化',
    desc: '整合火警偵測、漏水感應、地震預警、用電異常監控四大系統。異常狀況即時推播通知，讓您在外也能安心掌握居家安全。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: '健康環境監測',
    desc: '室內空氣品質即時監測，包含PM2.5、CO2濃度、溫濕度等指標。搭配全熱交換器，自動調節室內空氣品質，守護家人健康。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: '社區APP服務平台',
    desc: '專屬社區APP整合所有智慧功能：包裹通知、訪客管理、公設預約、管理費查詢、社區公告，一機在手管理所有居家事務。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      {/* Hero with building image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/building-front.jpg"
            alt="宇泰楓雲建築正面"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 border border-gold/40 rounded-full text-gold text-sm tracking-widest">
            PROJECT INTRODUCTION
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">建案介紹</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            位於台中大雅上楓國小正對面，結合智慧科技與優質地段，打造理想居住環境
          </p>
        </div>
      </section>

      {/* Building Renderings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">建築風貌</h2>
            <p className="section-subtitle">現代建築美學，打造城市天際線</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <AnimateOnScroll>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/building-aerial.jpg" alt="大樓鳥瞰全景" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">全景鳥瞰</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/building-front.jpg" alt="大樓正面渲染" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">建築外觀</div>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimateOnScroll>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/building-top.jpg" alt="大樓頂部特寫" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">頂部設計</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/storefront.jpg" alt="一樓店面街景" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">街面店鋪</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/entrance.jpg" alt="入口光廊" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">迎賓光廊</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">地段優勢</h2>
            <p className="section-subtitle">黃金地段，三大優勢一次擁有</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '明星學區',
                desc: '上楓國小正對面，孩子上下學步行一分鐘即達。鄰近上楓分館（環境教育主題圖書館），培養閱讀好習慣。',
                icon: '🎓',
              },
              {
                title: '中科生活圈',
                desc: '鄰近中科園區，就業人口超過5.4萬人。台積電二廠預計2027年完工，區域發展潛力無限。',
                icon: '🏢',
              },
              {
                title: '交通便利',
                desc: '民生路快速銜接國道一號、國道三號、74快速道路，鄰近台中國際機場，南來北往暢行無阻。',
                icon: '🚗',
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Building Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">建築規劃</h2>
            <p className="section-subtitle">嚴謹規劃，匠心打造</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: '基地面積', value: '455坪' },
                  { label: '建築樓層', value: '地上10層・地下3層' },
                  { label: '總戶數', value: '52戶（45住家＋7店面）' },
                  { label: '車位數量', value: '68個全平面車位' },
                  { label: '建設公司', value: '宇泰開發建設' },
                  { label: '建築認證', value: '智慧建築候選銀級' },
                  { label: '結構工法', value: 'RC鋼筋混凝土' },
                  { label: '基地位置', value: '台中市大雅區楓林街233號附近' },
                ].map((item, i) => (
                  <div key={i} className="p-6 border-b border-r border-gray-100">
                    <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                    <div className="text-primary font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              六大智慧亮點
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              智慧建築候選銀級認證，以科技守護每一個家
            </p>
          </AnimateOnScroll>

          {/* Context images */}
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
                <Image src="/images/entrance.jpg" alt="宇泰楓雲入口光廊" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold bg-gold/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm">入口光廊</span>
                </div>
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group">
                <Image src="/images/playground.jpg" alt="宇泰楓雲放學後遊戲場" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-bold bg-gold/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm">放學後遊戲場</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartFeatures.map((feature, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors h-full group">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-gold/30 text-4xl font-black">{feature.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors flex-shrink-0">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">想深入了解宇泰楓雲？</h2>
          <p className="text-primary/70 mb-6">歡迎預約賞屋，由專人為您詳細介紹</p>
          <Link href="/contact" className="inline-block bg-primary text-gold font-bold px-10 py-4 rounded-md hover:bg-primary-dark transition-colors shadow-xl">
            立即預約賞屋
          </Link>
        </div>
      </section>
    </>
  );
}
