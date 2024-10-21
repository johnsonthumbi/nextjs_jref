//app--blog--page.js
//'use client'
async function getData(){
    //1 grab endpoint - API?
    const endpoint = "http://localhost:3000/api/posts"
    const res = await fetch(endpoint)//HTTP GET METHOD

    if (!res.ok){
        throw new Error("Failed to Ftech data")
    }
    //otherwise return JSON data
    return res.json()
}
//make function to fetch data and then on actual page handle the data
export default async function BlogPage(){
    const data = await getData()
    const items = data && data.items ? [...data.items] : []
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