"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Definindo a interface para evitar erros de tipagem no categories
interface WPPost {
  ID: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featured_image: string | null;
  categories: Record<string, { name: string }>;
  comment_count: number;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchAllPosts() {
      try {
        const res = await fetch(
          "https://public-api.wordpress.com/rest/v1.1/sites/apiceblog0.wordpress.com/posts"
        );
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Erro ao buscar blog:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAllPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="py-40 text-center font-sans text-gray-500">Carregando conteúdo...</div>;

  return (
    <main className="bg-[#F9FAFB] min-h-screen font-sans">
      <section className="relative h-[450px] flex items-center justify-center bg-[#1B1F2E]">
       <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-10.jpg')" }}></div>
        <h1 className="relative text-3xl font-black text-white uppercase tracking-wider z-10">
          Blog
        </h1>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 mt-12 pb-20 relative z-20">
        
        {/* BARRA DE PESQUISA */}
        <div className="flex mb-16 shadow-sm bg-white rounded-sm overflow-hidden">
          <input 
            type="text" 
            placeholder="Digite para iniciar a pesquisa..." 
            className="flex-grow p-5 border-none text-sm outline-none text-gray-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#1B1F2E] text-white px-10 py-5 uppercase text-[11px] font-bold hover:bg-[#6EC1E4] transition-colors tracking-widest">
            Pesquisar
          </button>
        </div>

        {/* GRID DE POSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.ID} className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
                
                {/* 1. IMAGEM CLICÁVEL */}
                <Link href={`/blog/${post.slug}`} className="relative h-64 bg-gray-100 overflow-hidden block">
                  <Image
                    src={post.featured_image || "/images/placeholder-blog.jpg"}
                    alt="Novidades Ápice"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#6EC1E4] text-white text-[10px] font-bold px-3 py-1 uppercase rounded-full tracking-tighter z-10">
                    {(Object.values(post.categories || {}) as { name: string }[])[0]?.name || "Sem Categoria"}
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  {/* 2. TÍTULO CLICÁVEL */}
                  <Link href={`/blog/${post.slug}`} className="block group/title">
                    <h2 
                      className="text-[20px] font-bold text-[#1B1F2E] mb-4 leading-tight min-h-[56px] line-clamp-2 group-hover/title:text-[#6EC1E4] transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                  </Link>

                  <div 
                    className="text-gray-500 text-[14px] leading-relaxed line-clamp-3 mb-8"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  
                  {/* 3. LEIA MAIS CLICÁVEL */}
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-[#6EC1E4] font-bold text-[11px] uppercase tracking-widest hover:text-[#1B1F2E] transition-colors mt-auto flex items-center gap-1"
                  >
                    Leia Mais »
                  </Link>

                  {/* RODAPÉ DO CARD (Não clicável) */}
                  <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 uppercase font-medium">
                    <span>
                      {new Date(post.date).toLocaleDateString("pt-BR", { 
                        day: '2-digit', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span>
                      {post.comment_count === 0 ? "0 Comentários" : `${post.comment_count} comentário(s)`}
                    </span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 text-lg">Nenhum artigo encontrado para "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-[#6EC1E4] font-bold uppercase text-xs hover:underline"
              >
                Limpar busca
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}