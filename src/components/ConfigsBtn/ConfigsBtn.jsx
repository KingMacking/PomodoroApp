import { Icon } from "@iconify/react"

const ConfigsBtn = ({setIsOpen}) => {
    return (
        <button className="transition-all ease-in-out rounded-full hover:rotate-180 hover:scale-125" onClick={() => setIsOpen(true)}>
            <Icon className="w-8 h-8 text-white md:w-12 md:h-12" icon="ion:settings-sharp" />
        </button>
    )
}
export default ConfigsBtn