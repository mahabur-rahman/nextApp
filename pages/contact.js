import Link from "next/link";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="text-center">
      <Head>
        <title>Contact Page</title>
      </Head>
      <h1 className="text-indigo-700 text-4xl font-bold my-40">Contact Us</h1>
      <Link href="/">
        <a className="text-red-400 text-xl font-bold">Back to Home</a>
      </Link>
    </div>
  );
};

export default Contact;
