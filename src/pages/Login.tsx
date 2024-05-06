import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import "./login.css";
import { useState } from "react";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  // const [login, { data, error }] = useLoginMutation();
  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    console.log(user);
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="id">Id:</label>
          <input type="text" id="id" {...register("id")} />
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password")}
          />
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
            name=""
            id=""
            className="show-password"
          />{" "}
          <span>Show Password</span>
          <Button htmlType="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
