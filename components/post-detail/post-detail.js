import React, { Fragment } from "react";
import Image from "next/image";
import classes from "./post-detail.module.css";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

function PostDeatail(props) {
  const { title, slug, image, content,excerpt } = props.posts;
  const imagePath = `/images/posts/${slug}/${image}`;
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
  };
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <main className={classes.content}>
        <header className={classes.header}>
          <h1>{title}</h1>
          <Image src={imagePath} alt={title} width={200} height={150} />
        </header>
        <section>
          <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
        </section>
      </main>
    </Fragment>
  );
}

export default PostDeatail;
