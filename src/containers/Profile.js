import React from "react";
import styled from "styled-components";
import Order from "../components/Order";

const arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
];
const Profile = () => {
  return (
    <Container>
      <UserInfo>
        <Text>Name</Text>
        <Text>Email</Text>
        <Text>Points</Text>
        <Text>Membership</Text>
      </UserInfo>
      <Previous>
        {arr.map((data) => (
          <Order data={data} />
        ))}
      </Previous>
    </Container>
  );
};

export default Profile;
const Container = styled.div`
  display: flex;
`;
const UserInfo = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: 20px;
  padding: 30px;
  height: fit-content;
`;
const Previous = styled.div`
  flex: 0.7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 20px;
  min-height: 80vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Text = styled.span``;
