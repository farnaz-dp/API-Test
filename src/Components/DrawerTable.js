
import React from 'react'
import {useState, useEffect} from 'react'
import {ContentComponent} from "./Content/ContentComponent";
import {ContentApp} from "./Content/ContentApp";


const buttonStyle = {
    padding: '10px 20px',
    border: '2px solid #3085d6',
    borderRadius: '5px',
    background: '#3085d6',
    boxShadow: '5px 5px 5px grey',
    textShadow: '1px 1px 1px black',
    fontWeight: '900',
    color: 'white'
};

const commonStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    padding: '5px',
    border: '1px solid #0657FF',
    borderRadius: '0 30px 30px 0',
    background: '#C9E5FF',
    width: '280px',
    transition: '0.5s',
    overflow: 'hidden'
};

const visibleStyle = {
    ...commonStyle,
    left: '0'
};

const hiddenStyle = {
    ...commonStyle,
    left: '-300px'
};

const liStyle = {
    margin: '10px',
    padding: '5px',
    border: '2px solid #3085d6',
    borderRadius: '5px',
    background: '#5fa8ed',
    boxShadow: '5px 5px 5px grey',
    textShadow: '1px 1px 1px black',
    fontWeight: '900',
    color: 'white',
    listStyle: 'circle inside'
};

const DrawerTable = (props) => {

    const {map3dDataState, svgObjectIdClick , drawerVisible , setDrawerVisible} = props

    // const [visible, setVisible] = useState(false);
    return (
        <div style={{ height: "200px" }}>
            {/*<button style={buttonStyle} onClick={() => setVisible(true)}>*/}
            {/*    Show*/}
            {/*</button>*/}
            <div style={drawerVisible ? visibleStyle : hiddenStyle}>
                <button style={buttonStyle} onClick={() => setDrawerVisible(false)}>
                    Close
                </button>
                <div>
                    {/*<ul>*/}
                    {/*    /!*<li style={liStyle}>Fruits 🍏🍌🍒</li>*!/*/}
                    {/*    /!*<li style={liStyle}>Vegetables 🥕🥦🍅</li>*!/*/}
                    {/*    /!*<li style={liStyle}>Fast Food 🍕🍟🍔</li>*!/*/}
                    {/*        <ContentComponent*/}
                    {/*        sensors={props.sensors}*/}
                    {/*        table_name={props.table_name}*/}
                    {/*        key={props.key}/>*/}


                    {/*</ul>*/}
                    <br/>
                    <ContentApp
                        svgObjectIdClick={svgObjectIdClick}
                        tabs={map3dDataState.table.tabs}
                    />
                </div>
            </div>
        </div>
    );
};


export {DrawerTable}