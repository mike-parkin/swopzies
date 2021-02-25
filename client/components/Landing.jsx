import React from "react"
import { connect } from "react-redux"

function Landing() {
  return (
    <>
    <div className="container">
    <img src="https://images.unsplash.com/flagged/photo-1575277942994-440d085e346b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="picture of woman styling another woman's hair"/>
      <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="close up photo of bowl of yummy cherry tomatoes being exchanged between two pairs of hands"/>
      <img src="https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="close up photo of man wearing hat that says 'Love your neighbour'"/>
    </div>
    <div className="container">
      <h1 className="title">Welcome!</h1>
      <p>Need something fixed? Have the skills to fix something? Want to help someone in your community?</p>
      <br></br>
      <p>Jack Of All Trades is a free to use website for people looking to trade goods and services without the price tag!</p>
      <br></br>
      <h2 className="subtitle">Register. Post. Trade.</h2>
      <p>It's that simple!</p>
    </div>
    </>
    )
}

export default connect()(Landing)
