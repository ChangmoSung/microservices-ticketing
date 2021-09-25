import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing page</h1>;
};

export const getServerSideProps = async (context) => {
  const client = buildClient(context);
  const { data: currentUser } = await client.get("/api/users/currentUser");
  return { props: { currentUser } };
};

export default LandingPage;
