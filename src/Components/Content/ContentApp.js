
import React from 'react'
import {useState , useEffect } from 'react'
import {ContentContainer} from "./ContentContainer";

const ContentApp = (props) =>{

    const {svgObjectIdClick, tabs} = props

    const tabFilter = () =>{

        const tabList = tabs.filter((tab)=>{
            if (tab.object_id === svgObjectIdClick)
            {
                return tab
            }

        })
        return tabList
    }

    return(
        <div>
            <ContentContainer
                svgObjectIdClick={svgObjectIdClick}
                tabs={tabFilter()}
            />
        </div>
    )
}




export {ContentApp}