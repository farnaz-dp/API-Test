
import React from 'react'
import {useState , useEffect} from 'react'
import {ContentComponent} from "./ContentComponent";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ContentContainer = (props)=>{

    const {svgObjectIdClick , tabs} = props

    console.log('ContentContainer , object box id :' , svgObjectIdClick)
    console.log('ContentContainer , tabs :' , tabs)

    const tabNameRender = ()=>{
        const contentList = tabs.map((tab , index)=>{

            return (

                        <Tab key={index}>
                            {tab.tab_name}
                        </Tab>

            )

        })
        return (

                <TabList>
                    {contentList}
                </TabList>


        )
    }

    const tabPannelRender = ()=>{
        const contentList = tabs.map((tab , index)=>{

            return (

                <TabPanel key={index}>
                    {/*{tab.tab_name} <br/>*/}
                    {/*{tab.clickable_object}<br/>*/}
                    {/*{tab.object_id}<br/>*/}
                    {/*{tab.table_name}*/}
                    <ContentComponent
                        sensors={tab.sensors}
                        table_name={tab.table_name}
                        key={index}
                    />
                </TabPanel>

            )

        })
        return contentList


    }


    return(
        <div>
            <Tabs>
                {tabNameRender()}
                {tabPannelRender()}
            </Tabs>

        </div>
    )
}


export {ContentContainer}