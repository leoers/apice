import { MetadataRoute } from 'next'

interface WPPost {
  slug: string;
  date: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://apiceportaria.com.br'

  // 1. Buscar posts da API para incluir no sitemap dinamicamente
  let posts: MetadataRoute.Sitemap = []
  
  try {
    const res = await fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/apiceblog0.wordpress.com/posts?number=100"
    );
    const data = await res.json();
    
    posts = data.posts.map((post: WPPost) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Erro ao gerar sitemap dinâmico:", error);
  }

  // 2. Páginas Estáticas do Site
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-nos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // Seus Serviços Principais
    {
      url: `${baseUrl}/servicos/portaria-remota`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos/portaria-presencial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos/limpeza-condominios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos/zeladoria-condominios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos/auxiliar-servicos-gerais`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos/manutencao-predial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  return [...staticPages, ...posts];
}