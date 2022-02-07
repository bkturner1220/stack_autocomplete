import { gql } from '@apollo/client';

export const AUTHOR_DETAILS = gql`
  fragment AuthorDetails on Author {
    id
    username
  }
`;

export const COMMENT_DETAILS = gql`
  fragment CommentDetails on Comment {
    id
    commentAuthor {
      ...AuthorDetails
    }
    commentBody
    createdAt
    updatedAt
  }
  ${AUTHOR_DETAILS}
`;

export const ANSWER_DETAILS = gql`
  fragment AnswerDetails on Answer {
    id
    answerAuthor {
      ...AuthorDetails
    }
    answerBody
    comments {
      ...CommentDetails
    }
    points
    upvotedBy
    downvotedBy
    createdAt
    updatedAt
  }
  ${COMMENT_DETAILS}
  ${AUTHOR_DETAILS}
`;

export const QUESTION_DETAILS = gql`
  fragment QuestionDetails on Question {
    id
    questionAuthor {
      ...AuthorDetails
    }
    title
    questionBody
    tags
    points
    views
    acceptedAnswer
    comments {
      ...CommentDetails
    }
    answers {
      ...AnswerDetails
    }
    upvotedBy
    downvotedBy
    createdAt
    updatedAt
  }
  ${COMMENT_DETAILS}
  ${AUTHOR_DETAILS}
  ${ANSWER_DETAILS}
`;

export const LOGGED_USER_DETAILS = gql`
  fragment LoggedUserDetails on LoggedUser {
    id
    username
    role
    token
  }
`;
