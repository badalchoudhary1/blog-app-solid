import { createEffect, createSignal, onMount } from "solid-js";
import Header from "./Header"
import Layout from "./Layout"
import {A, json} from "@solidjs/router"

function Home() {

    const [blog, setblogs] = createSignal([])

    // createEffect(async () => {
    //    let x =  await  (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
    //    setblogs(x)
    // });

    onMount(async () => {
        let x =  await  (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
        setblogs(x)
    })


    return (
        <Layout>
            <div class="container my-5">
                <h1>Welcome to My Blog</h1>
                <p>Discover amazing content on various topics. Check out our latest blogs below:</p>
                <div class="row">
                    {blog().map((item) => {
                        return (
                            <div class="col-md-4">
                            <div class="card">
                                <img src="/src/assets/images/image1.jpg" class="card-img-top" alt="Blog 1" style={{ width: "100%", height: "300px" , objectFit: "cover" }} />
                                <div class="card-body">
                                    <h5 class="card-title">{item.title}</h5>
                                    <p class="card-text">{item.body}</p>
                                    <A href={`/blog/${item.id}`} class="btn btn-primary">Read More</A>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                   
                </div>
            </div>
        </Layout>
    );
}

export default Home;
