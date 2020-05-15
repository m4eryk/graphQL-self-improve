import { gql } from 'apollo-boost';

export const MOVIES = gql`
query {
  movies {
    id,
    title,
    genre,
    img,
    director {
      id,
      name,
    }
  }
}`;
