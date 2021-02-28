
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

createTheme('solarized', {
    text: {
        primary: '#000',
        secondary: '#000',
    },
    background: {
        default: '#E1F5FE',
    },
    context: {
        background: '#cb4b16',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
});

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
                theme={"solarized"}
            />
        </div>
    )
}


export {ContentComponent}