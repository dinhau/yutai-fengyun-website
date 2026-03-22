'use client';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const units = [
  { type: 'A戶', rooms: '三房', size: '33.89坪', price: '1,388萬起', color: 'from-blue-500 to-blue-700' },
  { type: 'B戶', rooms: '三房', size: '33.80坪', price: '1,388萬起', color: 'from-blue-500 to-blue-700' },
  { type: 'C戶', rooms: '兩房', size: '30.00坪', price: '1,188萬起', color: 'from-emerald-500 to-emerald-700' },
  { type: 'D戶', rooms: '兩房', size: '30.00坪', price: '1,188萬起', color: 'from-emerald-500 to-emerald-700' },
  { type: 'E戶', rooms: '兩房', size: '27.72坪', price: '1,088萬起', color: 'from-violet-500 to-violet-700' },
];

const parkingInfo = [
  { floor: 'B1', price: '188萬' },
  { floor: 'B2', price: '178萬' },
  { floor: 'B3', price: '168萬' },
];

export default function Products() {
  return (
    <>
      {/* Hero with building image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/building-top.jpg"
            alt="宇泰楓雲建築頂部"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 border border-gold/40 rounded-full text-gold text-sm tracking-widest">
            FLOOR PLANS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">產品規劃</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            精心規劃兩房至三房，滿足不同家庭需求
          </p>
        </div>
      </section>

      {/* Unit Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="gold-divider" />
            <h2 className="section-title">住家房型</h2>
            <p className="section-subtitle">五種房型，找到最適合您的家</p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {units.map((unit, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                  {/* Color header */}
                  <div className={`bg-gradient-to-r ${unit.color} p-6 text-white`}>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-sm opacity-80 mb-1">{unit.rooms}</div>
                        <div className="text-3xl font-black">{unit.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-80">坪數</div>
                        <div className="text-2xl font-bold">{unit.size}</div>
                      </div>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="space-y-3 flex-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">房型格局</span>
                        <span className="font-medium text-primary">{unit.rooms === '三房' ? '三房兩廳兩衛' : '兩房兩廳一衛'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">主建物坪數</span>
                        <span className="font-medium text-primary">{unit.size}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">智慧建築配備</span>
                        <span className="font-medium text-primary">全標配</span>
                      </div>
                      <hr className="border-gray-100" />
                      <div className="flex justify-between items-end">
                        <span className="text-gray-500 text-sm">總價</span>
                        <span className="text-2xl font-black text-gold">{unit.price}</span>
                      </div>
                    </div>
                    <Link href="/contact" className="block text-center btn-gold mt-6 w-full !px-4">
                      預約看房
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Store & Parking */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Stores */}
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">店面規劃</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">數量</span>
                    <span className="font-bold text-primary">7間</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">坪數範圍</span>
                    <span className="font-bold text-primary">33～44坪</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">位置</span>
                    <span className="font-bold text-primary">一樓臨路面</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  位於上楓國小正對面，學區人潮帶動商機，店面投資自用兩相宜。
                </p>
              </div>
            </AnimateOnScroll>

            {/* Parking */}
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">車位規劃</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">總車位數</span>
                    <span className="font-bold text-primary">68個</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">車位型態</span>
                    <span className="font-bold text-primary">全平面車位</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  {parkingInfo.map((p, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{p.floor}</span>
                      <span className="text-gold font-bold text-lg">{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">找到心目中的理想房型了嗎？</h2>
          <p className="text-primary/70 mb-6">預約賞屋，實際感受宇泰楓雲的居住品質</p>
          <Link href="/contact" className="inline-block bg-primary text-gold font-bold px-10 py-4 rounded-md hover:bg-primary-dark transition-colors shadow-xl">
            立即預約賞屋
          </Link>
        </div>
      </section>
    </>
  );
}
