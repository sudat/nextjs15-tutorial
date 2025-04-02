import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createBlogPost } from "@/app/actions/createBlogPostAction";
import SubmitButton from "@/components/general/SubmitButton";

export default function Create() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Write down your thoughts and create a new post!</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={createBlogPost}>
            {/* Title */}
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input required type="text" placeholder="Title" name="title" />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea required placeholder="Content" name="content" />
            </div>
            {/* Image */}
            <div className="flex flex-col gap-2">
              <Label>Image URL </Label>
              <Input required type="url" placeholder="Image URL" name="imageUrl" />
            </div>
            {/* Submit Button */}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
