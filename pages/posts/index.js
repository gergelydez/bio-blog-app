import React, { Fragment } from "react";
import PostGrid from "../../components/posts/post-grid";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Összes Cikk</title>
        <meta
          name="description"
          content=" Egészséges élelmiszerek és alapanyagok, táplálék kiegészítők, kozmetikumok és tisztítószerek is."
        />
      </Head>
      <PostGrid posts={props.posts} />;
    </Fragment>
  );
}
export function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts } };
}
export default AllPostsPage;
