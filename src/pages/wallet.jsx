import '../app/globals.css';
import '../styles/wallet.css';
import { useState } from 'react';

import Header from "@/components/Header";
import Footer from "@/components/Footer";





export default function Wallet() {

    
    const [incoming, setIncoming] = useState(0);
    const [spending, setSpending] = useState(0);
    
    class MoneyHandler {
        constructor() {
        }
    
        async handleIncomingSubmit(event) {
            event.preventDefault();
    
            console.log("Incoming:", event.target.incomingMoneyInput.value);
            console.log("desc:", event.target.descriptionInput.value);
            console.log("date:", event.target.dateInput.value);
    
            if (Number(event.target.incomingMoneyInput.value)) {
                setIncoming(
                    incoming + Number(event.target.incomingMoneyInput.value)
                );
            } else {
                console.log("incoming empty.");
            }
            //window.localStorage.setItem()
    
            event.target.incomingMoneyInput.value = "";
            event.target.descriptionInput.value = "";
        }

        async handleSpandingSubmit(event){
            event.preventDefault();

            console.log("Incoming:", event.target.inputSpending.value);
            console.log("desc:", event.target.spendingDescription.value);
            console.log("date:", event.target.spendingDate.value);
    
            if (Number(event.target.incomingMoneyInput.value)) {
                setSpending(
                    spending + Number(event.target.inputSpending.value)
                );
            } else {
                console.log("incoming empty.");
            }
            //window.localStorage.setItem()
    
            event.target.inputSpending.value = "";
            event.target.spendingDescription.value = "";
        }
    };

    const moneyHandler = new MoneyHandler();


    return (
        <>
            <Header></Header>
            <main>
                <div className="stats-container">
                    <p>Saved Money: $<span>1000,00</span></p>
                    <p>Incoming: $<span>{Number(incoming).toFixed(2)}</span></p>
                    <p>Month spending: $<span>{Number(spending).toFixed(2)}</span></p>
                </div>
                <div className="form-contaner">
                    <div className="incoming-contaner">
                        <form className="incoming-form" id='incoming-money' onSubmit={moneyHandler.handleIncomingSubmit}>
                            <div className="input-form-container">
                                <label htmlFor="incomingMoneyInput">New Incomming:</label>
                                <input type="number" name="incomingMoneyInput" id="incomingMoneyInput" />
                            </div>

                            <div className="input-form-container">
                                <label htmlFor="descriptionInput">Description:</label>
                                <input type="text" name="descriptionInput" id="descriptionInput" />
                            </div>

                            <div className="input-form-container">
                                <label htmlFor="dateInput">Date:</label>
                                <input type="date" name="dateInput" id="dateInput" />
                            </div>
                            <button type="submit">Submit new incomming</button>
                        </form>
                    </div>
                    <div className="spending-contaner">
                        <form className="spending-form" id='spending-form' onSubmit={moneyHandler.handleSpandingSubmit}>
                            <div className="input-form-container">
                                <label htmlFor="inputSpending">New Incomming:</label>
                                <input type="number" name="inputSpending" id="inputSpending" />
                            </div>

                            <div className="input-form-container">
                                <label htmlFor="spendingDescription">Description:</label>
                                <input type="text" name="spendingDescription" id="spendingDescription" />
                            </div>

                            <div className="input-form-container">
                                <label htmlFor="spendingDate">Date:</label>
                                <input type="date" name="spendingDate" id="spendingDate" />
                            </div>
                            <button type="submit">Submit new incomming</button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
