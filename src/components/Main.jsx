import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
import "./style.css";

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA1UnPNmk2NtOFyq5MFTPMLY6E-HKgZf6M')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                   <b> <h1>BOOKISH <br/> Finder</h1></b>
                </div> 
                <div className="row2">
                    <h2>Find Your Book :</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name.."
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                    </div>
                    <img src="./images/bg1.png"></img>
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;