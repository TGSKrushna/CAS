import React from "react";
import {
  Notification,
  NotificationGroup,
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
import { Button } from "@progress/kendo-react-buttons";

export default function NotificationComponent() {
  const [state, setState] = React.useState({
    success: false,
    error: false,
    warning: false,
    info: false,
    none: false,
  });
  const onToggle = (flag) =>
    setState({
      ...state,
      [flag]: !state[flag],
    });
  const { success, error, warning, info, none } = state;
  return (
    <div style={{ marginLeft: "100px" }}>
      <Button type="button" onClick={() => onToggle("success")}>
        {(success ? "hide " : "show ") + "Success"}
      </Button>
      &nbsp;
      <Button type="button" onClick={() => onToggle("error")}>
        {(error ? "hide " : "show ") + "Error"}
      </Button>
      &nbsp;
      <Button type="button" onClick={() => onToggle("warning")}>
        {(warning ? "hide " : "show ") + "Warning"}
      </Button>
      &nbsp;
      <Button type="button" onClick={() => onToggle("info")}>
        {(info ? "hide " : "show ") + "Info"}
      </Button>
      &nbsp;
      <Button type="button" onClick={() => onToggle("none")}>
        {(none ? "hide " : "show ") + "Unstyled"}
      </Button>
      <NotificationGroup
        style={{
          right: 0,
          bottom: 0,
          alignItems: "flex-start",
          flexWrap: "wrap-reverse",
        }}
      >
        <Fade>
          {success && (
            <Notification
              type={{
                style: "success",
                icon: true,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  success: false,
                })
              }
            >
              <span>Your data has been saved.</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {error && (
            <Notification
              type={{
                style: "error",
                icon: true,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  error: false,
                })
              }
            >
              <span>Oops! Something went wrong ...</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {warning && (
            <Notification
              type={{
                style: "warning",
                icon: true,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  warning: false,
                })
              }
            >
              <span>Your password will expire in 2 days!</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {info && (
            <Notification
              type={{
                style: "info",
                icon: true,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  info: false,
                })
              }
            >
              <span>You have 1 new message!</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {none && (
            <Notification
              type={{
                style: "none",
                icon: false,
              }}
              closable={true}
              onClose={() =>
                setState({
                  ...state,
                  none: false,
                })
              }
              style={{
                overflow: "visible",
              }}
            >
              <span>Hanna Moos likes your status.</span>
            </Notification>
          )}
        </Fade>
      </NotificationGroup>
    </div>
  );
}
