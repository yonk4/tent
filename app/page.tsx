"use client";

import React, { useRef, useState } from "react";
import {
  Phone,
  Facebook,
  MessageCircle,
  MapPin,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  Plus,
} from "lucide-react";

export default function LandingPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showAllTents, setShowAllTents] = useState(false);
  const [showAllEquip, setShowAllEquip] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const allTentTypes = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    img: `/img/type/${i + 1}.png`,
  }));

  const allEquipments = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    img: `/img/equipment/${i + 1}_0.png`,
  }));

  const visibleTentTypes = showAllTents
    ? allTentTypes
    : allTentTypes.slice(0, 6);
  const visibleEquipments = showAllEquip
    ? allEquipments
    : allEquipments.slice(0, 6);

  const showcases = Array.from({ length: 35 }, (_, i) => {
    const id = i + 1;
    if (id === 23) return null;
    return {
      id: id,
      img: `/img/showcase/${id}_0.jpg`,
    };
  }).filter((item): item is { id: number; img: string } => item !== null);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <nav className="flex items-center justify-between px-6 py-4 border-b sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <img
            src="/img/logo.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full border shadow-sm"
          />
          <span className="font-bold text-xl text-blue-900 hidden md:block">
            บูรพาเต๊นท์
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="tel:0819402144"
            className="bg-yellow-500 p-2 rounded-full text-white"
          >
            <Phone size={20} />
          </a>
          <a href="#" className="bg-green-500 p-2 rounded-full text-white">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="bg-blue-600 p-2 rounded-full text-white">
            <Facebook size={20} />
          </a>
        </div>
      </nav>

      <header className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="/img/showcase/1_0.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero background"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-white text-balance">
            หจก.บูรพาเต๊นท์ เซอร์วิส แอนด์ ซัพพลาย
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-white">
            เช่า - จำหน่ายเต๊นท์ อุปกรณ์จัดงานครบวงจร ชลบุรี พัทยา ระยอง
          </p>
          <a
            href="tel:0819402144"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2"
          >
            <Phone size={20} /> 081-940-2144 (ตี๋)
          </a>
        </div>
      </header>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">เกี่ยวกับเรา</h2>
        <p className="text-lg leading-relaxed text-slate-600 text-balance">
          ผลิต จำหน่าย และให้เช่าเต๊นท์หลายขนาดตามความต้องการ พร้อมบริการ โต๊ะ
          เก้าอี้ พัดลม และอุปกรณ์จัดงานทุกชนิด ครอบคลุมพื้นที่ พัทยา แหลมฉบัง
          ชลบุรี ระยอง และจังหวัดใกล้เคียง เน้นงานคุณภาพ ทีมงานมืออาชีพ
        </p>
      </section>

      {/* Type of Tents Grid */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
            ประเภทเต๊นท์ของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 mb-12 transition-all duration-500 overflow-hidden">
            {visibleTentTypes.map((tent) => (
              <div
                key={tent.id}
                className="p-2 rounded-xl hover:shadow-md transition-shadow flex items-center justify-center h-90 overflow-hidden"
              >
                <img
                  src={tent.img}
                  alt={`Tent type ${tent.id}`}
                  className="max-w-full max-h-full object-contain p-4 scale-125"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowAllTents(!showAllTents)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all shadow-lg ${
                showAllTents
                  ? "bg-slate-300 text-slate-700"
                  : "bg-blue-900 text-white"
              }`}
            >
              {showAllTents ? (
                <>
                  <ChevronUp size={20} /> ย่อ
                </>
              ) : (
                <>
                  <Plus size={20} /> ดูทั้งหมด
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
            อุปกรณ์เพิ่มเติม
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 mb-12 transition-all duration-500 overflow-hidden">
            {visibleEquipments.map((equip) => (
              <div
                key={equip.id}
                className="p-2 rounded-xl hover:shadow-md transition-shadow flex items-center justify-center h-90 overflow-hidden"
              >
                <img
                  src={equip.img}
                  alt={`Equipment ${equip.id}`}
                  className="max-w-full max-h-full object-contain p-4 scale-125"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowAllEquip(!showAllEquip)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all shadow-lg ${
                showAllEquip
                  ? "bg-slate-300 text-slate-700"
                  : "bg-blue-900 text-white"
              }`}
            >
              {showAllEquip ? (
                <>
                  <ChevronUp size={20} /> ย่อ
                </>
              ) : (
                <>
                  <Plus size={20} /> ดูทั้งหมด
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 overflow-hidden bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-blue-900">ผลงานของเรา</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {showcases.map((item) => (
            <div
              key={item.id}
              className="flex-none h-64 md:h-96 snap-center rounded-xl overflow-hidden flex items-center justify-center p-2"
            >
              <img
                src={item.img}
                alt="Showcase"
                className="h-full w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">
            แผนที่และการเดินทาง
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex items-center justify-center p-2">
              <img
                src="/img/map1.jpg"
                alt="Map 1"
                className="max-w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex items-center justify-center p-2">
              <img
                src="/img/map2.png"
                alt="Map 2"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-white text-balance">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/img/logo.jpg"
                alt="Logo"
                className="h-16 w-16 rounded-full border-2 border-white shadow-lg"
              />
              <h3 className="text-2xl font-bold text-white leading-tight">
                หจก.บูรพาเต๊นท์เซอร์วิสแอนด์ซัพพลาย
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              ผู้เชี่ยวชาญด้านงานเต๊นท์และอุปกรณ์จัดงาน บริการประทับใจ
              ราคาเป็นกันเอง รองรับทั้งงานเล็ก งานใหญ่ และงานโครงสร้างขนาดใหญ่
              (Warehouse)
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <MapPin className="text-yellow-400 shrink-0" /> พัทยา แหลมฉบัง
                ชลบุรี ระยอง
              </div>
              <div className="flex items-center gap-3 text-white">
                <Phone className="text-yellow-400 shrink-0" /> 081-940-2144
                (คุณตี๋)
              </div>
              <div className="flex items-center gap-3 text-white leading-snug">
                <Facebook className="text-yellow-400 shrink-0" />{" "}
                หจก.บูรพาเต๊นท์เซอร์วิสแอนด์ซัพพลาย
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-4 text-white">
              ติดต่อสอบถาม / ขอใบเสนอราคา
            </h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <a
                href="tel:0819402144"
                className="bg-yellow-500 hover:bg-yellow-600 p-4 rounded-xl flex flex-col items-center gap-2 transition-colors"
              >
                <Phone size={24} className="text-white" />
                <span className="text-sm font-bold text-white">โทรเลย</span>
              </a>
              <a
                href="#"
                className="bg-green-500 hover:bg-green-600 p-4 rounded-xl flex flex-col items-center gap-2 transition-colors"
              >
                <MessageCircle size={24} className="text-white" />
                <span className="text-sm font-bold text-white">Line ID</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-white/10 text-blue-300 text-sm">
          © {new Date().getFullYear()} หจก.บูรพาเต๊นท์เซอร์วิสแอนด์ซัพพลาย. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}
