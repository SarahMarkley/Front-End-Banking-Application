function Withdraw(){
  const ctx = React.useContext(UserContext);  
  const ParsedUsers = JSON.parse(JSON.stringify(ctx));
  const [status, setStatus]     = React.useState('');
  const [CustomerName, setName]         = React.useState(ParsedUsers.users[0].name);
  const [CustomerBalance, SetBalance]   = React.useState(Number(ParsedUsers.users[0].balance).toFixed(2));
  const [WithDrawAmount, SetWithDrawAmount]   = React.useState(0);

function handleWithdraw()
{
  if(isNaN(WithDrawAmount) ||
     CountDecimalPlaces() > 2)
  {
    setStatus('Please enter a valid number');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  if(Number(WithDrawAmount) <= 0)
  {
    setStatus('Number Must be greater than zero');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  // if(Number(WithDrawAmount) > CustomerBalance)
  // {
  //   setStatus('You cannot withdraw more than what is in your account');
  //   setTimeout(() => setStatus(''),3000);
  //   return false;
  // }

  ParsedUsers.users[0].balance -= Number(WithDrawAmount);
  ctx.users[0].balance -= Number(WithDrawAmount);
  SetBalance(Number(ParsedUsers.users[0].balance).toFixed(2));

  if(Number(ParsedUsers.users[0].balance) < 0)
  {
    alert(`You overdrew your account, you are $${-Number(ParsedUsers.users[0].balance).toFixed(2)} overdrawn`);
  }
}

function CountDecimalPlaces()
{
    const numStr = String(WithDrawAmount);
    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    }
}

  return ( 
    <Card
    bgcolor="danger"
    header="Withdraw"
    status={status}
    body={ 
            <>
            Name: {CustomerName}<br/>
            Balance: ${CustomerBalance}<br/><br/>
            Withdraw Amount<br/>
            <input onChange={e => SetWithDrawAmount(e.currentTarget.value)}/><br/>
            <button id="SubBtn" type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={(Number(String(WithDrawAmount)) == 0 || String(WithDrawAmount).length == 'undefined')?"true":""}>Withdraw Money</button>
            </>
          }
  />
  )
}
