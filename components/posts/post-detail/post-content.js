import PostHeader from "./post-header";

const DUMMY_POSTS = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2023-11-14',
    content: '# This is a first post'
}
function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

    return (
        <article>
            <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
            CONTENT
        </article>
    )
}
export default PostContent;