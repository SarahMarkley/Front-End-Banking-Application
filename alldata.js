function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <>
    <h5>All Data in Store</h5>
    {/*  {JSON.stringify(ctx)}<br/>    */}
    <Card
    bgcolor="dark"
    header="User Data"
    body={ 
            <>

                {ctx.users.map((user, index) => (  
                <ul>
                  <li>  
                    Name: {user.name} 
                    <ul>
                      <li>Email: {user.email}</li>
                      <li>Password: {user.password}</li>
                      <li>Balance: {Number(user.balance).toFixed(2)}</li>
                    </ul> 
                  </li>  
                </ul>
              ))}  
            </>
          }
  />
  
    </>
  );
}

