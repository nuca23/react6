import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer";
import Header from "./header";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            lastname: "",
        };
        this.setValue = this.setValue.bind(this); // Binding the method to the class
    }

    setValue() {
        this.setState({
            name: "ნუცა"
        }, () => {
            window.alert(this.state.name); // Fixing the alert to display only the name
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <button type="button" onClick={this.setValue}>გამარჯობა მსოფლიო</button>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));