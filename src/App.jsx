import { useState } from "react"
import Timer from "./components/Timer/Timer"
import useLocalStorage from "./hooks/useLocalStorage"
import CurrentStatus from "./components/CurrentStatus/CurrentStatus"
import ConfigsBtn from "./components/ConfigsBtn/ConfigsBtn"
import Modal from "./components/Modal/Modal"
import ModalForm from "./components/Modal/ModalForm/ModalForm"
import Footer from "./components/Footer/Footer"

// timers: [25, 5, 25, 5, 25, 5, 25, 20]
// timers: [0.1, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05]

function App() {
    const [configs, setConfigs] = useLocalStorage('configs', {
        color: "#F87070",
        timers: [25, 5, 25, 5, 25, 5, 25, 20]
    })
    const [currentTimer, setCurrentTimer] = useState(0)
    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className="flex flex-col items-center min-h-screen gap-10 bg-primary">
            <CurrentStatus configs={configs} currentTimer={currentTimer} />
            <Timer configs={configs} currentTimer={currentTimer} setCurrentTimer={setCurrentTimer} timer={configs.timers[currentTimer]}/>
            <ConfigsBtn setIsOpen={setIsOpen}/>
            <Footer />
            <Modal show={isOpen} onClose={() => setIsOpen(false)} title={"Settings"}>
                <ModalForm configs={configs} setConfigs={setConfigs} setIsOpen={setIsOpen} />
            </Modal>
        </div>
    )
}

export default App
