import {useState} from "react";

export default function Student(props){ 
  const current=new Date();
  const currentHour= current.getHours();
  let greeting="";
  if   (currentHour>=5 && currentHour <12 ){
    greeting="Good Morning";
  }
   else if   (currentHour>=13 && currentHour <18 ){
    greeting="Good Afternoon";
  }
  else{
    greeting="Good Afternoon";
  }
   return (
    <>
    <h1>{greeting}</h1>
    <h3>Current Railway Time : {currentHour}</h3>
    </>
  );
}


    