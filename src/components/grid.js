import React, { Component } from 'react';
import StackGrid, { transitions, easings } from "react-stack-grid";
import succulent from "/Users/Allison/Desktop/creativeprompts/src/img/succulent.jpeg"

//StackGrid is an open-source library to make grids (https://tsuyoshiwada.github.io/react-stack-grid/#/)

const { scaleDown } = transitions;

class Grid extends Component {

  render() {
    return (
      <StackGrid
        columnWidth={350}
        gutterWidth={35}
        gutterHeight={35}
        duration={1000}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
        //monitorImagesLoaded={true}
      >
        <div key="key1">
        <p>"I wrote something about succulents. They are like mini cacti."</p>
        Item 1</div>
        <div key="key2">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio facilisis mauris. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Vitae tempus quam pellentesque nec. Fusce ut placerat orci nulla. Euismod lacinia at quis risus sed vulputate. Mi sit amet mauris commodo quis. Pretium fusce id velit ut tortor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Leo urna molestie at elementum eu facilisis sed odio. Amet massa vitae tortor condimentum lacinia quis. Natoque penatibus et magnis dis parturient. Feugiat nisl pretium fusce id velit ut. Diam sollicitudin tempor id eu."
        </p>
        Item 2</div>
        <div key="key3">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio facilisis mauris. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Vitae tempus quam pellentesque nec. Fusce ut placerat orci nulla. Euismod lacinia at quis risus sed vulputate. Mi sit amet mauris commodo quis. Pretium fusce id velit ut tortor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."</p>
        Item 3</div>

        <div key="key4">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio facilisis mauris. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Vitae tempus quam pellentesque nec. Fusce ut placerat orci nulla. Euismod lacinia at quis risus sed vulputate. Mi sit amet mauris commodo quis. Pretium fusce id velit ut tortor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."</p>
        Item 4</div>

        <div key="key5">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio facilisis mauris. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Vitae tempus quam pellentesque nec. Fusce ut placerat orci nulla. Euismod lacinia at quis risus sed vulputate. Mi sit amet mauris commodo quis. Pretium fusce id velit ut tortor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."</p>
        Item 5</div>

        <div key="key6">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At quis risus sed vulputate odio ut. Orci sagittis eu volutpat odio facilisis mauris. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Vitae tempus quam pellentesque nec. Fusce ut placerat orci nulla. Euismod lacinia at quis risus sed vulputate. Mi sit amet mauris commodo quis. Pretium fusce id velit ut tortor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."</p>
        Item 6</div>
      </StackGrid>
    );
  }
}

export default Grid;
