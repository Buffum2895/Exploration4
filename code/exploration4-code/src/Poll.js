import React from 'react'

export default function Poll({ poll, addVoteOption1, addVoteOption2, deletePoll }) {
    function handleOption1Vote() {
        addVoteOption1(poll.id)
    }

    function handleOption2Vote() {
        addVoteOption2(poll.id)
    }

    function handleDeletePoll() {
        deletePoll(poll.id)
    }

    const divStyle = {
        border: 'solid',
      };

    return (
        <div style={divStyle}>
            <h1>Poll: {poll.name}</h1>
            <div>
                <h2>Option1: {poll.option1} Votes: {poll.option1Votes}</h2>
                <button onClick={handleOption1Vote}>Vote Option 1</button>
            </div>
            <div>
                <h2>Option2: {poll.option2} Votes: {poll.option2Votes}</h2>
                <button onClick={handleOption2Vote}>Vote Option 2</button>
            </div>
            <button onClick={handleDeletePoll}>Delete Poll</button>
        </div>
    )
}
