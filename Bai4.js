
import React, {useState} from "react";
function Apppp({text}){
    const[likes, setLikes]=useState(0);
    const[dislikes, setDislikes]=useState(0);
    return(
        <div style={{border: "1px solid", padding: "12px",padding: "12px",width: "1000px",margin: "12px",}}>
            <p>{text}</p>
            <button onClick={() =>setLikes(likes+1)}>like{likes}</button>
            <button onClick={() =>setDislikes(dislikes+1)}>Dislike{dislikes}</button>
        </div>
    );
}
function Bai4(){
    const posts = [
        { id: 1, text: "Học ReactJS có khó không?" },
        { id: 2, text: "Props và State là gì?" },
        { id: 3, text: "Lập trình web có vui không?" },
    ];

return (
    <div>
        <h2>Like/Dislike/Post</h2>
        {posts.map((p=>(
            <Apppp key={p.id} text={p.text}></Apppp>)))}
    </div>
);}
export default Bai4;