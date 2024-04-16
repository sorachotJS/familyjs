
'use client'
import allData from "../../utils/blog.json"
import React, { useEffect, useState } from "react"
import Pagination from "./Pagination"
import PostCard1 from "./PostCard1"
import PostCard2 from "./PostCard2"
import PostCard3 from "./PostCard3"
import PostCard4 from "./PostCard4"
import PostCard5 from "./PostCard5"
import PostCard6 from "./PostCard6"
import PostCard7 from "./PostCard7"
import PostCard8 from "./PostCard8"
import PostCard9 from "./PostCard9"
import PostCard10 from "./PostCard10"
import PostCard11 from "./PostCard11"

export default  function BlogPost({ style, showItem, showPagination, startFrom, toEnd }) {
    // const data = allData.slice(startFrom, toEnd)
    let dataRes
    const [dataJson, setDataJson] = useState([])

    // let [currentPage, setCurrentPage] = useState(1)
    // let showLimit = showItem,
    //     paginationItem = 4

    
    useEffect(() => {
        const fetchData = async () => {
            dataRes = await getBlog();
            console.log(dataRes.data.Data)
            setDataJson(dataRes.data.Data)
        };
        fetchData();
    }, [])

    const getBlog = async () => {
        const response = await fetch('http://localhost:5000/ApiNode/blog');
        const blogData = await response.json();
        return blogData;
    }

    // console.log(dataRes)
    // let [pagination, setPagination] = useState([])
    // let [limit, setLimit] = useState(showLimit)
    // let [pages, setPages] = useState(Math.ceil(dataRes.length / limit))

    // useEffect(() => {
    //     cratePagination()
    // }, [limit, pages, dataRes.length])

    

    // const cratePagination = () => {
    //     // set pagination
    //     let arr = new Array(Math.ceil(dataRes.length / limit))
    //         .fill()
    //         .map((_, idx) => idx + 1)

    //     setPagination(arr)
    //     setPages(Math.ceil(data.length / limit))
    // }

    // const startIndex = currentPage * limit - limit
    // const endIndex = startIndex + limit
    // const getPaginatedProducts = dataRes.slice(startIndex, endIndex)


    // let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem
    // let end = start + paginationItem
    // const getPaginationGroup = pagination.slice(start, end)

    // const next = () => {
    //     setCurrentPage((page) => page + 1)
    // }

    // const prev = () => {
    //     setCurrentPage((page) => page - 1)
    // }

    // const handleActive = (item) => {
    //     setCurrentPage(item)
    // }
    return (
        <>
            {/* {dataJson.length === 0 && (
                <h3>No Products Found </h3>
            )} */}

            {dataJson.map(post => (
                <React.Fragment key={post.id}>
                    <PostCard2 post={post} />
                    
                </React.Fragment>
            ))}
        <br />
            {showPagination &&
                <Pagination
                    getPaginationGroup={
                        getPaginationGroup
                    }
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            }
        </>
    )
}