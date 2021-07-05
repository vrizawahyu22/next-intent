import React from "react";
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <h1>Haloo</h1>
            <a href={"intent://product/"+id+"#Intent;scheme=help;package=com.helpdelivery;end"}>Klik for Android {id}</a>
            <a href={"help://product/"+id}>Klik for IOS {id}</a>
        </div>
    );
};
