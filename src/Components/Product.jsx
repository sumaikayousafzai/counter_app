import "../App.css";
import {useState} from "react";
function Product ()
{
const [count,setcount]=useState(1);


function decrement(){
    if(count>1)
    setcount(count-1);
}

 function increment(){
  setcount(count+1);

}
return(
<div className = "product-card">
<div className="img-card">
<img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZwAil1DpHYSkfJvhzCDWt99kwBt00amgsakV0RB5YQ&s=10" alt="shoes"/>
</div>
<div className="product-info">
<h2>Brown Sneakers</h2>
<h2>$12.45</h2>
<p>best quality shoes for men, most comfortable and best quality shoes.</p>
<button>Add to cart</button>
<div className="quantity">
<button onClick={decrement}>-</button>
<button>{count}</button>
<button onClick={increment}>+</button>
</div>
</div>
 </div>
)
}
export default Product