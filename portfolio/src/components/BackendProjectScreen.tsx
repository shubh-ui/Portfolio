const BackendProjectScreen = ({ APIEndPoints }: { APIEndPoints: object }) => {

    const keys = Object.keys(APIEndPoints);

    console.log(keys)

    const RouteBtnColor = {
        POST: "bg-green-700",
        PUT: "bg-yellow-500",
        GET: "bg-sky-400",
        DELETE: "bg-rose-600"
    }

    const RouterSideColor = {
        POST: "border-green-700 ",
        PUT: "border-yellow-500 ",
        GET: "border-sky-400",
        DELETE: "border-rose-600"
    }

    return (
        <div className="w-full h-full">
            {
                keys.map((k, index) => (
                    <div className="p-2.5" key={k}>
                        <div className="text-center text-lg bg-gray-200 rounded-sm">
                            <h3>{k.toLocaleUpperCase()}</h3>
                        </div>

                        <div className="text-sm">
                            {
                                //@ts-ignore
                                APIEndPoints[k].map((router, i) => (
                                    <div key={i} className={`p-1.5 border-l-4 ${RouterSideColor[router.method as keyof typeof RouterSideColor   ]} rounded-md my-2`}>
                                        <div className="flex gap-4 items-center">
                                            <div className={`${RouteBtnColor[router.method as keyof typeof RouteBtnColor]} text-white text-xs py-0.5 px-2 rounded-sm`}>
                                                <span>{router.method}</span>
                                            </div>
                                            <div className="text-sm font-semibold">
                                                <span>{router.route}</span>
                                            </div>
                                        </div>
                                        <div className="text-xs">
                                            <span>{router.description}</span>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default BackendProjectScreen;