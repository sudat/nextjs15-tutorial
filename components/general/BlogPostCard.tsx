import Link from "next/link";
import Image from "next/image";

interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl">
      <Link href={`/post/${post.id}`} className="block w-full h-full">
        <div className="relative h-48 overflow-hidden w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg mb-2font-semibold text-gray-900">{post.title}</h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{post.content}</p>

          <div className="flex items-center justify-between">
            {/* 投稿者情報 */}
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image src={post.authorImage} alt={post.authorName} fill className="object-cover" />
              </div>
              <p className="text-sm text-gray-600 font-medium">{post.authorName}</p>
            </div>

            {/* 投稿日時 */}
            <p className="text-xs text-gray-500">{post.createdAt.toLocaleDateString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
