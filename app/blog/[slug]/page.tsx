"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function PostInternalPage() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [postRes, recentRes, catsRes] = await Promise.all([
          fetch(`https://public-api.wordpress.com/rest/v1.1/sites/apiceblog0.wordpress.com/posts/slug:${params.slug}`),
          fetch(`https://public-api.wordpress.com/rest/v1.1/sites/apiceblog0.wordpress.com/posts/?number=5`),
          fetch(`https://public-api.wordpress.com/rest/v1.1/sites/apiceblog0.wordpress.com/categories`)
        ]);

        const [postData, recentData, catsData] = await Promise.all([
          postRes.json(),
          recentRes.json(),
          catsRes.json()
        ]);

        setPost(postData);
        setRecentPosts(recentData.posts || []);
        setCategories(catsData.categories || []);
      } catch (error) {
        console.error("Erro na busca de dados:", error);
      } finally {
        setLoading(false);
      }
    }
    if (params.slug) fetchData();
  }, [params.slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-400 uppercase text-xs tracking-widest">Carregando...</div>;
  if (!post) return <div className="min-h-screen flex items-center justify-center">Post não encontrado.</div>;

  const getSafeCategory = () => {
    if (post?.categories && Object.keys(post.categories).length > 0) {
      return (Object.values(post.categories)[0] as any).name;
    }
    return "Blog";
  };

  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* HEADER BANNER - AJUSTADO PARA 600PX E COM ESPAÇO PARA O MENU */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-[#1B1F2E] pt-[100px]">
        {/* Camada de fundo com textura sutil */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="relative z-10 text-center px-6 w-full max-w-[1240px]">
          <span className="text-[#6EC1E4] text-[12px] font-bold uppercase tracking-[0.4em] mb-6 block animate-fade-in">
            Ápice Blog
          </span>
          <h1 
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1]"
            dangerouslySetInnerHTML={{ __html: post.title }} 
          />
          <div className="mt-10 flex justify-center items-center gap-4 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
            <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: '2-digit', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* ÁREA DE CONTEÚDO */}
      <div className="w-full bg-white flex justify-center py-24">
        <div style={{ display: 'flex', width: '100%', maxWidth: '1240px', padding: '0 24px', gap: '60px', flexWrap: 'wrap' }}>
          
          {/* COLUNA DO POST (70%) */}
          <div style={{ flex: '0 0 70%', minWidth: '300px' }}>
            {post.featured_image && (
              <div className="relative w-full h-[250px] md:h-[550px] mb-8 rounded-sm overflow-hidden shadow-sm">
                <Image src={post.featured_image} alt="featured" fill className="object-cover" unoptimized />
              </div>
            )}
            
            {/* Categoria embaixo da imagem */}
            <div className="flex items-center gap-2 text-[11px] font-bold text-[#6EC1E4] uppercase tracking-wider mb-10">
              <span className="text-gray-300">📂</span>
              {getSafeCategory()}
            </div>
            
            <article 
              className="prose prose-xl max-w-none text-gray-600 leading-[1.8]
              prose-headings:text-[#1B1F2E] prose-headings:font-black prose-headings:uppercase
              prose-strong:text-[#1B1F2E] prose-a:text-[#6EC1E4]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* SIDEBAR (25%) */}
          <aside style={{ flex: '1', minWidth: '280px' }} className="space-y-12">
            
            {/* ÚLTIMOS POSTS DINÂMICOS */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              <h4 className="text-[14px] font-black text-[#1B1F2E] mb-8 relative uppercase tracking-widest">
                Popular Posts
                <span className="absolute -bottom-3 left-0 w-10 h-[2px] bg-[#6EC1E4]"></span>
              </h4>
              <div className="space-y-6">
                {recentPosts.map((rp) => (
                  <div key={rp.ID} className="flex items-center gap-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-0">
                    <div className="w-12 h-12 bg-[#1B1F2E] rounded-full flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                      {rp.featured_image ? (
                        <Image src={rp.featured_image} alt="" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" unoptimized />
                      ) : (
                        <span className="text-[8px] text-white font-bold">POST</span>
                      )}
                    </div>
                    <div>
                      <span className="text-[9px] text-[#6EC1E4] font-bold uppercase">
                        {new Date(rp.date).toLocaleDateString("en-US", { month: 'short', day: '2-digit', year: 'numeric' })}
                      </span>
                      <Link href={`/blog/${rp.slug}`} className="text-[12px] font-black text-[#1B1F2E] group-hover:text-[#6EC1E4] block uppercase leading-tight mt-1">
                        <span dangerouslySetInnerHTML={{ __html: rp.title }} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CATEGORIAS DINÂMICAS */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              <h4 className="text-[14px] font-black text-[#1B1F2E] mb-8 relative uppercase tracking-widest">
                Categorias
                <span className="absolute -bottom-3 left-0 w-10 h-[2px] bg-[#6EC1E4]"></span>
              </h4>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat.ID} className="flex justify-between items-center group cursor-pointer text-[11px] font-bold text-gray-500 uppercase">
                    <Link href={`/category/${cat.slug}`} className="group-hover:text-[#6EC1E4] transition-colors">
                      📂 {cat.name}
                    </Link>
                    <span className="text-[#6EC1E4] bg-[#6EC1E4]/5 px-2 py-0.5 rounded-sm">({cat.post_count})</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}