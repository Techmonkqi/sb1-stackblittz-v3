import { blogPosts } from "@/lib/blog-data"
import { SocialShare } from "@/components/social-share"
import { LikeButton } from "@/components/like-button"
import { Breadcrumbs } from "@/components/breadcrumbs"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs />
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LikeButton initialLikes={post.likes} />
            <SocialShare
              url={`https://magiccitytoursguyana.com/blog/${post.slug}`}
              title={post.title}
            />
          </div>
        </div>
      </div>

      <div className="relative h-[400px] mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover rounded-lg w-full h-full"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        {post.content}
      </div>

      <div className="flex items-center justify-between border-t pt-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <a
              key={tag}
              href={`/blog/tags/${tag.toLowerCase()}`}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm hover:bg-secondary/80"
            >
              {tag}
            </a>
          ))}
        </div>
        <SocialShare
          url={`https://magiccitytoursguyana.com/blog/${post.slug}`}
          title={post.title}
        />
      </div>

      <div className="mt-8 p-6 bg-card rounded-lg shadow">
        <div className="flex items-center gap-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h3 className="font-semibold">Written by {post.author.name}</h3>
            <p className="text-muted-foreground">
              Travel writer and photographer specializing in Guyana tourism
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}