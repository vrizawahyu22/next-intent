import React from "react";
import { useRouter } from 'next/router'

const Home = ({url}) => {
    console.log("url", url);
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <h1>Haloo v1</h1>
            <a href={url}>Klik disini {id}</a>
        </div>
    );
};

Home.getInitialProps = async ({ req, res, query }) => {
    console.log("req", query.id);
    let userAgent;
    if (req) {
        // if on the server, get the user-agent from the headers
        userAgent = req.headers['user-agent'];
    } else {
        // if on the client, access the navigator from the window object
        userAgent = navigator.userAgent;
    }

    let url;
    const isIphone = Boolean(userAgent.match(
        /iPhone|iPad|iPod/i,
    ));

    const isAndroid = Boolean(userAgent.match(
        /Android/i,
    ));

    if (isAndroid) {
        url = "intent://product/"+query.id+"#Intent;scheme=help;package=com.helpdelivery;end";
    } else if (isIphone) {
        url = "help://product/"+query.id;
    } else {
        url = null;
    }
    
    return {url}
}

export default Home;
