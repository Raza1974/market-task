"use client"
import React, { useState, useEffect } from "react";

    interface CommentData {
        id: number;
        text: string;
      }
      export default function Section29() {
      const [comment, setComment] = useState("");
      const [comments, setComments] = useState<CommentData[]>([]);
    
      useEffect(() => {
        const savedComments = localStorage.getItem('comments');
        if (savedComments) {
          setComments(JSON.parse(savedComments));
        }
      }, []);
    
      const handleButton = (e: React.FormEvent) => {
        e.preventDefault();
    
    
        if (comment.trim() !== "") {
            const newComment: CommentData = {
              id: Date.now(),
              text: comment
            };
            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            localStorage.setItem('comments', JSON.stringify(updatedComments));
            setComment("");
          }
        };
    
        const renderComment = (commentData : CommentData) => (
          <div key={commentData.id} className="w-[85%] m-10 relative mt-4">
            
            <div className="relative shadow-xl text-black bg-gray-100 border border-gray-500 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
    
              <h1
                id="getComment"
                className="font-bold text-xl text-black mb-4 relative z-50"
              >
                {commentData.text}
              </h1>
            </div>
          </div>
        );
  return (
    <div id="reviews">
<h1 className="text-black h-24 text-5xl font-bold p-10 text-center ">
           Reviews
          </h1>
       <div className="give">
            <form className="h-40 flex flex-col justify-center lg:pl-5">
              <div className="w-screen">
                <input
                  className="bg-transparent border-b-2  w-[85%] h-16 text-black"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Give Your Reviews"
                />
              </div>
              <button
                onClick={handleButton}
                className="border p-2 mt-5 w-32 h-12 rounded-lg  border-gray-800 text-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="get mt-10">{comments.map(renderComment)}</div>
        </div>
     
  )
}
