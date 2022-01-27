import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Order from "../components/Order";
import { userSelector } from "../features/userSlice";
import { apiMerchant, apiOrders } from "../utils/axios";
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
  const user = useSelector(userSelector);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (user)
      apiMerchant
        .get(`/merchant/profile/${user.id}`)
        .then((res) => setProfile(res.data))
        .catch((e) => {
          console.log(e);
        });
  }, [user]);
  return (
    <Container>
      {user && profile ? (
        <>
          <UserInfo>
            <Text>Name : {user.name}</Text>
            <Text>Email : {user.email}</Text>
            <Text>Points : {user.points}</Text>
            <Text>Benefits : {"Silver"}</Text>
          </UserInfo>
          {console.log(profile)}
          <Previous>
            {profile.products ? (
              profile.products.map((data) => <Order data={data} />)
            ) : (
              <Text>No Available Products!</Text>
            )}
          </Previous>
        </>
      ) : (
        <Text>Login to view Profile!</Text>
      )}
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
