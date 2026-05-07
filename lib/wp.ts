const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || process.env.WP_GRAPHQL_URL || '';

export interface WPPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface WPPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: string;
}

export async function wpFetch<T>(query: string, variables = {}): Promise<T> {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`WP GraphQL error: ${res.status}`);

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export async function getPosts(limit = 10): Promise<WPPost[]> {
  const query = `
    query GetPosts($first: Int!) {
      posts(first: $first) {
        nodes {
          id
          slug
          title
          content
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;
  const data = await wpFetch<{ posts: { nodes: WPPost[] } }>(query, { first: limit });
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        slug
        title
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;
  const data = await wpFetch<{ post: WPPost | null }>(query, { slug });
  return data.post || null;
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const query = `
    query GetPage($slug: ID!) {
      page(id: $slug, idType: SLUG) {
        id
        slug
        title
        content
        date
      }
    }
  `;
  const data = await wpFetch<{ page: WPPage | null }>(query, { slug });
  return data.page || null;
}

export async function getAllPostsSlugs(): Promise<string[]> {
  const query = `
    query GetAllSlugs {
      posts {
        nodes {
          slug
        }
      }
    }
  `;
  const data = await wpFetch<{ posts: { nodes: { slug: string }[] } }>(query);
  return data.posts.nodes.map((p) => p.slug);
}
