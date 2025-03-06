import { FetchApp } from "./components/FetchApp";
import { CounterApp } from "./components/CounterApp";
import { FormsApp } from "./components/FormsApp";
export default function HooksApp(){
    return(
        <>
            <h1>Aplicacion de Hooks</h1>
            <hr />
            <FetchApp/>
            <hr />
            <CounterApp/>
            <hr />
            <FormsApp/>
        </>
    )
}