import React , {useState} from "react";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import POSTS from "./../../digi.json";
const Blog =()=>{
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);

    const handelDataLoading = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setPosts(POSTS);
            setLoading(false);
        },1000)
    };

    return(
      <Layout>
          <h1>this is blog page</h1>
          <Button handleclick={handelDataLoading}>{loading ? 'loading': 'push to Loading posts'}</Button>
          {posts.length === 0 &&  <div>Not Posts Found</div>}
            <div className="container">
                  {posts.length >0 &&(
                      posts.map((post)=>(
                             <div className="card">
                                 <img src={post.image_cover}/>
                                 <h3>{post.title}</h3>
                                 <Button>Read More</Button>
                             </div>
                      ))
                  )}
            </div>
      </Layout>
    );
}
export default  Blog
//stateless
