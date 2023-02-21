import {useState} from 'react'
import { useFetch } from 'usehooks-ts'

export default function useFetchProducts() {
    const url = "http://localhost:3000/products"
    const { data } = useFetch(url)
    return data?.products || []
}

//완전 간단 ;; 정말 간단히 쓸때 유용.
