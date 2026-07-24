"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PostEditor from "./PostEditor";
import { PageLoader } from "../_components/Loading";

export default function NewPostPage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const auth = await fetch("/api/admin/auth").then((r) => r.json());
      if (!auth.authenticated) {
        router.replace("/admin");
        return;
      }
      const data = await fetch("/api/admin/posts").then((r) => r.json());
      setCategories(data.categories || []);
      setReady(true);
    })();
  }, [router]);

  if (!ready) return <PageLoader label="Préparation de l'éditeur..." />;
  return <PostEditor categories={categories} />;
}
