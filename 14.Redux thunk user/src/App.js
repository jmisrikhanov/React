import { useEffect } from "react";
import { connect } from "react-redux";
import { getUserInfos } from "./redux/actions/actions";
import UserCard from "./components/UserCard";

function App({ users, loading, message, getUserData }) {
  console.log(users);
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      {message ? (
        <h1>{message}</h1>
      ) : (
        <UserCard users={users} loading={loading} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loading: state.loading,
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(getUserInfos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
