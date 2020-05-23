// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form" onSubmit={(e) => {
      e.preventDefault()
      props.submitComment('LocalUser', props.comment)
    }}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={(e) => {props.changeComment(e.target.value)}}
      />
    </form>
  );
};

export default CommentInput;
