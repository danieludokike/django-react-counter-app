import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    tags: [],
    // imageUrl: "https://picsum.photos/200",
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  };


  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return (
  //       <ul>
  //       { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
  //     </ul>
  //     );
  // }


  render() { 
    return (
    <div>
      {/* <img src={this.state.imageUrl} /> */}
      <span className={this.getBadgeClaases()}>{this.formatCount()}</span>
      <button onClick={ () => this.handleIncrement() } className="btn btn-secondary btn-sm">Increment</button> 
      
      <button onClick={() => this.props.onDelete(this.props.counter.id)}
       className="btn btn-danger btn-sm m-2">Delete</button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClaases() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount () {
    const { count } = this.state
    return count === 0? "Zero" : count;
  }
}

export default Counter;



















// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     // tags: []
//   };

//   // styles = {
//   //     fontSize:  10,
//   //     fontWeight: "bold"
//   // };

//   // renderTags() {
//   //     if (this.state.tags.length === 0) return <p>There aer no tags!</p>;
//   //     return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
//   // }

// //   constructor() {
// //     super();
// //     this.handleIncrement = this.handleIncrement.bind(this);
// //   }

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     // return <div>
//     //     { this.state.tags.length === 0 && 'Please create a new tag' }
//     //     {this.renderTags()}
//     //     </div>;

//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={this.handleIncrement}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;
