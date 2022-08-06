const PostCardContent = () => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return (
          <Link href={`/hashtag/${v.slice(1)}`} key={i}>
            <a>{i}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);
export default PostCardContent;
