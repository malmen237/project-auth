import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import games from 'reducers/games';
// import user from 'reducers/user';
import { API_URL } from "utils/utils";
import { useNavigate, Link } from "react-router-dom";

const Main = () => {
  const gamesItems = useSelector((store) => store.games.items);
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/login");
    }
  }, [])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken
      }
    }
    fetch(API_URL("games"), options)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch(games.actions.setItems(data.response));
          dispatch(games.actions.setError(null));
        } else {
          dispatch(games.actions.setItems([]));
          dispatch(games.actions.setError(data.response));
        }
      })
  }, []);

  return (
    <>
      <Link to="/login">GO TO LOGIN</Link>
      <h1>This is the main component</h1>
      {gamesItems.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
    </>
  )
}

export default Main;
