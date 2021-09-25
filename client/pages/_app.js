import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, props = {} }) => {
  return (
    <div>
      <Header currentUser={props.currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const {
    data: { currentUser = {} },
  } = await client.get("/api/users/currentUser");

  return { props: { currentUser } };
};

export default AppComponent;
