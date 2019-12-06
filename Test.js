import React from "react";

export class Test extends React.Component {
    render() {
        let content = "";
        if (true) {
            content= <p> Hello!</p>
        }
        return (

            <div>
            
                <p>Welcome to my website! </p>

                {content}
                <p> Is 5 equal to 2?</p>
                { 5 == 2 ? "YES" : "NO" }
                
            </div>
            
            
        );
    }

}