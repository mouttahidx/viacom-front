import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";
import PostCard from "../components/blogComponents/PostCard";
import ReactPaginate from "react-paginate";
import { useRef, useState } from "react";

type Post = {
  title: {
    fr: string;
    en: string;
  };
  id: number;
  content: {
    fr: string;
    en: string;
  },
  slug:{ fr: string; en: string },
  image: string;
};
type Posts = Array<Post>;
type Headers = {
  total: number;
  last_page: number;
};

export default function Blogue({
  posts,
  headers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const page = useRef(1);
  const [perPage, setPerPage] = useState(30);
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
      const res =
        (await fetch(
          "http://viacommunication.test/api/posts?page=" + page.current
        )) || {};
      const data = await res.json();
      setPosts(data.data);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <div>
      <div className="pt-24 pb-24 lg:pt-44 bg-pages-hero-bg bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="uppercase text-white text-4xl mt-10">Blogue</h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {!loading &&
              _posts.map((post) => (
                <PostCard
                  title={post.title}
                  content={post.content}
                  image={post.image}
                  key={post.id}
                  slug={post.slug}
                />
              ))}
          </div>
        </div>

        {!loading && pageTotal > 0 ? (
          <ReactPaginate
            previousLabel={"← Précedent"}
            nextLabel={"Suivant →"}
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
      </section>
    </div>
  );
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  let posts: Posts = [];
  let headers = { total: 0, last_page: 0 };
  try {
    const res = await fetch("http://viacommunication.test/api/posts");
    const data = await res.json();
    posts = data.data;
    headers.total = data.total;
    headers.last_page = data.last_page;
  } catch (error) {}

  // Pass data to the page via props
  return { props: { posts, headers } };
}) satisfies GetServerSideProps<{ posts: Posts; headers: Headers }>;
