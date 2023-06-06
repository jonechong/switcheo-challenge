import "./TransactionForm.css";

function TransactionFailure() {
    document.title = "Failure";
    function returnToDashBoard() {
        console.log("returning to dashboard");
    }
    return (
        <div className="TransactionBackground">
            <div
                className="Form"
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <span id="failureMessage">
                    Your transaction was unsuccessful.
                </span>
                <span
                    id="failureMessage"
                    style={{
                        fontSize: "1.5rem",
                        width: "75%",
                        paddingBottom: "5%",
                    }}
                >
                    Please try again at a later time. Should the issue persist,
                    kindly contact our administrator for further assistance.
                </span>
                <button className="returnButton" onClick={returnToDashBoard}>
                    Return to dashboard
                </button>
            </div>
        </div>
    );
}

export default TransactionFailure;
