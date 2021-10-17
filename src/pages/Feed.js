import Post from "./../components/Post";

function Feed() {
    return (
        <>
            <Post isExpanded={false} />
            <Post isExpanded={false} />
            <Post isExpanded={false} />
        </>
    );
}

export default Feed;