import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Top from "./Top";
import { appliCreate } from "../service/ApiService";

function Application() {
  const location = useLocation();
  console.log(location.state.item.id);
  const title = location.state.item.title;
  const [reason, setReason] = useState("");
  const onAppli = async (e) => {
    console.log("front appli");
    e.preventDefault();
    const req = {
      postId: location.state.item.id,
      reason: reason,
    };

    appliCreate(req).then((res) => {
      console.log(req);
      window.location.href = "/";
    });
  };
  //   if (title) {
  return (
    <>
      <Top></Top>
      <div className="container">
        <h3>{title} 프로젝트에 지원하시겠습니까?</h3>
        <form
          onSubmit={(e) => {
            onAppli(e);
          }}
        >
          <dt>지원 사유</dt>
          <input
            type="text"
            onChange={(e) => {
              setReason(e.target.value);
            }}
            placeholder="지원 사유를 입력해 주세요."
          />
          <div className="row">
            <div className="col-6">
              <button type="reset">아니요</button>
            </div>
            <div className="col-6">
              <button type="submit" className="btn-warning">
                예
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
  //   }
}
export default Application;