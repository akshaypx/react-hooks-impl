import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UseEffectHook() {
  const [post, setPost] = useState("");

  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [post]);

  return (
    <>
      <div className="container text-center my-5">
        <h1 className="mb-5">useEffect Hook</h1>
        <h2 className="mb-5">Fetch api via axios returns sample data: </h2>
        <div className="container border border-primary rounded">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
