
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Table = () => {
    //get post
    const [post, setPost] = useState()
    const [show, setShow] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5000/posts/:id')
            .then(res => {
                setPost(res.data)
            })
    }, [])
    //delete post
    const deletePost = () => {
        axios.delete('https://localhost:5000/post/delete/:id')
            .then(res => {
                const post = res.data;
                this.setState({ post });
            })

    }
    //edit post
    const editPost = () => {
        axios.put('https://localhost:5000/post/update/:id')
            .then(res => {
                const post = res.data;
                this.setState({ post });
            })
    }
    return (
        <div>
            {
                show ?
                    <form>
                        <div class="form-group">
                            <label for="topic">Topic</label>
                            <input type="text" class="form-control" id="topic" placeholder="Topic"/>
                                
                        </div>
                        <div class="form-group">
                            <label for="description">Topic</label>
                            <input type="text" class="form-control" id="description" placeholder="Description"/>
                                
                        </div>
                        <div class="form-group">
                            <label for="category">Topic</label>
                            <input type="text" class="form-control" id="category"  placeholder="Category"/>
                                
                        </div>
                        
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    : null
            }
            <button class="btn btn-primary"
                onClick={() => setShow(true)}
            >
                Add new
            </button>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Item Topic</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {post.map(posts,index =>{ */}
                    <tr>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        {/* <td scope="row">{index+1}</td>
								<td scope="row">{post.topic}</td>
								<td scope="row">{post.description}</td>
								<td scope="row">{post.category}</td>
								<td scope="row">{post.price}</td> */}
                        <td>
                            <button className="btn btn-warning"
                                onClick={editPost}
                            >
                                Edit
                            </button>&nbsp
                            <button className="btn btn-danger"
                                onClick={deletePost}
                                
                            >
                                Delete
                            </button>&nbsp
                            <a className="btn btn-success" href="#">
                                Order
                            </a>&nbsp
                        </td>
                    </tr>
                    {/* })} */}
                </tbody>

            </table>
        </div>
    )
}

export default Table