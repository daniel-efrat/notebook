import React from "react"
import NextLink from "next/link"
import Auth from "./Auth"


export default function Navbar() {
  return (
    <div className="w-full header">
      <div className="flex items-center justify-between py-8">
        <div className="flex-1">
          <NextLink href="/">
            <h1 className="text-3xl font-bold cursor-pointer" >
              Notebook
            </h1>
          </NextLink>
        </div>
        
        <div className="flex items-center justify-center flex-1">
          <NextLink href="/page2" textDecoration={"none"}>
            Page 2
          </NextLink>
        </div>
        
        <div className="flex justify-end flex-1">
            <Auth/>
        </div>
      </div>
    </div>
  )
}
