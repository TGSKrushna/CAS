import "./App.css";
import { useState } from "react";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";

import Dropdown from "./Components/Dropdown";
import FormComponent from "./Components/FormComponent";
import NotificationComponent from "./Components/NotificationComponent";
import DateTimePicker from "./Components/DateTimePicker";
import Dialogs from "./Components/Dialogs";
import Indicator from "./Components/Indicator";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("dropdown");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "dropdown":
        return <Dropdown />;
      case "form":
        return <FormComponent />;
      case "notification":
        return <NotificationComponent />;
      case "datepicker":
        return <DateTimePicker />;
      case "dialogs":
        return <Dialogs />;
      case "indicators":
        return <Indicator />;
      default:
        return <div>Select a component</div>;
    }
  };

  return (
    <div>
      <AppBar>
        {/* Left section: Logo and Buttons */}
        <AppBarSection>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <h1 style={{ margin: 0, fontSize: "16px" }}>My App</h1>
            <Button
              look="flat"
              onClick={() => setSelectedComponent("dropdown")}
            >
              Dropdown
            </Button>
            <Button look="flat" onClick={() => setSelectedComponent("form")}>
              Form
            </Button>
            <Button
              look="flat"
              onClick={() => setSelectedComponent("notification")}
            >
              Notifications
            </Button>
            <Button
              look="flat"
              onClick={() => setSelectedComponent("datepicker")}
            >
              Date Picker
            </Button>
            <Button look="flat" onClick={() => setSelectedComponent("dialogs")}>
              Dialogs
            </Button>
            <Button
              look="flat"
              onClick={() => setSelectedComponent("indicators")}
            >
              Indicators
            </Button>
          </div>
        </AppBarSection>
        <AppBarSection style={{ marginLeft: "auto" }} />
      </AppBar>
      <div style={{ padding: "20px" }}>{renderComponent()}</div>
    </div>
  );
}

export default App;
