
import React , {useContext} from 'react'
import {useState , useEffect } from 'react'
import {ContentContainer} from "./ContentContainer";
import {Context} from '../../Contexts/IVMSContext'


const ContentApp = (props) =>{

    const {state , dispatch} = useContext(Context)

    // const {svgObjectIdClick, tabs} = props

    const tabFilter = () =>{

        // const tabList = tabs.filter((tab)=>{
        const tabList = state.ivmsMapDataApi.data.table.tabs.filter((tab)=>{
            // if (tab.object_id === svgObjectIdClick)
            if (tab.object_id === state.svg.svgObjectIdClick)
            {
                return tab
            }

        })
        return tabList
    }

    return(
        <div>
            {/*<ContentContainer*/}
            {/*    svgObjectIdClick={svgObjectIdClick}*/}
            {/*    tabs={tabFilter()}*/}
            {/*/>*/}

            <ContentContainer
                tabs={tabFilter()}
            />
        </div>
    )
}




export {ContentApp}