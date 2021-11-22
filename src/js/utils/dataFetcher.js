const dataFetcher =    async function(url=undefined) {
   
    const response = await fetch(url);
    const payload = await response.json()
   
    return payload
}

export {dataFetcher}