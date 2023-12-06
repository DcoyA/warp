import { FlexBox, Text } from "@/components/ui/atoms";
import styled from "@emotion/styled";
import React from "react";

interface TableProps {
  data: any[];
}

const List = styled.ul`
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  padding: 10px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p:nth-of-type(1) {
    width: 8vw;
  }
  p:nth-of-type(2) {
    width: 8vw;
  }
  p:nth-of-type(3) {
    width: 18vw;
    justify-content: start;
  }
`;

const Table: React.FC<TableProps> = ({ data }) => {
  // 데이터 배열에서 첫 번째 객체의 key 값을 가져와 컬럼으로 사용
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <>
      <List>
        {data.map((row, rowIndex) => (
          <FlexBox key={rowIndex} justifyContent="space-between">
            <FlexBox style={{ flex: 2 }}>
              <Item>
                {columns.map((column, columnIndex) => (
                  <Text key={columnIndex} style={{ padding: "0 20px" }}>
                    {row[column]}
                  </Text>
                ))}
              </Item>
            </FlexBox>
            <FlexBox
              style={{ flex: 1 }}
              justifyContent="end"
              paddingRight="20px"
              alignItems="center"
            >
              <Text>내용 삭제</Text>
            </FlexBox>
          </FlexBox>
        ))}
      </List>
    </>
  );
};

export default Table;
