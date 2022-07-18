const Dashboard = ({ user }) => {
  console.log(user);
  return (
    <section className='section'>
      <h4>Dashboard</h4>

      <p>hello {user?.name} </p>
    </section>
  );
};
export default Dashboard;
