
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Table = () => {
    //show
    const [show, setShow] = useState(false)
    //post
    const [topic, setTopic] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const postData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/post/save', {
            topic,
            description,
            category,
            price
        }).then(res => console.log('posting..', res))
            .catch(err => console.log(err))
    }
    //get post
    const [post, setPost] = useState()
    

    useEffect(() => {
        axios.get('http://localhost:5000/posts/:id')
            .then(res => {
                console.log("Getting data", res.data)
                setPost(res.data)
            }).catch(err => console.log(err))
    }, [])
    //delete post
    const deletePost = (id,e) => {
        e.preventDefault();
        axios.delete(`https://localhost:5000/post/delete/:id${id}`)
            .then(res => console.log("Deleted",res))
            .catch(err => console.log(err))
        

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
                            <input type="text" class="form-control" id="topic" placeholder="Topic" value={topic} onChange={(e) =>setTopic(e.target.value)}/>

                        </div>
                        <div class="form-group">
                            <label for="description">Topic</label>
                            <input type="text" class="form-control" id="description" placeholder="Description" value={description} onChange={(e) =>setDescription(e.target.value)}/>

                        </div>
                        <div class="form-group">
                            <label for="category">Topic</label>
                            <input type="text" class="form-control" id="category" placeholder="Category" value={category} onChange={(e) =>setCategory(e.target.value)}/>

                        </div>
                        <div class="form-group">
                            <label for="price">Topic</label>
                            <input type="text" class="form-control" id="price" placeholder="Price" value={price} onChange={(e) =>setPrice(e.target.value)}/>

                        </div>

                        <button type="submit" class="btn btn-primary" onClick={postData}>Submit</button>
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
                    {post.map(post,index =>{
                    <tr>
                        <td scope="row">{index+1}</td>
								<td scope="row">{post.topic}</td>
								<td scope="row">{post.description}</td>
								<td scope="row">{post.category}</td>
								<td scope="row">{post.price}</td>
                        <td>
                            <button className="btn btn-warning"
                                onClick={editPost}
                            >
                                Edit
                                </button>
                            <button className="btn btn-danger"
                                onClick={(e) => deletePost(post.id,e)}

                            >
                                Delete
                            </button>
                            <a className="btn btn-success" href="#">
                                Order
                            </a>
                        </td>
                    </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default Table