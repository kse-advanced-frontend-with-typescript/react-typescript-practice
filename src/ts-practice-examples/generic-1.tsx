import React, {useEffect, useState} from "react";

export const CatalogList: React.FC = () => {
    const [data, setData] = useState()
    useEffect(() => {
        getCatalog().then(data => {
            setData(data as unknown as undefined)
        })
    })

    return <div>
        {String(data)}
    </div>
}


function getGroup() {
  // to implement
}


function getCatalog() {
    return Promise.resolve({
        tv: [
            {
                id: 1,
                name: 'BigTV'
            }
        ],
        phones: [
            {
                id: 123, name: 'iPhone'
            }
        ]
    })
}
