import React from "react";

const data = {
  PSY: {
    name: "싸이",
    description: "강남스타일로 대박친 남자"
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설속 주인공"
  }
};

const Profile = ({ match }) => {
  const { id } = match.params;
  const profile = data[id];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {id}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
