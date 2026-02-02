import { use, useEffect, useState } from "react"


const useGet = (url) => {

        const [data, setData] = useState([]);
        const [cargando, setCargando] = useState(true);

        useEffect(()=>{
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data); 
                        if (!Array.isArray(data)) {
                            data=[data];
                        }
                        setData([...data]);
                        setCargando(false)
                    });
            }, []);

            return { data, cargando };

}


export default useGet;
