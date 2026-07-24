"use client";

import { Editor } from "@tinymce/tinymce-react";
import { useMemo, useRef } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
  height?: number;
  disabled?: boolean;
};

export default function RichTextEditor({
  value,
  onChange,
  height = 520,
  disabled = false,
}: Props) {
  const editorRef = useRef<any>(null);
  const initial = useMemo(() => value || "", []);

  return (
    <div className="rich-text-editor overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <Editor
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        licenseKey="gpl"
        disabled={disabled}
        onInit={(_evt, editor) => {
          editorRef.current = editor;
        }}
        initialValue={initial}
        onEditorChange={(html) => onChange(html)}
        init={{
          height,
          menubar: "file edit view insert format tools table",
          branding: false,
          promotion: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table | removeformat code fullscreen",
          skin_url: "/tinymce/skins/ui/oxide",
          content_css: "/tinymce/skins/content/default/content.min.css",
          // Preserve existing HTML from imported posts
          verify_html: false,
          cleanup: false,
          convert_urls: false,
          relative_urls: false,
          remove_script_host: false,
          entity_encoding: "raw",
          valid_elements: "*[*]",
          extended_valid_elements: "*[*]",
          valid_children: "+body[style],+div[*],+span[*],+p[*],+td[*],+th[*],+table[*]",
          content_style: `
            body {
              font-family: Montserrat, Arial, sans-serif;
              font-size: 15px;
              line-height: 1.65;
              color: #1e293b;
              padding: 12px 16px;
            }
            img { max-width: 100%; height: auto; }
            table { border-collapse: collapse; width: 100%; }
            td, th { border: 1px solid #cbd5e1; padding: 6px; }
            a { color: #F05423; }
            h1,h2,h3,h4 { color: #0C2249; }
          `,
          images_upload_handler: async (blobInfo) => {
            const body = new FormData();
            body.append("file", blobInfo.blob(), blobInfo.filename());
            const res = await fetch("/api/admin/upload", {
              method: "POST",
              body,
            });
            if (!res.ok) throw new Error("Upload failed");
            const data = await res.json();
            return data.path as string;
          },
        }}
      />
    </div>
  );
}
