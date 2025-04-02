import prisma from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
async function getPost(id: string) {
  const post = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });
  if (!post) return notFound();
  return post;
}

type Params = Promise<{ id: string }>;

export default async function IdPage({ params }: { params: Params }) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Back to posts button */}
      <Link href="/" className={buttonVariants({ variant: "secondary" })}>
        Back to posts
      </Link>

      {/* Post title and author */}
      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={post.authorImage}
                alt={post.authorName}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="font-medium">{post.authorName}</p>
          </div>
          <p className="text-gray-500 text-sm">{post.createdAt.toLocaleDateString()}</p>
        </div>
      </div>

      {/* Post image */}
      <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
        <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Post content */}
      <Card className="border-none shadow-none">
        <CardContent className="text-gray-700 ">{post.content}</CardContent>
      </Card>
    </div>
  );
}
