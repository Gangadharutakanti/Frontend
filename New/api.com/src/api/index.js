import React from "react";

const GetUser=async()=>{
  let response=await fetch("https://randomuser.me/api/",{method:"GET",})
  return response.json();
}

export default GetUser;