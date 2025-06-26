import React from "react";
import UserProfile from "./UserProfile";
import UserProfile2 from "./UserProfile2";
import MyForm from "./MyForm";
import UserForm from "./UserForm";

const App = () => {

    const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div className="App">
      <h1>Ví dụ 1</h1>

      {/* Trường hợp hợp lệ */}
      <UserProfile name="Nguyễn Văn A" age={25} />

      {/* Trường hợp name không hợp lệ */}
      <UserProfile name="" age={25} />

      {/* Trường hợp tuổi không hợp lệ */}
      <UserProfile name="Nguyễn Văn B" age="twenty five" />

      {/* Trường hợp không nhập tuổi */}
      <UserProfile name="Nguyễn Văn C" age={null} />


      <h1>Ví dụ 2</h1>
      <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
      <UserProfile2
        name="Nguyễn Văn B"
        age="twenty five"
        onSubmit={handleFormSubmit}
      />
      <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />


      <h1>Ví dụ 3</h1>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />

      <h1>Ví dụ 4</h1>
       <UserForm />

    </div>
  );
};

export default App;
