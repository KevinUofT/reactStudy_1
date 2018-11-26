import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My First Homepage based on REACT';


function Title(props){
	return <h1> {props.title} </h1>;
}


//




function Options(props){
	return <li> {props.name} </li>;
}



class Content extends React.Component {


}

class NavigationBar extends React.Component {
	render(){
		return <ul>
			<Options name="Home" />
			<Options name="Work Experience" />
			<Options name="Contact" />
		</ul>
	}
}

class Page_Layout extends React.Component {


}

ReactDOM.render(
	<NavigationBar />,
	document.getElementById('root')
)
