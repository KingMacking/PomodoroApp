const ModalForm = ({configs, setConfigs}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const color = e.target.color.value
        const timers = {
            pomodoro: e.target.pomodoro.value,
            short: e.target.short.value,
            long: e.target.long.value,
        }
        const {pomodoro, short, long} = timers
        setConfigs({
            color: color,
            timers: [pomodoro, short, pomodoro, short, pomodoro, short, pomodoro, long]
        })
    }

    return (
        <form className="flex flex-col items-center w-full px-3 md:px-8" onSubmit={(e) => handleSubmit(e)}>
            <section className="flex flex-col gap-1 py-4 border-b md:gap-2 md:py-6 border-black/20">
                <h4 className="text-lg font-semibold">{"TIME (MINUTES)"}</h4>
                <div className="flex w-full gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="pomodoro" className="text-sm font-medium">pomodoro</label>
                        <input defaultValue={25} className="w-full px-1 py-2 rounded-md bg-primary/10" type="number" name="pomodoro" id="pomodoro"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="short" className="text-sm font-medium">short break</label>
                        <input defaultValue={5} className="w-full px-1 py-2 rounded-md bg-primary/10" type="number" name="short" id="short"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="long" className="text-sm font-medium">long break</label>
                        <input defaultValue={20} className="w-full px-1 py-2 rounded-md bg-primary/10" type="number" name="long" id="long"/>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-between w-full py-4 border-b md:py-6 border-black/20">
                <h4 className="text-lg font-semibold">COLOR</h4>
                <input defaultValue={configs.color} className="w-6" name="color" id="color" type="color" />
            </section>
            <button type="submit" className="px-6 py-2 my-4 font-semibold transition-all ease-in-out border rounded-full md:my-6 w-fit hover:bg-black hover:text-white">Apply</button>
        </form>
    )
}
export default ModalForm