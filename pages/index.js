import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WEB422 Activity 10 - CI/CD Lab</title>
        <meta
          name="description"
          content="WEB422 Activity 10 demonstrating CI/CD with GitHub Actions, Jest, Cypress, and Vercel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>WEB422 Activity 10 - CI/CD Lab</h1>
        <p>
          This project demonstrates Continuous Integration and Continuous
          Deployment using GitHub Actions, Jest, Cypress, and Vercel.
        </p>

        <section>
          <h2>Included Features</h2>
          <ul>
            <li>GitHub repository with CI workflow</li>
            <li>Linting in CI</li>
            <li>Jest test execution in CI</li>
            <li>Cypress test execution in CI</li>
            <li>Vercel deployment with preview and production builds</li>
          </ul>
        </section>
      </main>
    </>
  );
}