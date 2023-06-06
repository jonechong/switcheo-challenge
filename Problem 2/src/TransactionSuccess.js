import "./TransactionForm.css";

function TransactionSuccess() {
    document.title = "Success";
    function returnToDashBoard() {
        console.log("returning to dashboard");
    }

    return (
        <div className="TransactionBackground">
            <div
                className="Form"
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <span id="successMessage">
                    Your transaction has been completed.
                </span>
                <button className="returnButton" onClick={returnToDashBoard}>
                    Return to dashboard
                </button>
            </div>
        </div>
    );
}

export default TransactionSuccess;
