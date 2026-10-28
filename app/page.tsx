import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lcmjddknwlbmrtbpfvsr.supabase.co";
const supabaseKey = "sb_publishable_TeSRgTFkPk6zAr0NR6vbeg_8a4qi3_V"; 
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function Home() {
  const { data: categories } = await supabase.from("categories").select("*");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FFD700] selection:text-black" dir="rtl">
      
      {/* الهيدر الفخم */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-[#FFD700] p-1 rounded-2xl">
            <img src="https://i.ibb.co/FLS7f0ph/9e168d62-fde9-4dd4-aad1-3e5ccb66cc44.jpg" alt="شعار العجمي" className="h-12 w-12 object-contain rounded-xl" />
          </div>
          <h1 className="text-2xl font-black tracking-wide text-white">مصنع <span className="text-[#FFD700]">العجمي</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-bold text-gray-300 hover:text-[#FFD700] transition-colors duration-300">تسجيل المالك</Link>
          <Link href="/cart" className="bg-[#FFD700] text-black py-2 px-6 rounded-full font-bold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.3)]">السلة 🛒</Link>
        </div>
      </header>

      {/* البانر الرئيسي */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          نوم مريح يليق بيك.. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-600">جودة عالمية</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
          اكتشف مجموعتنا الحصرية من المراتب السوست والطبية. راحة تامة، دعم كامل، وتصميم يليق بغرفتك.
        </p>
        <a href="#categories" className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-[#FFD700] hover:scale-105 transition-all duration-300 shadow-xl">
          تصفح المجموعة
        </a>
      </section>

      {/* عرض الأقسام بحواف دائرية وظلال */}
      <section id="categories" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[2px] w-12 bg-[#FFD700]"></div>
          <h3 className="text-3xl font-black text-center text-white">أقسامنا</h3>
          <div className="h-[2px] w-12 bg-[#FFD700]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories?.map((cat) => (
            <Link href={`/category/${cat.id}`} key={cat.id} className="group relative bg-[#151515] border border-white/5 rounded-3xl p-10 text-center hover:bg-[#1a1a1a] hover:border-[#FFD700]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(255,215,0,0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-[#FFD700] transition-colors">{cat.name}</h4>
                <span className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white py-3 px-8 rounded-full font-bold text-sm group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300">
                  اكتشف الآن
                  <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-black border-t border-white/10 py-12 text-center mt-20">
        <div className="bg-[#FFD700] w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
           <img src="https://i.ibb.co/FLS7f0ph/9e168d62-fde9-4dd4-aad1-3e5ccb66cc44.jpg" alt="شعار العجمي" className="h-10 w-10 object-contain rounded-lg" />
        </div>
        <p className="text-2xl font-black text-white mb-4">مصنع العجمي للمراتب</p>
        <p className="text-gray-400 text-sm mb-2">الرياض مركز منية النصر المنصورة دقهلية</p>
        <p className="text-[#FFD700] text-sm font-bold dir-ltr">+20 10 03555377</p>
      </footer>
    </div>
  );
}
