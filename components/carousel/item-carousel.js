import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import PostItem from "../posts/post-item";
import classes from "./item-carousel.module.css";
import useWindowSize from "../../lib/helpers";
export default function MyItemCarousel(props) {
  const size = useWindowSize();
  const width = size.width;
  const numOfCards = width < 786 ? 1 : 4;
  const { posts } = props;
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 80;

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numOfCards}
        gutter={10}
        leftChevron={
          <div className={`${classes.btn} ${classes.left}`}>{"<"}</div>
        }
        rightChevron={
          <div className={`${classes.btn} ${classes.right}`}>{">"}</div>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ItemsCarousel>
    </div>
  );
}
