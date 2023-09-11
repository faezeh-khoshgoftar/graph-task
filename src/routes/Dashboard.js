import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Popover } from "antd";
import userService from "../services/user.service";
import { logout } from "../slices/auth";
import Card from "../components/card/Card";

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [viewed, setViewed] = useState(3);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    userService.getUserName().then(
      (response) => {
        setUserName(response?.data?.username);
      },
      (error) => {
        const err =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setError(err);

        if (error.response && error.response.status === 401) {
          dispatch(logout());
        }
      }
    );
  }, []);

  const loadMoreHandler = () => {
    setPage((page) => page + 1);
    setViewed((viewed) => viewed + 3);
  };

  useEffect(() => {
    userService.getList(page, 3).then(
      (response) => {
        let moreList = list.concat(response?.data?.result);
        setTotal(response?.data?.total);
        setList(moreList);
      },
      (error) => {
        console.log("error", error);
        const err =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setError(err);

        if (error.response && error.response.status === 401) {
          dispatch(logout());
        }
      }
    );
  }, [page]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const content = (
    <p className="cursor-pointer" onClick={logoutHandler}>
      Logout
    </p>
  );

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen px-4 pt-4 pb-10 bg-gray-200">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {!list ? (
            <p>Loading</p>
          ) : (
            <>
              <div className="flex justify-between">
                <h2>Dashboard</h2>
                <Popover content={content}>
                  <h3 className="cursor-pointer font-bold">{userName}</h3>
                </Popover>
              </div>
              <div className="flex justify-between my-10">
                <p>Viewed:{viewed}</p>
                <p>Total:{total}</p>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-4 mb-10">
                {list.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
              </div>
              {page < 3 ? (
                <Button
                  type="primary"
                  loading={loading}
                  ghost
                  onClick={loadMoreHandler}
                  className="mx-auto block"
                >
                  Load More
                </Button>
              ) : null}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
