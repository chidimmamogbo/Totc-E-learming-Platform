// components/landing/BlogSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mainFeaturedPost, sideBlogList } from '@/component/blogs/blogData';

const LandingBlog = (): React.JSX.Element => {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 md:px-16 lg:px-34 w-full overflow-hidden">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16 flex flex-col gap-4">
        <h2 className="text-[#2F327D] font-bold text-3xl sm:text-4xl tracking-tight">
          Latest News and Resources
        </h2>
        <p className="text-[#696F8C] text-sm sm:text-base font-light">
          See the developments that have occurred to TOTC in the world
        </p>
      </div>

      {/* Main Content Split Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-16 items-start">
        
        {/* ================= LEFT SIDE: MAIN FEATURED POST ================= */}
        <div className="flex flex-col gap-5 group w-full">
          {/* Featured Image Wrapper with Fluid Aspect Ratio */}
          <div className="relative w-full aspect-[540/340] overflow-hidden rounded-[20px] shadow-sm">
            <Image
              src={mainFeaturedPost.imageSrc}
              alt={mainFeaturedPost.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 555px"
              className="object-cover transform transition-transform duration-500 group-hover:scale-102"
            />
            {/* Category Tag pill overlaying lower left-hand margin */}
            <span className="absolute bottom-5 left-5 bg-[#00CBB8] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
              {mainFeaturedPost.category}
            </span>
          </div>

          {/* Heading with Dynamic Next.js routing Link */}
          <Link href={`/blog/${mainFeaturedPost.slug}`}>
            <h3 className="text-[#2F327D] font-medium text-xl sm:text-[22px] leading-snug hover:text-[#00CBB8] transition-colors cursor-pointer">
              {mainFeaturedPost.title}
            </h3>
          </Link>

          {/* Description Excerpt paragraph */}
          <p className="text-[#696F8C] text-sm leading-relaxed font-light">
            {mainFeaturedPost.excerpt}
          </p>

          {/* Read More Action Trigger Link */}
          <Link 
            href={`/blog/${mainFeaturedPost.slug}`} 
            className="text-[#696F8C] text-sm font-medium underline underline-offset-4 hover:text-[#2F327D] transition-colors self-start"
          >
            Read more
          </Link>
        </div>

        {/* ================= RIGHT SIDE: DYNAMIC LOOP MAPPED BLOGS ================= */}
        <div className="flex flex-col gap-8 w-full">
          {sideBlogList.map((post) => (
            <div 
              key={post.id} 
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-5 items-center group w-full"
            >
              {/* Row Left: Small Image Wrapper Context */}
              <div className="relative w-full sm:w-[160px] aspect-[160/120] sm:h-[120px] overflow-hidden rounded-[14px] shadow-sm shrink-0">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill
                  sizes="160px"
                  className="object-cover transform transition-transform duration-500 group-hover:scale-103"
                />
                {/* Embedded tiny category tag badge inside image bounds */}
                <span className="absolute bottom-2 right-2 bg-[#23BDEE] text-white text-[8px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                  NEWS
                </span>
              </div>

              {/* Row Right: Context Texts block alignment info */}
              <div className="flex flex-col gap-2.5">
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-[#2F327D] font-medium text-sm sm:text-base leading-snug hover:text-[#00CBB8] transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
                
                <p className="text-[#696F8C] text-xs sm:text-sm leading-relaxed font-light line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LandingBlog;
