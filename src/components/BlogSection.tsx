"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&q=80",
    category: "Medical",
    date: "Jan 2, 2023",
    title: "10 Foods To Avoid For Your Heart Health",
    description:
      "It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's certainly true... Read more.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&q=80",
    category: "Mental Health",
    date: "Jan 3, 2023",
    title: "How To Be Relax & Calm In Hard Situations",
    description:
      "It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's certainly true... Read more.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&q=80",
    category: "Dental Health",
    date: "Jan 4, 2023",
    title: "Best Ways To Make Your Teeth Strong",
    description:
      "It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's certainly true... Read more.",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          Our Recent Posts
        </h2>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Blog Image */}
              <div className="relative w-full h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="mb-3">
                  <span className="inline-block bg-teal-700 text-white text-xs font-semibold px-3 py-1 rounded">
                    {post.category}
                  </span>
                </div>

                {/* Date */}
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-teal-700 transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.description.split(" Read more")[0]}{" "}
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-teal-700 hover:text-teal-800 font-medium"
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors uppercase tracking-wide"
          >
            READ MORE BLOGS
          </Link>
        </div>
      </div>
    </section>
  );
}

