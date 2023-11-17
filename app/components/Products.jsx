"use client"
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'



const Products = () => {
    const [originalData, setoriginalData] = useState([])
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => {
                setoriginalData(res)
            })

    }, [])



    const [currentPage, setcurrentPage] = useState(1)

    const productsPerPage = 4

    const firstIndex = currentPage * productsPerPage - productsPerPage
    const lastIndex = currentPage * productsPerPage

    const [pagesNumber, setpagesNumber] = useState(Math.ceil(originalData.length / productsPerPage))





    //start the pagination



    // start filtereing
    const [filter, setfilter] = useState("all")
    const [emptyArray, setemptyArray] = useState([])
    useEffect(() => {
        const newarray = []

        for (let i = 1; i <= pagesNumber; i++) {
            newarray.push(i)
            setemptyArray(newarray)

        }
    }, [pagesNumber, filter, originalData])

    useEffect(() => {
        let tmpData = originalData
        if (filter != "all") {
            tmpData = originalData.filter((product => product.category == filter))
        }
        setdata(tmpData.slice(firstIndex, lastIndex))
        setpagesNumber(Math.ceil(tmpData.length / productsPerPage))

    }, [filter, originalData, currentPage])

    const changeFilter = (filtername) => {
        setcurrentPage(1)
        setfilter(filtername)
    }

    return (
        <>
            <p className="title text-center font-bold text-3xl">Our Products</p>
            <div className="container my-5 mb-36">
                <div className="filtering flex-col justify-center gap-3 md:flex-row flex md:justify-between text-center" >
                    <p onClick={() => { changeFilter("all") }} className={`w-[90%] mx-auto md:w-[15%] bg-maingreen text-white py-2 rounded-2xl flex items-center justify-center cursor-pointer ${filter == "all" ? "opacity-50" : ""}`}>All</p>
                    <p onClick={() => { changeFilter("electronics") }} className={`w-[90%] mx-auto md:w-[15%] bg-maingreen text-white py-2 rounded-2xl flex items-center justify-center cursor-pointer ${filter == "electronics" ? "opacity-50" : ""}`}>Electronics</p>
                    <p onClick={() => { changeFilter("jewelery") }} className={`w-[90%] mx-auto md:w-[15%] bg-maingreen text-white py-2 rounded-2xl flex items-center justify-center cursor-pointer ${filter == "jewelery" ? "opacity-50" : ""}`}>Jewelry</p>
                    <p onClick={() => { changeFilter("men's clothing") }} className={`w-[90%] mx-auto md:w-[15%] bg-maingreen text-white py-2 rounded-2xl flex items-center justify-center cursor-pointer ${filter == "men's clothing" ? "opacity-50" : ""}`}>Men's clothing</p>
                    <p onClick={() => { changeFilter("women's clothing") }} className={`w-[90%] mx-auto md:w-[15%] bg-maingreen text-white py-2 rounded-2xl flex items-center justify-center cursor-pointer ${filter == "women's clothing" ? "opacity-50" : ""}`}>Women's clothing</p>
                </div>
                <div className='flex flex-wrap justify-center gap-6 items-center my-7'>
                    {data.map((product) =>
                        <div className='flex flex-wrap items-center flex-col bg-white rounded-xl w-56 h-52 justify-center'>
                            <img src={`${product.image}`} alt={`${product.id}`} className='w-20 h-20' />
                            <div className='flex pb-4 pt-2 border-b-black border-b justify-between w-full px-3 my-2  items-center'>
                                <p className='text-sm'>{product.title.slice(0, 22)}</p>
                                <div className='flex items-center gap-1'>
                                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                                    <p>{product.rating.rate}</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center w-full px-3'>
                                <p className='font-bold text-lg'><span>$</span>{product.price}</p>
                                <FontAwesomeIcon className='cursor-pointer' icon={faCartPlus} />
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex justify-center '>

                    <button hidden={emptyArray.length <= 0} disabled={currentPage == 1} onClick={() => { setcurrentPage(e => e - 1) }} className='w-16 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg bg-maingreen text-white'>Prev</button>
                    {emptyArray.length > 0 ? emptyArray.map((page) => {
                        return (<button onClick={() => { setcurrentPage(+page) }} className={`w-8 ${+page == currentPage ? "opacity-50" : ""} h-8 border-r-white border-r border-l-white border-l bg-maingreen text-white`}>{page}</button>)
                    }) : <div className='w-20 border-transparent border-t-8 border-8 animate-spin rounded-full border-t-maingreen h-20'></div>}
                    <button hidden={emptyArray.length <= 0} disabled={currentPage == pagesNumber} onClick={() => { setcurrentPage(e => e + 1) }} className='w-16 disabled:cursor-not-allowed disabled:opacity-50 rounded-r-lg bg-maingreen text-white'>Next</button>
                </div>
            </div>
        </>
    )
}

export default Products