import { Droplets, Eye, EyeClosed, Wind } from "lucide-react";

export default function Weather(){
    return(
        // wrapper
        <div className="font-mono text-center items-center align-middle text-black grid grid-cols-1 p-6 bg-yellow-400 rounded-2xl w-auto h-min relative border-solid border-3 border-gray-500">
            {/* City */}
            <div className="font-extrabold text-lg mb-3">Paris</div>
            {/* date */}
            <div className="font-medium text-sm bg-black text-yellow-400 rounded-xl px-3 py-0.5 my-2 mx-auto w-min text-nowrap">friday 20 january</div>
            {/* weather */}
            <div className="font-bold text-lg">Sunny</div>
            {/* temperature */}
            <div className="text-9xl">31&#176;</div>
            {/* wind / humidity / visibility */}
            <div className="grid grid-cols-3 gap-1 bg-black rounded-xl text-yellow-400 px-5 py-4">
                <div className="grid grid-cols-1  justify-center">
                    <Wind className="mx-auto" />
                    3km/h
                </div>
                <div>
                    <Droplets className="mx-auto" />
                    48%
                </div>
                <div>
                    <Eye className="mx-auto" />
                    1.6km
                </div>
            </div>
            {/* forecast */}
            <div>Weekly forecast</div>
            <div>
                <div>
                    26&#8451;
                    21 jan
                </div>
                <div>
                    25&#8451;
                    22 jan
                </div>
                <div>
                    27&#8451;
                    23 jan
                </div>
                <div>
                    26&#8451;
                    24 jan
                </div>
            </div>
        </div>
    )
}
