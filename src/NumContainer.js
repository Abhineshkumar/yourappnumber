import React, { Component } from 'react';
import Number from './Number';
import './numItem.css';

class NumContainer extends Component {
    
        state={
            firstname:"",
            myspecialNum:1,
            count:0
           
        }

   
  
        handleChangeForm=(e)=>
        {
      
      
            this.setState({
            firstname:e.target.value
           
            })
            //this.handleChangeForm.value="";
               //console.log(this.state.value);
            
               e.preventDefault();
        }
        goToNext=()=>{
            
            this.setState({
                myspecialNum: this.state.myspecialNum + 1,
                count:this.state.count + 20
               
                })
            
         }
         goToPrev=()=>{
             if(this.state.myspecialNum>1){
            this.setState({
                myspecialNum: this.state.myspecialNum - 1,
                count:this.state.count - 20
               
                })
            }
         }
        render() 
        {
           
            var load=1;
            var d = new Date();
            var n = d.getDay();
            var arr1=[];
            let number= this.state.firstname;
            if(load==1)
            {
       if(number<=1000){
             for(var j=1;j<=number; j++)

                {
                  if(j%3==0 && j%15!=0)
                    {
                     if(n==3)
               
                     arr1.push(("WIZZ"))
                      else
                        arr1.push(("FIZZ"))

                    }

                    if(j%5==0 && j%15!=0)

                    {
                        if(n==3)
                        arr1.push("WUZZ")
                        else
                        arr1.push("BUZZ")
                    }

                    if(j%3==0 && j%5==0)
                    {
                        if(n==3)
                        arr1.push("WIZZ WUZZ")
                        else
                        arr1.push("FIZZ BUZZ")
                    }

                    if(j%3!=0 && j%5!=0 && j%15!=0)
                    {
                        arr1.push(j);
                    }
            
                }
                }
                    //load=2;
                   
            }
            var i=0;
            var loop=0;
            var elements=[];
            var mycount = this.state.count;
            var mynumber= this.state.myspecialNum;
      if(this.state.myspecialNum==mynumber){
            for(var i=mycount;i<arr1.length;i++)
                {
       
                   if(loop==20)
                    {
                        loop=0;
                        break;
                    }
                    else
                   {
                        elements.push(<Number value={arr1[i]} />);
                   }

                   loop++;
                }
            }
            
            
     
               
      
      
        
            return(
                <div className="listmain"> 
                   <div className="header">
                      <div className="hone"><h1>BUZZ APP</h1></div>
                      <h2>Enter value between 1 to 1000</h2>
                      <input type="text" placeholder="Enter here number" name="firstname" onChange={this.handleChangeForm}/>
                      {elements}
                    </div>
                      
                      <br></br>
                     <div >
                      <button className="button" onClick={this.goToPrev}>Prev Button</button>&nbsp;
                      <button className="button" onClick={this.goToNext}>Next Button</button>
              
                      </div>

                </div>
            
          
            
            );
            
        
        }
    
    }

    export default NumContainer;