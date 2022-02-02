import Description from "../components/Desc";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <main>
        <Description />
        <Profile heading={"Data Analysis"} text={"Analysis with Node js"} />
        <Profile heading={"Data Scientist"} text={"Analysis with Python"} />
        <Profile heading={"NexJs"} text={"Analysis with Next js"} />
      </main>
    </>
  );
};

export default Home;
