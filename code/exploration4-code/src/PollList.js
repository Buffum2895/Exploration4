import React from 'react'
import Poll from './Poll'

export default function PollList({ polls, addVoteOption1, addVoteOption2, deletePoll }) {
    return (
        polls.map(poll => {
            return <Poll key={poll.id} 
                poll={poll} 
                addVoteOption1={addVoteOption1} 
                addVoteOption2={addVoteOption2}
                deletePoll={deletePoll} />
        })
    )
}
