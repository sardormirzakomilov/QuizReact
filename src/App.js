import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth'
import QuizList from './containers/QuizList/QuizList'
import QuizCreater from './containers/QuizCreater/QuizCreater'
import { Routes, Route } from 'react-router-dom'

class App extends Component {

  state = {
    users: null
  }

  componentDidMount() {
    const comf = this
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/users', {
        headers: { "Content-Type": 'text/html' },
      })
        .then(res => {
          return res.json()
        }).then(users => {
          // console.log(users);

          comf.setState({
            users  // array
          })
        })
    }, 1000)

    



  }


  render() {
    return (
      <Layout>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/quizcreator' element={<QuizCreater />} />
          <Route path='/quiz/:id' element={<Quiz />} />
          <Route path='/' element={<QuizList users={this.state.users} />} />
        </Routes>
      </Layout>
    )
  }
}

export default App
