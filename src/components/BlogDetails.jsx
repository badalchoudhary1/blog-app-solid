import { useParams } from "@solidjs/router";
import Layout from "./Layout";
import { createSignal, onMount } from "solid-js";

function BlogDetails() {
    const params = useParams();
    const blogId = params.id;
    const [blog, setblog] = createSignal({})

    onMount(async () => {

        let x = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)).json()
        setblog(x)
        
    })

    return (
        <Layout>
            <div class="container my-5">
                <h1> {blogId}</h1>
                <p>title: {blog().title}</p>
                <img src="https://via.placeholder.com/600" height={100} width={100} alt={`Blog ${blogId}`} class="img-fluid mb-3" />
                <p> {blog().body}</p>
            </div>
        </Layout>
    );
}

export default BlogDetails;
