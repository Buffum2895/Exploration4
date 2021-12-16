import React, {useEffect, useState, useRef} from 'react';
import * as uuid from 'uuid'
import PollList from "./PollList";

function App() {
  const [polls, setPolls] = useState([])
  const pollNameRef = useRef()
  const pollOption1Ref = useRef()
  const pollOption2Ref = useRef()

  const   LOCAL_STORAGE_KEY = 'todoApp.polls'

  useEffect(() => {
    const storedPolls = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedPolls) setPolls(storedPolls)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(polls))
  }, [polls])

  function addVoteOption1(id) {
    const newPolls = [...polls]
    const poll = newPolls.find(poll => poll.id === id )
    console.log("name: " + poll.name)
    poll.option1Votes = poll.option1Votes + 1
    setPolls(newPolls)
  }

  function addVoteOption2(id) {
    const newPolls = [...polls]
    const poll = newPolls.find(poll => poll.id === id )
    poll.option2Votes = poll.option2Votes + 1
    setPolls(newPolls)
  }

  function deletePoll(id) {
    const newPolls = polls.filter(poll => poll.id !== id)
    setPolls(newPolls)
  }

  function handleAddPoll(e){
    const name = pollNameRef.current.value
    const option1 = pollOption1Ref.current.value
    const option2 = pollOption2Ref.current.value

    const defaultvotes = 0

    if(name === '' || option1 === '' || option2 === '') return

    setPolls(prevPolls => {
      return [...prevPolls, {id:uuid.v4(), name: name, option1: option1, option2: option2, option1Votes: 0, option2Votes: 0}]
    })
    pollNameRef.current.value = null
    pollOption1Ref.current.value = null
    pollOption2Ref.current.value = null
  }

  return (
    <>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo}/>  */}
      <label>Poll:</label>
      <input ref={pollNameRef} type="text" />
      <label>Poll Option 1: </label>
      <input ref={pollOption1Ref} type="text" />
      <label>Poll Option 2: </label>
      <input ref={pollOption2Ref} type="text" />
      <button onClick={handleAddPoll}>Create Poll</button>

      <PollList polls={polls} 
        addVoteOption1={addVoteOption1} 
        addVoteOption2={addVoteOption2}
        deletePoll={deletePoll} />
    </>
    
  )
}

export default App;
