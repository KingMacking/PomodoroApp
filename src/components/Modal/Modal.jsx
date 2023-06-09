import { Icon } from "@iconify/react"

const Modal = ({show, onClose, title, children}) => {
    return (
        <>
            {
                show &&
                <div className="fixed font-nunito top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#000000] bg-opacity-80 z-50" onClick={onClose}>
                    <div className="w-[300px] md:w-[600px] bg-white rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between gap-2 px-3 py-4 border-b md:py-6 md:px-6 border-black/20">
                            <h3 className="text-4xl font-semibold text-center font-title">{title}</h3>
                            <button className="" onClick={onClose}>
                                <Icon className="w-8 h-8 p-1 transition-all ease-in-out border rounded-full hover:bg-black hover:text-white" icon="maki:cross" />
                            </button>
                        </div>
                        <div className="">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Modal