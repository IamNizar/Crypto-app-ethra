

import { SendOutlined, WalletOutlined } from "@ant-design/icons";
import { Button, Typography, Space, Card } from "antd";
import Title from "antd/lib/typography/Title";
import { Loader } from ".";
import { shortenAddress } from "../utils/shortenAddress";
import React,{useContext} from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData"
import useFetch from "../hooks/useFetch";
const {Text} = Typography
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
);
const TransactionCard =({addressTo,addressFrom,timestamp,message,keyword,amount,url}) =>{
  const gifUrl = useFetch({ keyword });
return (
  <div class="card">
            <div class="card-image">
            <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">

              <img src={gifUrl||url} class="card-img-top" alt="gif" /></a>
            </div>
            <div class="card-title">{timestamp}</div>
            <div class="card-text">
            <p>From: {shortenAddress(addressFrom)}</p>  
              <p>To: {shortenAddress(addressTo)} </p>  
              
      <p>Amount: {amount} ETH</p> 
      {message && (
            <>
              <br />
              <p>Message: {message}</p>
            </>
          )}          
       </div>
    </div>
 

)
}
const EtherTransfert =() => {

  const { currentAccount, connectWallet, handleChange, sendTransaction,transactions, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
   
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
    return(
        <>  <div>
      
          <Title level={2} className="heading">
            Transfer Ether<br /> In Just One Click
          </Title>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Send ETH from anywhere in the world.
          </p>
          
          <Space align="center">
          {!currentAccount && (
          <Button type='primary' shape="round" icon={<WalletOutlined/>} onClick={connectWallet} >
                Connect Wallet
          </Button>)}
         <Space align="end" style={{float:'right'}}>
         {currentAccount && ( <Text code>Your Account Address : {shortenAddress(currentAccount)}</Text>)}

         </Space>
                </Space>
          </div>
          <br/>
              <div>
        
          <div >
            <Space direction="vertical" size={1} style={{ display: 'flex' }}>
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
           
        
        <Space align="end" style={{float:'right'}}>
            {isLoading
              ?( <Loader />) 
              : (
                <Button 
                  onClick={handleSubmit}
                 shape="round"
                 icon={<SendOutlined/>}
               >
                  Send now
                </Button>
              )}
              </Space>
              </Space> 
          </div>
          <br/>
         
    </div>
    <div>
    { currentAccount ? (
           <Title level={3} >Latest Transactions</Title>
        ) : (
          <Title level={3} >Connect your wallet to see latest transactions</Title>
        )}
     
     <div>
     <div class="card-container">
     {transactions.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
     
    </div>
    </div>

    </div>
    
    
    </>

    );

};
export default EtherTransfert;