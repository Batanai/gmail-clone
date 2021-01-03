import { IconButton } from "@material-ui/core";
import {
  CheckBox,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectMail } from "../../features/mailSlice";
import "./EmailRow.css";

const EmailRow = ({ id, title, subject, message, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        message,
        time,
      })
    );

    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <CheckBox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> -{message}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
