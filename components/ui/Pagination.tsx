import React from "react";
import { FlexBox, Text } from "./atoms";
import styled from "@emotion/styled";
import { dateParse } from "@/libs/dateParse";

interface Props {
  dataList: any[];
}

// const PaginationWrap = styled.section`
//   display: flex;
// `;

const List = styled.ul`
  width: 100%;
  height: 200px;
  overflow: hidden;
  overflow-y: scroll;
  color: #fff;
  padding: 23px 0;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  li {
    display: flex;
    width: 1000px;
    padding: 5px;
    font-size: 22px;
    line-height: 1.2;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  h4 {
    width: 5%;
  }
  span {
    width: 150px;
  }
  p {
    width: 50%;
  }
`;

// const Paging = styled.ol`
//   display: flex;
//   color: #fff;
//   width: 20%;
//   justify-content: space-around;
//   align-items: center;
//   line-height: 1;
//   li {
//     border-left: 1px solid #fff;
//     text-align: center;
//     align-items: center;
//     justify-content: center;
//     width: 20%;
//     font-size: 24px;
//   }
//   li:first-of-type {
//     border: none;
//   }
// `;

const Pagination = ({ dataList }: Props) => {
  return (
    <FlexBox dir="column" alignItems="center" height="200px">
      <List>
        {dataList?.map((el) => (
          <li key={el.id}>
            <h4>{el.id}</h4>
            <span>{dateParse(el.createdAt)}</span>
            <p>{el.title}</p>
          </li>
        ))}
      </List>
      {/* <Paging>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </Paging> */}
    </FlexBox>
  );
};

export default Pagination;
