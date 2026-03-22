import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LineFloat from '@/components/LineFloat';

export const metadata = {
  title: '宇泰楓雲｜智慧建築・候選銀級認證｜台中大雅預售案',
  description: '宇泰開發建設「宇泰楓雲」，位於台中大雅區上楓國小正對面，10層電梯大樓，智慧建築候選銀級認證，送餐機器人、全棟WiFi、電子門鎖，鄰近中科園區。',
  keywords: '宇泰楓雲,宇泰開發建設,台中預售屋,大雅買房,智慧建築,中科,上楓國小',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant-TW">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <LineFloat />
      </body>
    </html>
  );
}
