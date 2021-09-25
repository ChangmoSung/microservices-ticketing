import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return <h1>{currentUser ? "You are signed in" : "You are not signed in"}</h1>;
};

export const getServerSideProps = async (context) => {
  const client = buildClient(context);
  const { data: currentUser } = await client.get("/api/users/currentUser");
  return { props: { currentUser } };
};

export default LandingPage;
