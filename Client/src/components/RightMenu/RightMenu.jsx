import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainQueues from "./QueueList";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import axios from "axios";
import { API_URI } from "../../constant.jsx";
import { useNavigate } from "react-router-dom";

const MainBar = ({
  queues,
  setQueues,
  tableType,
  setTableType,
  queueStatus,
  setQueueStatus,
  path,
  style,
  alt,
}) => {
  const [searchQueue, setSearchQueue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQueue = async () => {
      const BEARER_TOKEN = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`;
      try {
        const { data } = await axios.get(`${API_URI}/v1/queues`, {
          headers: { authorization: BEARER_TOKEN },
        });
        setQueues(data);
      } catch (err) {
        navigate("/home");
      }
    };
    fetchQueue();
  }, []);

  return (
    <RightMenuContainer>
      <Header
        queueStatus={queueStatus}
        setQueueStatus={setQueueStatus}
        setTableType={setTableType}
        setSearchQueue={setSearchQueue}
        path={path}
        alt={alt}
        style={style}
      />
      <MainQueues
        queueStatus={queueStatus}
        tableType={tableType}
        queues={queues}
        searchQueue={searchQueue}
        setQueues={setQueues}
        setTableType={setTableType}
      />
      <Footer />
    </RightMenuContainer>
  );
};

export default MainBar;
