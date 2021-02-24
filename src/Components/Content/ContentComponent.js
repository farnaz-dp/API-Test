
import React from 'react'
import {useState , useEffect} from 'react'
import DataTable, { createTheme } from 'react-data-table-component';



// const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' } ...];

const columns = [
    {
        name: 'Items',
        selector: 'items',
        sortable: true,
    },
    {
        name: 'Status',
        selector: 'status',
        sortable: true,
        right: true,
    },
];

const ContentComponent = (props)=>{

    const {sensors , table_name}= props
    console.log('ContentComponent, sensor :' ,sensors )

    const sensorRender = ()=>{

        const sensorList = sensors.map((sensor , index)=>{

            return(

                // <tr>
                //     <td>{sensor.sensor_title}</td>
                //     <td>{sensor.value}</td>
                // </tr>

                {
                    id : index,
                    items : sensor.sensor_title,
                    status : sensor.value

                }


            )


        })

        return sensorList
    }

    return(
        <div>

            {/*<table >*/}
            {/*    <tr>*/}
            {/*        <th>Items</th>*/}
            {/*        <th>Status</th>*/}
            {/*    </tr>*/}


            {/*    {sensorRender()}*/}

            {/*</table>*/}

            <DataTable
                title={table_name}
                columns={columns}
                data={sensorRender()}
            />
        </div>
    )
}


export {ContentComponent}