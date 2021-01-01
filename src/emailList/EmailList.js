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
import React from "react";
import "./EmailList.css";
import EmailRow from "./emailRow/EmailRow";
import Section from "./section/Section";

const EmailList = () => {
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
        <EmailRow
          title="Twitch"
          subject="Whats good fellower streamers"
          description="This is a test and we cant belive this gmail clone is coming alive"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
