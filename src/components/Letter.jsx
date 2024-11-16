import { useEffect, useState } from "react"
import { getRandomInt } from "../functions"

export default function Letter({ main, dynamic }) {
    const [color, setColor] = useState()

    useEffect(() => {
        const random = getRandomInt(6)
        switch (random) {
            case 0:
                setColor("text-red")
                break;
            case 1:
                setColor("text-blue")
                break;
            case 2:
                setColor("text-maroon")
                break;
            case 3:
                setColor("text-green")
                break;
            case 4:
                setColor("text-mauve")
                break;
            case 5:
                setColor("text-peach")
                break;
        }
    }, [])

    return (
        <div>
            <div className="text-center mb-5">
                <div className={`text-4xl font-bold ${color}`}>
                    {main}
                </div>
                <div className="text-2xl text-text font-semibold">
                    {dynamic}
                </div>
            </div>
        </div>
    )
}