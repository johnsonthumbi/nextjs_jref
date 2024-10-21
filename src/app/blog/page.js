//app--blog--page.js
//'use client'
import getDomain from "../lib/getDomain"
async function getData(){
    const domain = getDomain()
    //1 grab endpoint - API?
    const endpoint = `${domain}/api/posts` //third party API requests??
    const res = await fetch(endpoint)//HTTP GET METHOD

    if (!res.ok){
        throw new Error("Failed to Fetch data")
    }
    //making sure content type is application/json
    if (res.headers.get("content-type") !== "application/json"){
        return{items:[]}
    }
    //otherwise return JSON data
    return res.json()
}
//make function to fetch data and then on actual page handle the data
export default async function BlogPage(){
    const data = await getData()
    const items = data && data.items ? [...data.items] : []
    console.log(items)
    console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
    return <main>
        <h1>Hello World</h1>
        {/*{data && JSON.stringify(data)}*/}
       {/*} {items && JSON.stringify(items)}*/}
       <p>Posts:</p>
       {items && items.map((item,idx)=>{
        return<li key={`post-${idx}`}>{item.title}</li>
       })}
    </main>
}