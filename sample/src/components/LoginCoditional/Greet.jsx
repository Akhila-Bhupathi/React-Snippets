import React from "react";

export default function Greet({ isLogin }) {
  return <>{isLogin ? <h1>Hello user</h1> : <h1>Hello Guest</h1>}</>;
}
