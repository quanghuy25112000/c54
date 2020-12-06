export function getData(doc){
    const data=doc.data()
    data.id=doc.id
    return data
}
export function getDatas(data){
    // const docs =data.docs
    // const listRes=[]
    
    // for(let i=0;i<=1;i++){
    //     listRes.push(getData(docs[i]))
    // }
    // return listRes
    return data.docs.map(getData)
}