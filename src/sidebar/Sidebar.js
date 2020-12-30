import { Button, IconButton } from "@material-ui/core";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./sidebarOption/SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<Add fontSize="large" />}>
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={34} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={27} />
      <SidebarOption Icon={LabelImportant} title="Important" number={5} />
      <SidebarOption Icon={NearMe} title="Sent" number={47} />
      <SidebarOption Icon={Note} title="Drafts" number={6} />
      <SidebarOption Icon={ExpandMore} title="More" number={1} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
