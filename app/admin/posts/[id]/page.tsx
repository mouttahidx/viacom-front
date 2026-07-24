"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PostEditor from "../PostEditor";
import { PageLoader } from "../../_components/Loading";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [post, setPost] = useState<any>(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const auth = await fetch("/api/admin/auth").then((r) => r.json());
      if (!auth.authenticated) {
        router.replace("/admin");
        return;
      }
      const list = await fetch("/api/admin/posts").then((r) => r.json());
      setCategories(list.categories || []);
      const item = await fetch(`/api/admin/posts/${id}`).then((r) => r.json());
      if (item.message) {
        router.replace("/admin/posts");
        return;
      }
      setPost(item);
    })();
  }, [id, router]);

  if (!post) return <PageLoader label="Chargement de l'article..." />;
  return <PostEditor initial={post} categories={categories} />;
}
