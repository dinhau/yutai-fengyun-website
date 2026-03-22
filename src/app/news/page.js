'use client';
import { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const newsItems = [
  {
    id: 1,
    date: '2026.03.15',
    category: '建案公告',
    title: '宇泰楓雲正式公開！智慧建築候選銀級認證',
    summary: '宇泰開發建設全新力作「宇泰楓雲」正式公開銷售，位於台中大雅區上楓國小正對面，取得智慧建築候選銀級認證，導入六大智慧系統，打造台中最具科技感的住宅社區。',
    content: '宇泰開發建設深耕台中多年，全新推出「宇泰楓雲」建案，座落於大雅區上楓國小正對面的絕佳地段。本案榮獲智慧建築候選銀級認證，整合送餐機器人、全棟WiFi、電子門鎖、安全防災智慧化、健康環境監測及社區APP六大智慧系統，讓住戶享受真正的智慧生活。全案規劃地上10層、地下3層，共45戶住家及7間店面，提供兩房至三房多元房型選擇。歡迎蒞臨接待中心，親身體驗智慧住宅的魅力。',
  },
  {
    id: 2,
    date: '2026.03.10',
    category: '區域發展',
    title: '中科園區持續擴大，台積電二廠2027年完工',
    summary: '中科園區就業人口已突破5.4萬人，隨著台積電二廠預計2027年完工投產，周邊房市需求持續增溫，大雅區成為中科從業人員購屋首選區域。',
    content: '根據中科管理局最新統計，園區就業人口已突破5.4萬人，年產值更突破兆元大關。備受矚目的台積電中科二廠預計於2027年完工投產，預估將帶動更多半導體供應鏈廠商進駐，進一步推升周邊就業與居住需求。大雅區憑藉鄰近中科園區的地理優勢，加上房價相對親民（每坪40-45萬，遠低於西屯水湳的50-95萬），成為中科從業人員購屋的熱門選擇。宇泰楓雲正位於此一發展熱區，具備優質的保值與增值潛力。',
  },
  {
    id: 3,
    date: '2026.03.01',
    category: '產品特色',
    title: '全台首創！送餐機器人進駐住宅社區',
    summary: '宇泰楓雲領先業界，成為全台首個導入送餐送貨機器人的住宅社區，從社區大廳到家門口，外送與包裹自動送達，開啟智慧生活新篇章。',
    content: '宇泰楓雲領先業界，率先將送餐送貨機器人導入住宅社區。這套智慧系統可將外送餐點、快遞包裹從社區大廳自動運送至住戶門口，住戶只需透過社區APP即可追蹤配送進度。機器人配備自主導航系統，能自動搭乘電梯，避開障礙物，確保配送安全準確。此外，機器人還支援社區內部遞送服務，住戶間可透過機器人互相傳送物品。這項創新服務不僅提升生活便利性，更重新定義了現代住宅的智慧化標準。',
  },
  {
    id: 4,
    date: '2026.02.20',
    category: '區域發展',
    title: '台中國際會展中心、綠美圖完工，帶動區域發展',
    summary: '台中國際會展中心及世界級建築「台中綠美圖」相繼完工啟用，加上捷運藍線、橘線持續規劃推進，水湳經貿園區周邊發展動能強勁。',
    content: '台中市重大建設接連到位，國際會展中心已正式啟用，帶動會展經濟發展；由日本建築大師妹島和世設計的「台中綠美圖」也已完工開放，這座結合圖書館與美術館的世界級建築，成為台中新地標。此外，捷運藍線與橘線正持續規劃推進中，未來完工後將大幅提升區域交通便利性。這些重大建設帶動水湳經貿園區及周邊地區蓬勃發展，鄰近的大雅區同樣受惠，生活機能與房產價值持續提升。',
  },
];

export default function News() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="newsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#newsGrid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 border border-gold/40 rounded-full text-gold text-sm tracking-widest">
            NEWS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">最新消息</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            掌握宇泰楓雲最新動態與區域發展資訊
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {newsItems.map((news) => (
              <AnimateOnScroll key={news.id}>
                <article className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                  <div
                    className="p-8 cursor-pointer"
                    onClick={() => setExpandedId(expandedId === news.id ? null : news.id)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-gray-400">{news.date}</span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold font-medium">
                        {news.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-gold transition-colors">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{news.summary}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-sm font-medium">
                      <span>{expandedId === news.id ? '收起內容' : '閱讀更多'}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${expandedId === news.id ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedId === news.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-8 pt-0">
                      <hr className="border-gray-200 mb-6" />
                      <p className="text-gray-700 leading-relaxed">{news.content}</p>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
