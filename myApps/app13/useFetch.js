import { useEffect, useState } from "react";

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'


export let useFetch = () => {
    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    let getData = async () => {
        let resp = await fetch(url)
        let data = await resp.json()


        setData(myArrays(data))
        setIsLoading(false)
    }

    let myArrays = (data) => {
        let numberItemInOnePage = 10
        let numberOfPages = Math.ceil(data.length / numberItemInOnePage)
        return Array.from({ length: numberOfPages }, (_, index) => {
            let start = index * numberItemInOnePage

            return data.slice(start, start + numberItemInOnePage)

        })
    }



    useEffect(() => {
        getData()
    }, []);

    return { data, loading }
}


