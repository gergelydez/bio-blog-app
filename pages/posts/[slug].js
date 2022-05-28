import React, { Fragment } from "react";
import Head from "next/head";
import PostDeatail from "../../components/post-detail/post-detail";
import { getPostData, getPostFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  return (
  

      <PostDeatail posts={props.posts} />
   
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return { props: { posts: postData }, revalidate: 600 };
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((FileName) => FileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
