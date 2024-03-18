
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Post = {
    title: {
        fr:string,
        en:string
    },
    id: number
}
type Posts = Array<Post>
 
export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('http:/viacommunication.test/api/categories')
  const posts: Posts = await res.json()
  // Pass data to the page via props
  return { props: { posts } }
}) satisfies GetServerSideProps<{ posts: Posts }>



export default function blogue({posts}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
    <div className='pt-44 pb-24 bg-secondary flex justify-center items-center'>
        <h1 className='uppercase text-white text-4xl mt-10'>{posts.length}</h1>
       
    </div>
    {posts.map(post=>(
            <div key={post.id} className='text-primary'>
                {post.title.fr}
            </div>
        ))}
    </div>
  )
}


