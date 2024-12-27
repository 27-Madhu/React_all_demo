import * as React from "react";
class StateExemple extends React.Component{
    state = {
        first: true,
        second : false,
        clr: "red",
        txt:"Siya ",

    };

    constructor(){
        super();
        setTimeout(() =>{
            this.setState({
                first:false,
                second:true,
                clr: "green",
                txt:"CED Division"
              });

        },5000 );
        
        setTimeout(() =>{
            this.settate({
            first: true,
            second : false,
            clr: "red",
            txt:"hello ",
        });

    },10000 );
    }
    

    render(){
        const{first,second,clr,txt} = this.state;
        return(
            <div style={{marginLeft:"300px"}}>
                <button disabled = {first}>Button1</button><br/><br/>
                <button disabled = {second}>Button2</button><br/>
                <label  style={{ color: clr}}>{txt}</label>
            </div>
           
        )
    }
}
export default StateExemple;
