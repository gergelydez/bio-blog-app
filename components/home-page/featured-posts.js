import MyItemCarousel from "../carousel/item-carousel";
import PostGrid from "../posts/post-grid";
import classes from "./featured-posts.module.css";
function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h4 className="background_colored">Legolvasottabb cikkek</h4>
      <MyItemCarousel posts={props.posts} />
    </section>
  );
}
export default FeaturedPosts;
