import { ImportantDevicesRounded } from "@mui/icons-material";
import React from "react";
import Card from "../UI/Card/Card";
import styles from "./Dashboard.module.css";
import Button from "../UI/Button/Button";

const lightCardStyle = { backgroundColor: "#1b1b1b" };
const columnCardStyle = { flexDirection: "column" };

const Dashboard = () => (
  <div>
    <Card>
      Dashboard Component - tutaj po zalogowaniu wyświetla się główna aplikacja
    </Card>
    <Card style={{ ...lightCardStyle, ...columnCardStyle }}>
      Karta
      <Card style={columnCardStyle}>
        Podkarta 1 sample text
        <Button>SAMPLE TEXT</Button>
      </Card>
      <Card style={lightCardStyle}>Podkarta 2</Card>
      <Card style={lightCardStyle}>Podkarta 3</Card>
      <Button>CLICK ME</Button>
    </Card>
    <Card>Sample text</Card>
  </div>
);

export default Dashboard;
