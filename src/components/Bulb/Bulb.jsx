import { useEffect } from "react"

function Bulb() {
    useEffect(() => {
        console.log('Bulb component mounted');
        return () => {
            console.log('Bulb component unmounted');
        }
    }, [])
    return <div style={{ height: 100, width: 100, backgroundColor: 'yellow', borderRadius: 50 }}></div>
}

export default Bulb