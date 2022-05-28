import Head from "next/head";
import React from "react";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts } from "../lib/posts-util";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>BIO-BLOG</title>
        <meta
          name="description"
          content=" Egészséges élelmiszerek és alapanyagok, táplálék kiegészítők, kozmetikumok és tisztítószerek is."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />;
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: { posts: featuredPosts },
  };
}

export default HomePage;
