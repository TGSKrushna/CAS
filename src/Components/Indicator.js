import React from "react";
import {
  Badge,
  BadgeContainer,
  Loader,
  Skeleton,
} from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { bellIcon, checkIcon } from "@progress/kendo-svg-icons";
import { Avatar } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";

export default function Indicator() {
  return (
    <div className="example">
      <div
        className="example-wrap"
        style={{
          textAlign: "center",
        }}
      >
        <div className="row">
          <div className="col-4">
            <Button themeColor="primary">
              Action
              <Badge
                align={{
                  vertical: "top",
                  horizontal: "end",
                }}
                themeColor="secondary"
              >
                8
              </Badge>
            </Button>
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <Skeleton
              shape="rectangle"
              style={{
                width: 50,
                height: 50,
              }}
            />
          </div>
          <div className="col-4">
            <Loader type="pulsing" />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <BadgeContainer>
              <SvgIcon icon={bellIcon} />
              <Badge themeColor="info">99+</Badge>
            </BadgeContainer>
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <Skeleton
              shape="circle"
              style={{
                width: 50,
                height: 50,
              }}
            />
          </div>
          <div className="col-4">
            <Loader type="infinite-spinner" />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <BadgeContainer>
              <Avatar type="image">
                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.7ffeA2UMY3L50vidO4zQywHaD8?pid=Api&P=0&h=180"
                  alt="KendoReact Badge Avatar"
                />
              </Avatar>
              <Badge
                size="small"
                align={{
                  vertical: "bottom",
                  horizontal: "end",
                }}
                themeColor="success"
                cutoutBorder={true}
              >
                <SvgIcon icon={checkIcon} />
              </Badge>
            </BadgeContainer>
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <Skeleton
              shape="text"
              style={{
                width: 100,
              }}
            />
          </div>
          <div className="col-4">
            <Loader type="converging-spinner" />
          </div>
        </div>
      </div>
      <style>{`.row { margin-bottom: 20px; }`}</style>
    </div>
  );
}
