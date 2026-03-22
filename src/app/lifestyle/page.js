'use client';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const lifestyleCategories = [
  {
    title: '優質學區',
    icon: '🎓',
    items: [
      { name: '上楓國小', detail: '正對面，步行1分鐘', highlight: true },
      { name: '上楓分館', detail: '環境教育主題圖書館，步行3分鐘', highlight: false },
      { name: '大雅國中', detail: '車程約5分鐘', highlight: false },
    ],
  },
  {
    title: '交通網絡',
    icon: '🚗',
    items: [
      { name: '國道一號', detail: '民生路快速銜接', highlight: true },
      { name: '國道三號', detail: '鄰近交流道', highlight: false },
      { name: '74快速道路', detail: '暢行中彰投', highlight: false },
      { name: '台中國際機場', detail: '車程約10分鐘', highlight: false },
    ],
  },
  {
    title: '中科園區',
    icon: '🏢',
    items: [
      { name: '中科園區', detail: '就業人口5.4萬人', highlight: true },
      { name: '台積電二廠', detail: '預計2027年完工', highlight: true },
      { name: '園區產值', detail: '年產值突破兆元', highlight: false },
    ],
  },
  {
    title: '周邊建設',
    icon: '🌆',
    items: [
      { name: '國際會展中心', detail: '已完工啟用', highlight: true },
      { name: '台中綠美圖', detail: '已完工（世界級圖書館暨美術館）', highlight: true },
      { name: '捷運藍線', detail: '規劃中', highlight: false },
      { name: '捷運橘線', detail: '規劃中', highlight: false },
    ],
  },
];

const priceComparison = [
  { area: '大雅區', range: '40-45萬/坪', bar: 45, highlight: true },
  { area: '西屯水湳', range: '50-95萬/坪', bar: 95, highlight: false },
  { area: '北屯機捷特區', range: '45-60萬/坪', bar: 60, highlight: false },
  { area: '南屯七期', range: '60-100萬/坪', bar: 100, highlight: false },
];

export default function Lifestyle() {
  return (
    <>
      {/* Hero with lifestyle image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/family-path.jpg"
            alt="家庭友善步道"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 border border-gold/40 rounded-full text-gold text-sm tracking-widest">
            LIFESTYLE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">生活機能</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            學區、交通、就業、建設，全方位優質生活圈
          </p>
        </div>
      </section>

      {/* Lifestyle Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">周邊機能</h2>
            <p className="section-subtitle">食衣住行育樂，應有盡有</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {lifestyleCategories.map((cat, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{cat.icon}</span>
                    <h3 className="text-xl font-bold text-primary">{cat.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {cat.items.map((item, j) => (
                      <div
                        key={j}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          item.highlight ? 'bg-gold/5 border border-gold/20' : 'bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {item.highlight && (
                            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                          )}
                          <span className={`font-medium ${item.highlight ? 'text-primary' : 'text-gray-700'}`}>
                            {item.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">{item.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">周邊環境地圖</h2>
            <p className="section-subtitle">以建案基地為中心，生活所需近在咫尺</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="bg-primary rounded-2xl p-4 md:p-8 shadow-xl overflow-hidden">
              <svg viewBox="0 0 800 560" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect width="800" height="560" fill="#0d1726" rx="12"/>

                {/* ============ COMPASS (top-right) ============ */}
                <g transform="translate(740, 50)">
                  <circle cx="0" cy="0" r="22" fill="#1a2744" stroke="#3a5070" strokeWidth="1"/>
                  <polygon points="0,-16 -4,-4 0,-7 4,-4" fill="#c9a84c"/>
                  <polygon points="0,16 -4,4 0,7 4,4" fill="#3a5070"/>
                  <text x="0" y="-24" fill="#c9a84c" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">N</text>
                </g>

                {/* ============ ROADS ============ */}
                {/* 楓林街 — N-S (vertical), base is on west side. x=340 */}
                <line x1="340" y1="50" x2="340" y2="510" stroke="#1e3050" strokeWidth="8"/>
                <line x1="340" y1="50" x2="340" y2="510" stroke="#2a3d5c" strokeWidth="4"/>
                <line x1="340" y1="50" x2="340" y2="510" stroke="#3d5a7a" strokeWidth="1.5" strokeDasharray="10 6"/>
                <text x="328" y="480" fill="#5a7a9a" fontSize="10" fontFamily="sans-serif" textAnchor="end" transform="rotate(-90,328,480)">楓林街</text>

                {/* 樹德街 — E-W (horizontal), north of base. y=180 */}
                <line x1="200" y1="180" x2="650" y2="180" stroke="#1e3050" strokeWidth="5"/>
                <line x1="200" y1="180" x2="650" y2="180" stroke="#3d5a7a" strokeWidth="1" strokeDasharray="8 5"/>
                <text x="230" y="174" fill="#5a7a9a" fontSize="9" fontFamily="sans-serif">樹德街</text>

                {/* 民生路（台10線）— E-W, south ~200m of base. y=370 — thicker (30M road) */}
                <line x1="30" y1="370" x2="770" y2="370" stroke="#1e3050" strokeWidth="12"/>
                <line x1="30" y1="370" x2="770" y2="370" stroke="#2a3d5c" strokeWidth="7"/>
                <line x1="30" y1="370" x2="770" y2="370" stroke="#3d5a7a" strokeWidth="2" strokeDasharray="12 6"/>
                <text x="60" y="362" fill="#6a8aaa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">民生路（台10線・30M）</text>

                {/* 雅潭路 — N-S, ~600m east of 楓林街. x=560 */}
                <line x1="560" y1="50" x2="560" y2="510" stroke="#1e3050" strokeWidth="10"/>
                <line x1="560" y1="50" x2="560" y2="510" stroke="#2a3d5c" strokeWidth="5"/>
                <line x1="560" y1="50" x2="560" y2="510" stroke="#3d5a7a" strokeWidth="1.5" strokeDasharray="12 6"/>
                <text x="548" y="480" fill="#6a8aaa" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="end" transform="rotate(-90,548,480)">雅潭路（四段）</text>

                {/* ============ CENTER: 建案基地 (west side of 楓林街) ============ */}
                {/* Position: x=310 (west of 楓林街 x=340), y=260 (between 樹德街 y=180 and 民生路 y=370) */}
                <circle cx="310" cy="260" r="40" fill="#c9a84c" opacity="0.06"/>
                <circle cx="310" cy="260" r="26" fill="#c9a84c" opacity="0.10"/>
                <circle cx="310" cy="260" r="14" fill="#c9a84c" opacity="0.18"/>
                {/* Pin */}
                <circle cx="310" cy="260" r="10" fill="#c9a84c" stroke="#e0c060" strokeWidth="2.5"/>
                <circle cx="310" cy="260" r="4" fill="#0d1726"/>
                {/* Label */}
                <rect x="240" y="228" width="82" height="18" rx="4" fill="#c9a84c" opacity="0.9"/>
                <text x="281" y="241" fill="#0d1726" fontSize="11" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">宇泰楓雲</text>
                <text x="310" y="292" fill="#c9a84c" fontSize="9" fontFamily="sans-serif" textAnchor="middle">建案基地・楓林街233號</text>

                {/* ============ NEARBY POIs ============ */}

                {/* 上楓國小 — EAST side of 楓林街, directly opposite. x=385, y=260 */}
                <rect x="360" y="240" width="100" height="48" rx="6" fill="#1a2744" stroke="#c9a84c" strokeWidth="1.2" opacity="0.95"/>
                <circle cx="380" cy="258" r="4" fill="#c9a84c"/>
                <text x="410" y="260" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">上楓國小</text>
                <text x="410" y="278" fill="#8aa0b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">正對面・步行1分鐘</text>
                {/* Connector line */}
                <line x1="320" y1="260" x2="360" y2="260" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>

                {/* 上楓分館 — NE of base, near 樹德街. x=420, y=185 */}
                <circle cx="420" cy="200" r="4" fill="#c9a84c" opacity="0.8"/>
                <text x="420" y="218" fill="#d0d0d0" fontSize="10" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">上楓分館</text>
                <text x="420" y="230" fill="#8aa0b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">圖書館・步行2分鐘</text>
                <line x1="330" y1="250" x2="415" y2="204" stroke="#c9a84c" strokeWidth="0.8" opacity="0.35"/>

                {/* 大楓公園 — East of base, ~500m. x=480, y=250 */}
                <circle cx="490" cy="255" r="4" fill="#c9a84c" opacity="0.7"/>
                <text x="490" y="248" fill="#d0d0d0" fontSize="9" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">大楓公園</text>
                <text x="490" y="272" fill="#8aa0b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">步行5分鐘</text>

                {/* 接待中心 — SE of base, on 雅潭路. x=560, y=330 */}
                <circle cx="560" cy="330" r="8" fill="none" stroke="#c9a84c" strokeWidth="2"/>
                <circle cx="560" cy="330" r="3.5" fill="#c9a84c"/>
                <text x="560" y="350" fill="#c9a84c" fontSize="10" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">接待中心</text>
                <text x="560" y="362" fill="#8aa0b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">雅潭路四段717號</text>
                <line x1="325" y1="272" x2="552" y2="325" stroke="#c9a84c" strokeWidth="0.8" strokeDasharray="5 3" opacity="0.35"/>

                {/* 上楓棒球場/大雅體育園區 — NE, ~1km. x=530, y=120 */}
                <circle cx="530" cy="120" r="4" fill="#c9a84c" opacity="0.6"/>
                <text x="530" y="112" fill="#d0d0d0" fontSize="9" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">大雅體育園區</text>
                <text x="530" y="138" fill="#8aa0b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">上楓棒球場</text>
                <line x1="320" y1="250" x2="525" y2="125" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.25"/>

                {/* ============ FAR POIs (with arrow connectors) ============ */}

                {/* 台中國際機場 — NW of base. x=120, y=80 */}
                <rect x="50" y="60" width="140" height="45" rx="8" fill="#1a2744" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3 2"/>
                <circle cx="80" cy="78" r="4" fill="#c9a84c" opacity="0.7"/>
                <text x="125" y="78" fill="#d0d0d0" fontSize="10" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">台中國際機場</text>
                <text x="125" y="96" fill="#8aa0b8" fontSize="9" fontFamily="sans-serif" textAnchor="middle">車程約15分鐘</text>
                {/* Arrow line pointing NW */}
                <line x1="298" y1="248" x2="190" y2="100" stroke="#c9a84c" strokeWidth="0.7" strokeDasharray="5 3" opacity="0.3"/>
                <polygon points="190,100 196,108 186,106" fill="#c9a84c" opacity="0.3"/>

                {/* 中科園區 — SW of base. x=110, y=420 */}
                <rect x="50" y="400" width="125" height="50" rx="8" fill="#1a2744" stroke="#c9a84c" strokeWidth="1" strokeDasharray="3 2"/>
                <circle cx="78" cy="418" r="4" fill="#c9a84c" opacity="0.7"/>
                <text x="115" y="420" fill="#d0d0d0" fontSize="10" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">中科園區</text>
                <text x="115" y="438" fill="#8aa0b8" fontSize="9" fontFamily="sans-serif" textAnchor="middle">車程約10分鐘</text>
                {/* Arrow line pointing SW */}
                <line x1="298" y1="272" x2="175" y2="405" stroke="#c9a84c" strokeWidth="0.7" strokeDasharray="5 3" opacity="0.3"/>
                <polygon points="175,405 183,399 179,409" fill="#c9a84c" opacity="0.3"/>

                {/* 國際會展中心 — S/SW of base. x=220, y=450 */}
                <circle cx="250" cy="440" r="4" fill="#c9a84c" opacity="0.6"/>
                <text x="250" y="434" fill="#d0d0d0" fontSize="9" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">國際會展中心</text>
                <text x="250" y="458" fill="#8aa0b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">車程約10分鐘</text>
                <line x1="305" y1="275" x2="254" y2="434" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.25"/>

                {/* 潭雅神自行車道 — N/NE of base. x=450, y=80 */}
                <circle cx="430" cy="75" r="4" fill="#c9a84c" opacity="0.6"/>
                <text x="430" y="65" fill="#d0d0d0" fontSize="9" fontWeight="bold" fontFamily="'Noto Sans TC',sans-serif" textAnchor="middle">潭雅神自行車道</text>
                <text x="430" y="93" fill="#8aa0b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">車程約5分鐘</text>
                <line x1="320" y1="248" x2="425" y2="80" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.25"/>

                {/* 民生路 → 國道聯外 annotation */}
                <text x="400" y="395" fill="#6a8aaa" fontSize="9" fontFamily="sans-serif" textAnchor="middle">← 國道一號・三號・74快速道路（車程5分鐘）→</text>

                {/* ============ LEGEND ============ */}
                <rect x="20" y="498" width="320" height="48" rx="8" fill="#111c33" stroke="#1e3050" strokeWidth="1"/>
                {/* Base marker */}
                <circle cx="42" cy="516" r="5" fill="#c9a84c" stroke="#e0c060" strokeWidth="2"/>
                <circle cx="42" cy="516" r="2" fill="#0d1726"/>
                <text x="54" y="520" fill="#8aa0b8" fontSize="9" fontFamily="sans-serif">建案基地</text>
                {/* POI marker */}
                <circle cx="125" cy="516" r="4" fill="#c9a84c" opacity="0.7"/>
                <text x="135" y="520" fill="#8aa0b8" fontSize="9" fontFamily="sans-serif">周邊地標</text>
                {/* Reception */}
                <circle cx="205" cy="516" r="5" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
                <circle cx="205" cy="516" r="2" fill="#c9a84c"/>
                <text x="215" y="520" fill="#8aa0b8" fontSize="9" fontFamily="sans-serif">接待中心</text>
                {/* Road */}
                <line x1="280" y1="516" x2="310" y2="516" stroke="#3d5a7a" strokeWidth="2" strokeDasharray="4 3"/>
                <text x="316" y="520" fill="#8aa0b8" fontSize="9" fontFamily="sans-serif">道路</text>
                {/* Subtitle */}
                <text x="175" y="538" fill="#5a7a9a" fontSize="8" fontFamily="sans-serif" textAnchor="middle">※ 示意圖，方位正確，距離為概略比例</text>
              </svg>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              區域房價比較
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              大雅區房價相對親民，享受同等生活品質的最佳選擇
            </p>
          </AnimateOnScroll>
          <div className="max-w-3xl mx-auto space-y-6">
            {priceComparison.map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-right flex-shrink-0">
                    <span className={`font-bold ${item.highlight ? 'text-gold text-lg' : 'text-gray-300'}`}>
                      {item.area}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="h-10 bg-white/10 rounded-lg overflow-hidden relative">
                      <div
                        className={`h-full rounded-lg transition-all duration-1000 ${
                          item.highlight
                            ? 'bg-gradient-to-r from-gold to-gold-light'
                            : 'bg-white/20'
                        }`}
                        style={{ width: `${(item.bar / 100) * 100}%` }}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-white">
                        {item.range}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll>
            <p className="text-center text-gray-500 text-sm mt-8">
              ※ 房價資料為區域行情參考，實際價格依個案而定
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">心動不如行動</h2>
          <p className="text-primary/70 mb-6">親臨現場感受上楓生活圈的便利</p>
          <Link href="/contact" className="inline-block bg-primary text-gold font-bold px-10 py-4 rounded-md hover:bg-primary-dark transition-colors shadow-xl">
            立即預約賞屋
          </Link>
        </div>
      </section>
    </>
  );
}
