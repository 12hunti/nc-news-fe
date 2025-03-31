import { useState } from "react"
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1743436231672.json"
import { getArticles } from "../api";

function AllArticles(){

    const [isLoading, setIsLoading] = useState(true)

getArticles().then(({articles})=>{
    console.log(articles, "response in articles")
})

//map or forEach through the articles array and display the articles - the title, author, topic and votes

    if (isLoading){
        return <Lottie animationData={animationData} loop={true} />
    }
    return (<section>
        <p>articles</p>
    </section>)
}

export default AllArticles