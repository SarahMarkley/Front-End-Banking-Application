function Deposit(){
  const ctx = React.useContext(UserContext);  
  const ParsedUsers = JSON.parse(JSON.stringify(ctx));
  const [status, setStatus]     = React.useState('');
  const [CustomerName, setName]         = React.useState(ParsedUsers.users[0].name);
  const [CustomerBalance, SetBalance]   = React.useState(Number(ParsedUsers.users[0].balance).toFixed(2));
  const [DepositAmount, SetDepositAmount]   = React.useState(0);

function handleDeposit()
{
  if(isNaN(DepositAmount) ||
     CountDecimalPlaces() > 2)
  {
    setStatus('Please enter a valid number');
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  if(Number(DepositAmount) <= 0)
  {
    setStatus('Number Must be greater than zero');
    setTimeout(() => setStatus(''),3000);
    return false;
  }

  ParsedUsers.users[0].balance += Number(DepositAmount);
  ctx.users[0].balance += Number(DepositAmount);
  SetBalance(Number(ParsedUsers.users[0].balance).toFixed(2));
}

function CountDecimalPlaces()
{
    const numStr = String(DepositAmount);
    if (numStr.includes('.')) {
       return numStr.split('.')[1].length;
    }
}

  return ( 
    <Card
    bgcolor="success"
    header="Deposit"
    status={status}
    body={ 
            <>
            Name: {CustomerName}<br/>
            Balance: ${CustomerBalance}<br/><br/>
            Deposit Amount<br/>
            <input onChange={e => SetDepositAmount(e.currentTarget.value)}/><br/>
            <button id="SubBtn" type="submit" className="btn btn-light" onClick={handleDeposit} disabled={(Number(String(DepositAmount)) == 0 && String(DepositAmount).length <= 1)?"true":""}>Deposit Money</button>
            </>            
          }
  />
  )
}
