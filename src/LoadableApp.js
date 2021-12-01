import React, { Component } from "react"
import Loadable from "react-loadable"

const Loadapp = Loadable({
  loader: () => import("./App"),
  loading() {
    return <div>Loading...</div>
  },
  timeout: 10000 // 10 secs
})

export default function LoadableApp() {
  return <Loadapp />
}
