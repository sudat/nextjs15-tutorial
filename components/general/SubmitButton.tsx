"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-fit" disabled={pending}>
      {pending ? "Submitting..." : "Create Post"}
    </Button>
  );
}
