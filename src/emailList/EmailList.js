import { IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  CheckBox,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import "./EmailList.css";
import EmailRow from "./emailRow/EmailRow";
import Section from "./section/Section";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <CheckBox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="primary" color="red" selected />
        <Section Icon={People} title="social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            message={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          message="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
