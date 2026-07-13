import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";
import RouterButton from "../ui/RouterButton";
import { PROJECTS } from "../../data/siteData";

export default function PortfolioPreview() {
  return (
    <section id="work" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects we're"
            highlight="proud of"
            subtitle="A glimpse of products we've designed, built, and shipped for clients across industries."
          />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.05}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.3 },
          }}
          className="!pb-14 !px-1"
        >
          {PROJECTS.map((p) => (
            <SwiperSlide key={p.id}>
              <Link
                to={`/portfolio/${p.id}`}
                data-cursor-hover
                className="group glass rounded-2xl overflow-hidden block h-full"
              >
                {/* Thumbnail */}
                <div
                  className="h-56 relative flex items-center justify-center text-5xl overflow-hidden"
                  style={{ background: p.gradient }}
                >
                  <span className="transition-transform duration-500 group-hover:scale-110">{p.emoji}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <FiArrowUpRight className="text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">{p.category}</span>
                  <h3 className="font-display font-bold text-xl mt-2 mb-1">{p.title}</h3>
                  <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>{p.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-4">
          <RouterButton to="/portfolio" variant="outline">
            View Full Portfolio <FiArrowRight />
          </RouterButton>
        </div>
      </div>
    </section>
  );
}
