import React from "react";
import PropTypes from 'prop-types'
export class Home extends React.Component {

    constructor(props) {
        
        super();
       this.state = {
            age: props.initialAge,
            status: 0
       };
       setTimeout(() => {
           this.setState({
               status: 1
           });
        },3000)

    }
    onMakeOlder() {
    this.setState({
        age: this.state.age + 1
    },console.log(this.state.age));
    }


    render()    {
      // console.log(this.props);
       var text = "<>< <>< <>< <>< <>< <>< <>< <>< <><";
    return(
    
            <div>
           
                <p>{text}</p>
                <p>Ditt namn är {this.props.name}, your age is {this.state.age}</p>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                <p>Status:  {this.state.status}</p>
                <p>Nickname: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
              
                {this.props.children}
                
                
            </div>
            

         );

    }

}
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};