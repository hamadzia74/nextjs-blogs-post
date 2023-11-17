import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
    return (
        <AllPosts posts={props.posts} />
    )
}

export function getStaticProps() {
    const featuredPosts = getAllPosts();
    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage;