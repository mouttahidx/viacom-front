"use client"
import { useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import PostCard from "./PostCard";

export default function PostsClient({
  headers,
  posts,
  translations,
}: {
  headers: any;
  posts: any;
  translations: any;
}) {
  const page = useRef(1);
  const [pageTotal, setPageTotal] = useState(headers.last_page);
  const [total, setTotal] = useState(headers.total);
  const [loading, setLoading] = useState(false);
  const [_posts, setPosts] = useState(posts);

  function handlePageClick({ selected }: { selected: number }) {
    page.current = selected + 1;
    paginate();
  }

  // fetch products methode
  const paginate = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://laravel.devvia.ca/api/posts?page=" + page.current
      );
      const data = await res.json();
      setPosts(data.data);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {!loading &&
              _posts.map((post: any) => (
                <PostCard
                  title={post.title}
                  content={post.content}
                  image={post.image}
                  key={post.id}
                  slug={post.slug}
                  categories={post.categories}
                />
              ))}
          </div>
        </div>
      </section>
      {!loading && pageTotal > 1 ? (
        <ReactPaginate
          previousLabel={"← " + translations["previous"]}
          nextLabel={translations["next"] + " →"}
          pageCount={+pageTotal}
          forcePage={page.current - 1}
          onPageChange={handlePageClick}
          containerClassName={
            "pagination w-full flex gap-x-2 justify-center mb-24"
          }
          previousLinkClassName={"pagination__link hover:text-primary"}
          nextLinkClassName={"pagination__link hover:text-primary"}
          disabledClassName={
            "pagination__link--disabled text-gray-500 cursor-default hover:text-gray-500"
          }
          activeClassName={"pagination__link--active text-primary"}
        />
      ) : (
        ""
      )}
    </div>
  );
}
