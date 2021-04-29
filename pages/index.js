import Head from "next/head";
import ArtilceList from "../Components/ArtilceList";
import {server} from '../config';

export default function Home({ articles }) {
  return (
    <div>
      <h1>Welcome to Next</h1>
      <ArtilceList articles={articles}></ArtilceList>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
