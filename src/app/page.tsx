"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from 'axios'

export default function Home() {
  const [taskTitle, setTaskTitle] = useState<string>("");

const URL = "dkjs"
  const createTask = async ( taskTitle: string) => {
 try{
 const data =   await axios.post(URL, {taskTitle})

 return data
 } catch ( error){
  console.log(error)
 }
  


  }

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    try {
      setTaskTitle
    }
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
