// components/landing/blogData.ts

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageSrc: string;
  category: string;
  slug: string;
}

export const mainFeaturedPost: BlogPost = {
  id: 1,
  title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
  excerpt: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  imageSrc: "/images/blog-1.png",
  category: "NEWS",
  slug: "class-adds-30-million"
};

export const sideBlogList: BlogPost[] = [
  {
    id: 2,
    title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    excerpt: "Class Technologies Inc., the company that created Class,...",
    imageSrc: "/images/blog-2.png",
    category: "PRESS RELEASE",
    slug: "class-technologies-closes-30-million"
  },
  {
    id: 3,
    title: "Zoom's earliest investors are betting millions on a better Zoom for schools",
    excerpt: "Zoom was never created to be a consumer product. Nonetheless, the...",
    imageSrc: "/images/blog-3.png",
    category: "NEWS",
    slug: "zooms-earliest-investors-betting"
  },
  {
    id: 4,
    title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    excerpt: "This year, investors have reaped big financial returns from betting on Zoom...",
    imageSrc: "/images/blog-4.png",
    category: "NEWS",
    slug: "former-blackboard-ceo-raises-16m"
  }
];
