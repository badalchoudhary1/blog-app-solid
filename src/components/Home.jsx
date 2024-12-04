import Header from "./Header"
import Layout from "./Layout"
import {A} from "@solidjs/router"
function Home() {
    return (
        <Layout>
            <div class="container my-5">
                <h1>Welcome to My Blog</h1>
                <p>Discover amazing content on various topics. Check out our latest blogs below:</p>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img src="/src/assets/images/image1.jpg" class="card-img-top" alt="Blog 1" style={{ width: "100%", height: "300px" , objectFit: "cover" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blog Title 1</h5>
                                <p class="card-text">A brief description of the blog content...</p>
                                <A href="/blog/1" class="btn btn-primary">Read More</A>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                        <img src="/src/assets/images/image2.jpg" class="card-img-top" alt="Blog 2" style={{ width: "100%", height: "300px" , objectFit: "cover" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blog Title 2</h5>
                                <p class="card-text">A brief description of the blog content...</p>
                                <A href="/blog/2" class="btn btn-primary">Read More</A>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                        <img src="/src/assets/images/image3.webp" class="card-img-top" alt="Blog 3" style={{ width: "100%", height: "300px" , objectFit: "cover" }} />
                            <div class="card-body">
                                <h5 class="card-title">Blog Title 3</h5>
                                <p class="card-text">A brief description of the blog content...</p>
                                <A href="/blog/3" class="btn btn-primary">Read More</A>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
