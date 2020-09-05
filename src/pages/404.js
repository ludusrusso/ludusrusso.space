import React from "react"
import Layout from "../components/layout"

const NotFoundPage = props => {
  return (
    <Layout>
      <div className="max-w-xl mx-auto text-gray-900">
        <h1 className="text-4xl text-center mt-10 font-bold">
          Ops!! Not found
        </h1>

        <img src="/svg/404.svg" className="w-full my-10" alt="ludusrusso" />
      </div>
    </Layout>
  )
}

export default NotFoundPage
