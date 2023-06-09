const STATUS = [
    {
        label: "pomodoro",
        values: [0,2,4,6],
    },
    {
        label: "short break",
        values: [1,3,5],
    },
    {
        label: "long break",
        values: [7],
    },
]

const CurrentStatus = ({currentTimer, configs}) => {
    const {color} = configs
    return (
        <section className="flex bg-[#101229] rounded-full mt-4 p-1 md:p-2 w-72 md:w-96 z-50 shadow-custom">
            {
                STATUS.map(stat => {
                    return (
                        <article
                            key={stat.label}
                            style={{backgroundColor: stat.values.includes(currentTimer) ? color : "transparent"}} 
                            className={`${stat.values.includes(currentTimer) ? "text-primary" : "text-white"} basis-1/3 text-center md:text-base text-sm font-bold font-nunito px-2 py-2 md:px-4 md:py-4 rounded-full`}
                        >
                            {stat.label}
                        </article>
                    )
                })
            }
        </section>
    )
}
export default CurrentStatus