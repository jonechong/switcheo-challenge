import "./TransactionForm.css";
import { useNavigate } from "react-router-dom";

function TransactionForm() {
    const navigate = useNavigate();

    var timer;
    function sendOTP() {
        document.getElementById("sendOTPButton").disabled = true;
        var secondsLeft = 60;
        function countdown() {
            document.getElementById("sendOTPButton").textContent =
                "Resend OTP (" + secondsLeft.toString() + "s)";
            secondsLeft--;
            if (secondsLeft < 0) {
                clearInterval(timer);
                document.getElementById("sendOTPButton").textContent =
                    "Send OTP";
                document.getElementById("sendOTPButton").disabled = false;
            }
        }
        countdown();
        timer = setInterval(countdown, 1000);
    }
    function sendTokens() {
        var otpInput = document.getElementById("OTPField").value;
        var ethInput = document.getElementById("ETHAddressField").value;
        var amountInput = document.getElementById("sendAmountField").value;
        if (ethInput == "") {
            document.getElementById("invalidAddress").style.display = "block";
        } else {
            document.getElementById("invalidAddress").style.display = "none";
        }
        if (amountInput == "") {
            document.getElementById("invalidAmount").style.display = "block";
        } else {
            document.getElementById("invalidAmount").style.display = "none";
        }
        if (otpInput != "OTP") {
            document.getElementById("invalidOTP").style.display = "block";
        } else {
            document.getElementById("invalidOTP").style.display = "none";
        }
        if (ethInput != "" && amountInput != "" && otpInput == "OTP") {
            console.log("good!");

            clearInterval(timer);
            navigate("/success");
        }
    }
    return (
        <div className="TransactionBackground">
            <div className="Form">
                <span className="FormTitle">Coin Transfer</span>
                <br></br>
                <hr className="FormDivider"></hr>
                <div className="requiredField">
                    <span className="asterick">*</span>
                    <input
                        type="text"
                        className="inputField"
                        id="ETHAddressField"
                        placeholder="ETH Address"
                    ></input>
                </div>

                <span id="invalidAddress">Invalid address!</span>
                <div className="requiredField">
                    <span className="asterick">*</span>
                    <input
                        type="number"
                        className="inputField"
                        id="sendAmountField"
                        placeholder="Amount to send"
                    ></input>
                </div>

                <span id="invalidAmount">Invalid amount!</span>
                <div className="requiredField">
                    <span className="asterick">*</span>
                    <input
                        type="text"
                        id="OTPField"
                        className="inputField OTPField"
                        placeholder="OTP Authentication"
                    ></input>
                    <button
                        id="sendOTPButton"
                        className="sendOTPButton"
                        onClick={sendOTP}
                    >
                        Send OTP
                    </button>
                </div>
                <span id="invalidOTP">Invalid OTP!</span>
                <div className="requiredField">
                    <input
                        type="text"
                        className="inputField remarksField"
                        placeholder="Remarks"
                    ></input>
                </div>
                <button className="submitButton" onClick={sendTokens}>
                    Send Tokens
                </button>
            </div>
        </div>
    );
}

export default TransactionForm;
