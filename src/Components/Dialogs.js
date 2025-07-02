import React from "react";
import {
  Dialog,
  DialogActionsBar,
  Window,
} from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";

export default function Dialogs() {
  const [visibleDialog, setVisibleDialog] = React.useState(false);
  const [visibleWindow, setVisibleWindow] = React.useState(false);
  const toggleDialog = () => {
    setVisibleDialog(!visibleDialog);
  };
  const toggleWindow = () => {
    setVisibleWindow(!visibleWindow);
  };
  return (
    <div>
      {!visibleDialog && !visibleWindow && (
        <span className="k-d-flex k-gap-4">
          <Button type="button" onClick={toggleDialog} id="open-dialog">
            Open Dialog
          </Button>
          <Button type="button" onClick={toggleWindow} id="open-window">
            Open Window
          </Button>
        </span>
      )}
      {visibleDialog && (
        <Dialog title={"Please confirm"} onClose={toggleDialog}>
          <p
            style={{
              margin: "25px",
              textAlign: "center",
            }}
          >
            Are you sure you want to continue?
          </p>
          <DialogActionsBar>
            <Button type="button" onClick={toggleDialog}>
              No
            </Button>
            <Button type="button" onClick={toggleDialog}>
              Yes
            </Button>
          </DialogActionsBar>
        </Dialog>
      )}
      {visibleWindow && (
        <Window title={"Status"} onClose={toggleWindow}>
          Additional info
        </Window>
      )}
    </div>
  );
}
