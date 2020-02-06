import React from "react";

import Link from "next/link";

const Home = () => (
  <div>
    <Link href="/page-2">
      <a>/page-2</a>
    </Link>

    <br />

    <Link href="/ko/page-2">
      <a>/ko/page-2</a>
    </Link>
  </div>
);

export default Home;
