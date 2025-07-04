import React from "react";
import {
  AutoComplete,
  ComboBox,
  MultiColumnComboBox,
  DropDownList,
  MultiSelect,
  DropDownTree,
} from "@progress/kendo-react-dropdowns";
import { employees } from "../shared-dd-data";
import "@progress/kendo-theme-default/dist/all.css";
import { Notification } from "@progress/kendo-react-notification";
import { groupBy } from "@progress/kendo-data-query";
import { userIcon, searchIcon } from "@progress/kendo-svg-icons";
import { InputPrefix, InputSuffix } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Autocomplete, TextField } from "@mui/material";

export default function Dropdown() {
  const sports = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];
  const header = (
    <div
      style={{
        backgroundColor: "#dee2e6",
        textAlign: "center",
      }}
    >
      Available sports
    </div>
  );

  const footer = (
    <div
      style={{
        backgroundColor: "#dee2e6",
        padding: " 0 0.2rem",
        textAlign: "right",
      }}
    >
      Total: {sports.length}
    </div>
  );

  const listNoDataRender = (element) => {
    const noData = (
      <Notification
        type={{
          style: "warning",
        }}
      >
        No data here
      </Notification>
    );
    return React.cloneElement(
      element,
      {
        ...element.props,
      },
      noData
    );
  };

  const columns = [
    {
      field: "id",
      header: "ID",
      width: "100px",
    },
    {
      field: "name",
      header: "Name",
      width: "300px",
    },
    {
      field: "position",
      header: "Position",
      width: "300px",
    },
  ];
  const data = employees;
  const employees2 = [
    {
      id: 11,
      name: "Hyacinth Hood",
      reportsTo: 32,
      phone: "(889) 345-2438",
      extension: 8564,
      hireDate: new Date("2014-02-03T20:00:00.000Z"),
      fullTime: true,
      position: "Team Lead",
      timeInPosition: 1,
    },
    {
      id: 40,
      name: "Karleigh Garza",
      reportsTo: 52,
      phone: "(370) 983-8796",
      extension: 4044,
      hireDate: new Date("2014-03-10T00:00:00.000Z"),
      fullTime: true,
      position: "Team Lead",
      timeInPosition: 1,
      disabled: true,
    },
    {
      id: 46,
      name: "Darrel Solis",
      reportsTo: 43,
      phone: "(327) 977-0216",
      extension: 7779,
      hireDate: new Date("2015-04-25T00:00:00.000Z"),
      fullTime: true,
      position: "Team Lead",
      timeInPosition: 4,
    },
    {
      id: 76,
      name: "Cheyenne Olson",
      reportsTo: 63,
      phone: "(241) 645-0257",
      extension: 9181,
      hireDate: new Date("2015-05-19T00:00:00.000Z"),
      fullTime: true,
      position: "Developer",
      timeInPosition: 5,
    },
    {
      id: 78,
      name: "Rinah Simon",
      reportsTo: 11,
      phone: "(285) 912-5271",
      extension: 7795,
      hireDate: new Date("2012-10-11T00:00:00.000Z"),
      fullTime: true,
      position: "Developer",
      timeInPosition: 4,
    },
    {
      id: 79,
      name: "Duncan Mathews",
      reportsTo: 64,
      phone: "(790) 971-9709",
      extension: 4573,
      hireDate: new Date("2011-08-21T00:00:00.000Z"),
      fullTime: false,
      position: "Developer",
      timeInPosition: 3,
    },
    {
      id: 82,
      name: "Yael Walters",
      reportsTo: 69,
      phone: "(311) 489-8191",
      extension: 6520,
      hireDate: new Date("2013-07-04T00:00:00.000Z"),
      fullTime: true,
      position: "Developer",
      timeInPosition: 6,
    },
    {
      id: 75,
      name: "Eric Russell",
      reportsTo: 63,
      phone: "(516) 575-8505",
      extension: 2224,
      hireDate: new Date("2012-10-28T00:00:00.000Z"),
      fullTime: true,
      position: "Developer",
      timeInPosition: 3,
    },
    {
      id: 55,
      name: "Summer Mosley",
      reportsTo: 46,
      phone: "(784) 962-2301",
      extension: 5492,
      hireDate: new Date("2010-03-02T00:00:00.000Z"),
      fullTime: true,
      position: "QA",
      timeInPosition: 5,
    },
    {
      id: 59,
      name: "Keiko Espinoza",
      reportsTo: 46,
      phone: "(226) 600-5305",
      extension: 9363,
      hireDate: new Date("2011-09-18T00:00:00.000Z"),
      fullTime: true,
      position: "QA",
      timeInPosition: 4,
    },
    {
      id: 72,
      name: "Stacey Lynn",
      reportsTo: 40,
      phone: "(140) 772-7509",
      extension: 8396,
      hireDate: new Date("2014-07-31T00:00:00.000Z"),
      fullTime: false,
      position: "QA",
      timeInPosition: 1,
    },
    {
      id: 38,
      name: "Elton Tucker",
      reportsTo: 69,
      phone: "(988) 930-9331",
      extension: 9216,
      hireDate: new Date("2015-06-04T00:00:00.000Z"),
      fullTime: true,
      position: "Support",
      timeInPosition: 1,
    },
    {
      id: 71,
      name: "Flavia Short",
      reportsTo: 63,
      phone: "(370) 133-9238",
      extension: 6390,
      hireDate: new Date("2013-02-21T00:00:00.000Z"),
      fullTime: true,
      position: "Support",
      timeInPosition: 0,
    },
    {
      id: 61,
      name: "Candace Pickett",
      reportsTo: 46,
      phone: "(120) 117-7475",
      extension: 5178,
      hireDate: new Date("2010-05-06T00:00:00.000Z"),
      fullTime: true,
      position: "Support",
      timeInPosition: 0,
    },
    {
      id: 65,
      name: "Thomas Terry",
      reportsTo: 63,
      phone: "(764) 831-4248",
      extension: 3574,
      hireDate: new Date("2015-06-15T00:00:00.000Z"),
      fullTime: false,
      position: "Support",
      timeInPosition: 2,
    },
    {
      id: 62,
      name: "Palmer Gregory",
      reportsTo: 64,
      phone: "(360) 430-2505",
      extension: 4337,
      hireDate: new Date("2014-08-30T00:00:00.000Z"),
      fullTime: true,
      position: "Designer",
      timeInPosition: 4,
    },
    {
      id: 12,
      name: "Jamalia Wallace",
      reportsTo: 64,
      phone: "(611) 391-8016",
      extension: 1952,
      hireDate: new Date("2011-09-08T00:00:00.000Z"),
      fullTime: true,
      position: "Designer",
      timeInPosition: 3,
    },
    {
      id: 66,
      name: "Gloria Freeman",
      reportsTo: 53,
      phone: "(344) 950-9168",
      extension: 4738,
      hireDate: new Date("2013-05-06T00:00:00.000Z"),
      fullTime: true,
      position: "Designer",
      timeInPosition: 0,
    },
  ];
  const ungrouped = "Ungrouped";
  const employeesWithUngrouped = employees2.map((el) =>
    el.position
      ? el
      : {
          ...el,
          position: ungrouped,
        }
  );
  const [groupedData] = React.useState(
    groupBy(employeesWithUngrouped, [
      {
        field: "position",
      },
    ]).reduce((res, group) => [...res, ...group.items], [])
  );

  return (
    <div
      className="example-wrapper"
      style={{
        minHeight: "400px",
        marginLeft: "100px",
      }}
    >
      <div className="col-xs-12 col-sm-7 example-col">
        <p>AutoComplete</p>
        <AutoComplete
          style={{
            width: "300px",
          }}
          data={sports}
          placeholder="Your favorite sport"
          //   clearButton={false}
          suggest={true}
          defaultValue="Basketball"
          header={header}
          footer={footer}
          //opened
          listNoDataRender={listNoDataRender}
        />
        <Autocomplete
          options={sports}
          defaultValue="Basketball"
          style={{ width: 300, marginTop: "10px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="MUI Autocomplete"
              variant="outlined"
            />
          )}
        />
        <AutoComplete
          style={{
            width: "300px",
          }}
          data={[]}
          placeholder="Your favorite sport"
          //   clearButton={false}
          suggest={true}
          //opened
          listNoDataRender={listNoDataRender}
        />
        <AutoComplete
          id="employee"
          data={groupedData}
          textField="name"
          groupField="position"
          placeholder="Please select ..."
          style={{
            width: "300px",
          }}
          skipDisabledItems={true}
        />
        <AutoComplete
          id="employee"
          data={groupedData}
          textField="name"
          groupField="position"
          placeholder="Please select ..."
          style={{
            width: "300px",
          }}
          prefix={() => (
            <InputPrefix orientation="vertical">
              <Button fillMode={"flat"} svgIcon={userIcon} />
            </InputPrefix>
          )}
          suffix={() => (
            <InputSuffix orientation="horizontal">
              <Button
                themeColor="primary"
                fillMode={"flat"}
                rounded={null}
                svgIcon={searchIcon}
              />
            </InputSuffix>
          )}
        />
        <AutoComplete
          id="employee"
          data={groupedData}
          textField="name"
          groupField="position"
          placeholder="Please select ..."
          style={{
            width: "300px",
          }}
          size={"large"}
        />
      </div>
      <div className="col-xs-12 col-sm-7 example-col">
        <p>ComboBox (premium)</p>
        <ComboBox
          style={{ width: "300px" }}
          data={sports}
          defaultValue="Basketball"
          suggest={true}
          header={header}
          footer={footer}
        />
      </div>
      <div className="col-xs-12 col-sm-7 example-col">
        <p>MultiColumnComboBox (premium)</p>
        <MultiColumnComboBox
          style={{ width: "300px" }}
          data={data}
          columns={columns}
          textField={"name"}
          suggest={true}
          header={header}
          footer={footer}
        />
      </div>
      <div className="col-xs-12 col-sm-7 example-col">
        <p>DropDownList</p>
        <DropDownList
          style={{ width: "300px" }}
          data={sports}
          defaultValue="Basketball"
          header={header}
          footer={footer}
        />
      </div>
      <div className="col-xs-12 col-sm-7 example-col">
        <p>MultiSelect</p>
        <MultiSelect
          style={{ width: "300px" }}
          data={sports}
          defaultValue={["Basketball", "Cricket"]}
          suggest={true}
          header={header}
          footer={footer}
        />
      </div>
      <div className="col-xs-12 col-sm-7 example-col">
        <p>DropDownTree (premium)</p>
        <DropDownTree
          style={{ width: "300px" }}
          data={[
            {
              text: "Furniture",
              id: 1,
              expanded: true,
              items: [
                { text: "Tables & Chairs", id: 2 },
                { text: "Sofas", id: 3 },
                { text: "Occasional Furniture", id: 4 },
              ],
            },
            {
              text: "Vehical",
              id: 5,
              expanded: true,
              items: [
                { text: "2 Wheeler", id: 6 },
                { text: "4 Wheeler", id: 7 },
                { text: "Bus", id: 8 },
              ],
            },
          ]}
          defaultValue={{ text: "Sofas", id: 3 }}
          textField="text"
          dataItemKey="id"
        />
      </div>
    </div>
  );
}
