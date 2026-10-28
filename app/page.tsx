import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lcmjddknwlbmrtbpfvsr.supabase.co";
const supabaseKey = "sb_publishable_TeSRgTFkPk6zAr0NR6vbeg_8a4qi3_V"; 
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function Home() {
  const { data: categories } = await supabase.from("categories").select("*");

  return (
    <div className="min-h-screen bg-gray-50 text-black" dir="rtl">
      <header className="bg-[#FFD700] py-3 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <img src="https://i.ibb.co/FLS7f0ph/9e168d62-fde9-4dd4-aad1-3e5ccb66cc44.jpg" alt="شعار العجمي" className="h-12 w-12 object-contain rounded-full bg-white p-1 border-2 border-black" />
          <h1 className="text-xl md:text-2xl font-bold text-black">مصنع العجمي</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-bold text-gray-800 hover:text-black">تسجيل المالك</Link>
          <Link href="/cart" className="bg-black text-white py-2 px-4 rounded-lg font-bold hover:bg-gray-800 text-sm">السلة 🛒</Link>
        </div>
      </header>

      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          نوم مريح يليق بيك.. <span className="text-[#FFD700]">جودة عالمية</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-300">أحدث المراتب السوست والطبية بأسعار المصنع مباشرة.</p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 border-b-4 border-[#FFD700] inline-block pb-2">أقسامنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {categories?.map((cat) => (
            <Link href={`/category/${cat.id}`} key={cat.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300">
              <div className="p-10 text-center">
                <h4 className="text-xl md:text-2xl font-bold mb-4 text-black">{cat.name}</h4>
                <span className="text-black bg-[#FFD700] py-2 px-6 rounded-full font-bold text-sm">اكتشف الآن ←</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center border-t-4 border-[#FFD700] mt-10">
        <p className="text-lg font-bold mb-2">مصنع العجمي للمراتب</p>
        <p className="text-gray-400 text-sm">الرياض مركز منية النصر المنصورة دقهلية</p>
        <p className="text-gray-400 text-sm">واتساب: +20 10 03555377</p>
      </footer>
    </div>
  );
}
