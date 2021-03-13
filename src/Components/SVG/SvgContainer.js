
import React, {useState, useEffect , useContext} from 'react'
import {SvgComponent} from "./SvgComponent";
import {Context} from "../../Contexts/IVMSContext";

const SvgContainer = (props) => {

    const {state , dispatch} = useContext(Context)

//Extracts required fields from tabs array
    const svgComponentsRender = ()=> {
        // const componentList = props.tabs.map((tab, index)=>{
        const componentList = state.ivmsMapDataApi.data.table.tabs.map((tab, index)=>{
            return(
                // <SvgComponent
                //     tab_name={tab.tab_name}
                //     object_id={tab.object_id}
                //     table_name={tab.table_name}
                //     sensors={tab.sensors}
                //     svgSnap={props.svgSnap}
                //     key={index}
                //     setSvgObjectIdClick={props.setSvgObjectIdClick}
                //     setDrawerVisible={props.setDrawerVisible}
                //     svgObjectIdClick={props.svgObjectIdClick}
                // />

            <SvgComponent
                tab_name={tab.tab_name}
                object_id={tab.object_id}
                table_name={tab.table_name}
                sensors={tab.sensors}
                key={index}
                svgSnap={props.svgSnap}
            />
            )

        })

        return componentList
    }

    return(
        <div>

            {svgComponentsRender()}
        </div>
    )
}


export {SvgContainer}