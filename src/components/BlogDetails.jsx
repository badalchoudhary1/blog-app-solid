import { useParams } from "@solidjs/router";
import Layout from "./Layout";

function BlogDetails() {
    const params = useParams();
    const blogId = params.id;

    return (
        <Layout>
            <div class="container my-5">
                <h1>Blog Title {blogId}</h1>
                <p>Published on: [Date]</p>
                <img src="https://via.placeholder.com/600" alt={`Blog ${blogId}`} class="img-fluid mb-3" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
        </Layout>
    );
}

export default BlogDetails;
