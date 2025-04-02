"use server";
import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createBlogPost(formData: FormData) {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  // EndPointがPublicなためユーザーを認証
  if (!user) redirect("/api/auth/register");

  // formDataより取得
  const title = formData.get("title");
  const content = formData.get("content");
  const imageUrl = formData.get("imageUrl");

  // Create the blog post
  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: imageUrl as string,
      authorId: user.id,
      authorName: user.given_name as string,
      authorImage: user.picture as string,
    },
  });

  redirect("/dashboard");
}
