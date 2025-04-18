"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleTaskSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h1> My todo list</h1>
        <div>
          <form onSubmit={}>
            <p>title:</p>
            <input
              value={taskTitle}
              placeholder="write your task title.."
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-white"
            ></input>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </>
  );
}
