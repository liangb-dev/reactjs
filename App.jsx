import React from 'react';

class App extends React.Component {
   render() {

   		var i = 1;

   		var myStyle = {
   			fontSize: 100, 
   			color: '#FF0000'
   		}

      return (
         <div>
            <h1 style={myStyle}> Header {1+1}</h1>
            <h2> {i==1?'True!' : 'False' } </h2>
            <p data-myattribute = "somevalue"> This is the content </p>


            {// End of the line Comment... 
            }
            {/*Multi line comment...*/}

         </div>
      );
   }
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1> Header </h1>
			</div>
			); 
	}
}

class Content extends React.Component {
	render() {
		return (
			<div> 
				<h2> Content </h2>
				<p> The content text !!! </p>
			</div>
			); 
	}
}

export default App;