import React from "react"
import { useParams } from "react-router-dom"

const CustomerDetail = () => {
  const data = useParams()
  console.log(data)
  return <div>CustomerView {data.id}</div>
}

export default CustomerDetail
