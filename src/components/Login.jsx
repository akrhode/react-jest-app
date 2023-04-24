const Login = () => {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button disabled="true">Login</button>
      </form>
    </div>
  );
};

export default Login;
