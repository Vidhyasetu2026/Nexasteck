import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionHeader from "../ui/SectionHeader";
import { TESTIMONIALS } from "../../data/siteData";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative z-10 py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Client Voices"
          title="What our clients"
          highlight="say"
          center
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          className="!pb-14"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="glass rounded-2xl p-10 text-center max-w-2xl mx-auto">
                <div className="text-amber-400 text-lg mb-5 tracking-widest">{"★".repeat(t.stars)}</div>
                <blockquote className="text-lg md:text-xl italic leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--text-dim)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
