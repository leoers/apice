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
        setLoading(false); // Correção do erro de chamada de função do estado
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
            
            {/* RENDERIZADOR DO CONTEÚDO DO WORDPRESS COM ESTILOS CORRIGIDOS */}
            <article 
              className="wordpress-content text-gray-600 text-[17px] leading-[1.8] font-sans max-w-none"
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
                      {/* Corrigido para pt-BR */}
                      <span className="text-[9px] text-[#6EC1E4] font-bold uppercase">
                        {new Date(rp.date).toLocaleDateString("pt-BR", { month: 'short', day: '2-digit', year: 'numeric' })}
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

      {/* ESTILOS EXCLUSIVOS PARA FORÇAR A FORMATAÇÃO DO WORDPRESS */}
      <style jsx global>{`
        .wordpress-content p {
          margin-bottom: 1.75rem !important;
        }
        .wordpress-content h1, 
        .wordpress-content h2, 
        .wordpress-content h3, 
        .wordpress-content h4, 
        .wordpress-content h5, 
        .wordpress-content h6 {
          color: #1B1F2E !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          margin-top: 2.5rem !important;
          margin-bottom: 1.25rem !important;
          line-height: 1.3 !important;
        }
        .wordpress-content h4 { font-size: 1.6rem !important; }
        .wordpress-content h5 { font-size: 1.3rem !important; }
        
        .wordpress-content ul {
          list-style-type: disc !important;
          padding-left: 1.5rem !important;
          margin-bottom: 1.75rem !important;
        }
        .wordpress-content ol {
          list-style-type: decimal !important;
          padding-left: 1.5rem !important;
          margin-bottom: 1.75rem !important;
        }
        .wordpress-content li {
          margin-bottom: 0.5rem !important;
          padding-left: 0.25rem !important;
        }
        .wordpress-content strong {
          color: #1B1F2E !important;
          font-weight: bold !important;
        }
        
        /* LINKS GERAIS DO TEXTO */
        .wordpress-content a:not(.wp-block-button__link) {
          color: #6EC1E4 !important;
          text-decoration: underline !important;
        }
        .wordpress-content a:not(.wp-block-button__link):hover {
          color: #1B1F2E !important;
        }

        /* CONTAINER DO BLOCO DE BOTÃO */
        .wordpress-content .wp-block-button {
          margin: 2rem 0 !important;
          display: flex !important;
        }
        
        .wordpress-content .wp-block-button.aligncenter { justify-content: center !important; }
        .wordpress-content .wp-block-button.alignright { justify-content: flex-end !important; }
        .wordpress-content .wp-block-button.alignleft { justify-content: flex-start !important; }

        /* ESTILO DO BOTÃO (LINK INTERNO) */
        .wordpress-content .wp-block-button__link {
          /* Deixa o background livre para o WordPress ou Tailwind injetarem a cor */
          font-size: 13px !important;
          font-weight: bold !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          padding: 14px 32px !important;
          border-radius: 4px !important;
          text-decoration: none !important;
          display: inline-block !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05) !important;
        }

        /* Garante que o texto continue branco e legível */
        .wordpress-content .wp-block-button__link:not([class*="has-text-color"]) {
          color: #ffffff !important;
        }

        /* Se NÃO houver cor selecionada no WordPress, aplica o azul escuro padrão */
        .wordpress-content .wp-block-button:not([class*="has-background"]) .wp-block-button__link:not([style*="background-color"]) {
          background-color: #1B1F2E !important;
        }

        /* Efeito de hover suave mantendo a cor de fundo do WordPress */
        .wordpress-content .wp-block-button__link:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15) !important;
          filter: brightness(1.1) !important; /* Dá um leve brilho no hover independente da cor */
        }

        /* --- ESTILIZAÇÃO DO COMPONENTE DE FAQ DINÂMICO (DETAILS / SUMMARY) --- */
        .wordpress-content details {
          background-color: #F9FAFB !important;
          border: 1px solid #E5E7EB !important;
          border-radius: 6px !important;
          padding: 1.25rem 1.5rem !important;
          margin-bottom: 1rem !important;
          transition: all 0.2s ease !important;
        }
        .wordpress-content details[open] {
          border-color: #6EC1E4 !important;
          background-color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(110, 193, 228, 0.08) !important;
        }
        .wordpress-content summary {
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #1B1F2E !important;
          cursor: pointer !important;
          list-style: revert !important;
          outline: none !important;
        }
        .wordpress-content summary:hover {
          color: #6EC1E4 !important;
        }
        .wordpress-content details p {
          margin-top: 1rem !important;
          margin-bottom: 0 !important;
          color: #4B5563 !important;
          font-size: 15px !important;
          line-height: 1.6 !important;
        }
      `}</style>
    </main>
  );
}