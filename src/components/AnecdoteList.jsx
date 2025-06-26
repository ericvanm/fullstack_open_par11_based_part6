import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleClick(anecdote.id, anecdote.content)}>
          vote
        </button>
      </div>
    </div>
  );
};

// PropType to ensiure correct type handling
Anecdote.propTypes = {
  anecdote: Object,
  handleClick: Function,
};

//e

const AnecdoteList = () => {
  const dispatch = useDispatch();

  // implement filtering
  const anecdotes = useSelector((state) => {
    // if there is no value in filter => just let all the anecdotes
    if (state.filter.filter === "") {
      return state.anecdotes;
    }
    return state.anecdotes.filter((anecdote) =>
      anecdote.content.includes(state.filter.filter)
    );
  });

  const voteAnecdoteClick = (id, content) => {
    dispatch(voteAnecdote(id));
    dispatch(setNotification(`you voted '${content}'`, 10)); // use the new notification
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={voteAnecdoteClick}
        />
      ))}
    </div>
  );
};

export default AnecdoteList;
