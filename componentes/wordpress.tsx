"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// IMPORTANTE: Mova os imports de CSS para o layout.tsx se o erro persistir
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface WPPost {
  ID: number;
  title: string;
  excerpt: string;
  slug: string; // Adicionado slug para navegação interna
  URL: string;
  date: string;
  featured_image: string | null;
  categories: { [key: string]: { name: string } };
  comment_count: number;
}

export function BlogCarousel() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://public-api.wordpress.com/rest/v1.1/sites/apiceblog0.wordpress.com/posts?number=6"
        );
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500 font-sans">
        Carregando novidades da Ápice...
      </div>
    );
  }

  return (
    <section className="py-20 bg-[#F9FAFB] font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[#6EC1E4] text-[13px] font-bold uppercase tracking-[2px]">
            Blog
          </span>
          <h2 className="text-4xl font-black text-[#1B1F2E] mt-2 mb-2">
            Novidades
          </h2>
          <div className="w-12 h-[2px] bg-[#6EC1E4] mx-auto" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 blog-swiper"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.ID}>
              <article className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-[520px] flex flex-col group">
                
                {/* IMAGEM COM LINK INTERNO */}
                <Link href={`/blog/${post.slug}`} className="relative h-60 w-full bg-gray-100 shrink-0 overflow-hidden">
                  <Image
                    src={post.featured_image || "/images/placeholder-blog.jpg"}
                    alt="Novidades Ápice"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized // Útil se o next.config ainda não estiver pronto
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#6EC1E4]/90 text-white text-[10px] font-bold px-3 py-1 uppercase rounded-full tracking-wider z-10">
                    {post.categories && Object.keys(post.categories).length > 0 
                      ? (Object.values(post.categories)[0] as any).name 
                      : "Blog"}
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-grow space-y-3">
                  {/* TÍTULO COM LINK INTERNO */}
                  <Link href={`/blog/${post.slug}`}>
                    <h3 
                      className="text-[19px] font-bold text-[#1B1F2E] leading-tight hover:text-[#6EC1E4] transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                      suppressHydrationWarning
                    />
                  </Link>

                  <div
                    className="text-gray-600 text-[14px] leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    suppressHydrationWarning
                  />

                  <div className="pt-4 mt-auto border-t border-gray-100 space-y-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#6EC1E4] text-[12px] font-bold uppercase hover:underline flex items-center gap-1"
                    >
                      Leia Mais »
                    </Link>

                    <div className="flex justify-between items-center text-[11px] text-gray-400 pt-1">
                      <span suppressHydrationWarning>{formatDate(post.date)}</span>
                      <span>
                        {post.comment_count === 0
                          ? "Nenhum comentário"
                          : `${post.comment_count} comentário(s)`}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .blog-swiper .swiper-button-next,
        .blog-swiper .swiper-button-prev {
          color: #1B1F2E !important;
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .blog-swiper .swiper-button-next:after,
        .blog-swiper .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }
        .blog-swiper .swiper-pagination-bullet-active {
          background-color: #6EC1E4 !important;
        }
      `}</style>
    </section>
  );
}