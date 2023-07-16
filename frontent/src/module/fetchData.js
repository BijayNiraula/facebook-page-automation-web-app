const fetchData=async(url,body)=>{
    const finalUrl=import.meta.env.VITE_BASE_URL + url
    if(sessionStorage.getItem("auth")){
      body.auth= JSON.parse(sessionStorage.getItem("auth")).token 
    }
    try{
        const response= await fetch(finalUrl,{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                "content-type":"application/json"
            }
        })
        const data=await response.json();
    return data;

    } catch(e){
        return {error:"could not connect to the server"}
    }

   
}

export default fetchData;